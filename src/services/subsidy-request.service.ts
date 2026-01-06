import { Injectable } from '@nestjs/common';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';
import { SubsidyRequestItemRepository } from '../repositories/subsidy-request-item.repository';
import { SubsidyStatusHistoryRepository } from '../repositories/subsidy-status-history.repository';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto } from '../dto/subsidy-request.dto';
import { SubsidyKPIs, SubsidyByDepartment, SubsidyByMonth } from '../dto/subsidy-analytics.dto';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { PrismaService } from './prisma.service';
import { GoogleDriveService } from './google-drive.service';
import { format } from 'date-fns';

import { SubsidyHistoryType } from '../@generated/prisma/subsidy-history-type.enum';
import { AnnualBudgetService } from './annual-budget.service';
import { DecimalHelper } from '../common/helpers/decimal.helper';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class SubsidyRequestService {
  constructor(
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
    private readonly subsidyRequestItemRepository: SubsidyRequestItemRepository,
    private readonly historyRepository: SubsidyStatusHistoryRepository,
    private readonly prisma: PrismaService,
    private readonly driveService: GoogleDriveService,
    private readonly annualBudgetService: AnnualBudgetService,
  ) {}

  async create(data: SubsidyRequestCreateDto, userId: string): Promise<SubsidyRequest> {
    // Se subsidy_status_id não foi fornecido, buscar status "PENDING" automaticamente
    if (!data.subsidy_status_id) {
      const pendingStatus = await this.prisma.subsidyStatus.findFirst({
        where: { name: 'PENDING', is_deleted: false },
      });

      if (!pendingStatus) {
        throw new CustomGraphQLError('Pending status not found. Please create a PENDING status first.', ErrorCode.NOT_FOUND, 404);
      }

      data.subsidy_status_id = pendingStatus.id;
    }

    const subsidyRequest = await this.subsidyRequestRepository.create(data, userId);

    // Create initial history record
    await this.historyRepository.create({
      subsidy_request_id: subsidyRequest.id,
      status_id: data.subsidy_status_id,
      previous_status_id: undefined,
      type: SubsidyHistoryType.STATUS_CHANGE,
      reason: 'Solicitação criada',
      changed_by: userId,
    });

    return subsidyRequest;
  }

  async update(id: string, data: SubsidyRequestUpdateDto, userId: string): Promise<SubsidyRequest> {
    // Get current subsidy to check if status changed
    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError('SubsidyRequest not found', ErrorCode.NOT_FOUND, 404);
    }

    const result = await this.subsidyRequestRepository.update(id, data, userId);

    // If status changed, create history record
    if (data.subsidy_status_id && data.subsidy_status_id !== current.subsidy_statuses_id) {
      await this.historyRepository.create({
        subsidy_request_id: id,
        status_id: data.subsidy_status_id,
        previous_status_id: current.subsidy_statuses_id,
        type: SubsidyHistoryType.STATUS_CHANGE,
        reason: data.notes || 'Status alterado',
        changed_by: userId,
      });
    }

    // If priority changed, create history record
    if (data.priority && data.priority !== current.priority) {
      await this.historyRepository.create({
        subsidy_request_id: id,
        status_id: current.subsidy_statuses_id, // Keep current status context
        type: SubsidyHistoryType.PRIORITY_CHANGE,
        reason: `Prioridade alterada de ${current.priority} para ${data.priority}`,
        changed_by: userId,
      });
    }

    return result;
  }

  async addMessage(subsidyRequestId: string, message: string, userId: string): Promise<any> {
    const subsidyRequest = await this.subsidyRequestRepository.findById(subsidyRequestId);
    if (!subsidyRequest) {
      throw new CustomGraphQLError('SubsidyRequest not found', ErrorCode.NOT_FOUND, 404);
    }

    return this.historyRepository.create({
      subsidy_request_id: subsidyRequestId,
      status_id: subsidyRequest.subsidy_statuses_id,
      previous_status_id: undefined,
      type: SubsidyHistoryType.COMMENT,
      reason: message,
      changed_by: userId,
    });
  }

  async delete(id: string, userId: string): Promise<SubsidyRequest> {
    // Buscar subsidy request com status
    const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id, is_deleted: false },
      include: {
        subsidy_status: true,
      },
    });

    if (!subsidyRequest) {
      throw new CustomGraphQLError('SubsidyRequest not found', ErrorCode.NOT_FOUND, 404);
    }

    // Validação: Não permitir deletar se status for APPROVED ou CLOSED
    const blockedStatuses = ['APPROVED', 'CLOSED'];
    if (subsidyRequest.subsidy_status?.name && blockedStatuses.includes(subsidyRequest.subsidy_status.name)) {
      throw new CustomGraphQLError(
        `Cannot delete ${subsidyRequest.subsidy_status.name.toLowerCase()} subsidy requests`,
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'SUBSIDY_IS_APPROVED_OR_CLOSED' } }
      );
    }

    // Executar soft delete em cascata dentro de uma transação
    const result = await this.prisma.$transaction(async (_tx) => {
      // 0. Create history record BEFORE deletion (para manter auditoria)
      await this.historyRepository.create({
        subsidy_request_id: id,
        status_id: subsidyRequest.subsidy_statuses_id,
        previous_status_id: undefined,
        type: SubsidyHistoryType.STATUS_CHANGE,
        reason: 'Solicitação de subsídio deletada',
        changed_by: userId,
      });

      // 1. Soft delete todos os receipts
      await this.prisma.subsidyReceipt.updateMany({
        where: {
          subsidy_request_id: id,
          is_deleted: false,
        },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // 2. Soft delete todos os items
      await this.subsidyRequestItemRepository.softDeleteBySubsidyRequestId(id, userId);

      // 3. Soft delete todo o histórico de status
      await this.historyRepository.softDeleteBySubsidyRequestId(id, userId);

      // 4. Soft delete o SubsidyRequest
      const deletedSubsidy = await this.subsidyRequestRepository.softDelete(id, userId);

      return deletedSubsidy;
    });

    // 5. Renomear pasta no Google Drive (fora da transação, não crítico se falhar)
    try {
      console.log(`🔍 Searching for Google Drive folder for subsidy ${id}`);
      
      // Buscar um receipt deste subsidy request que tenha drive_file_id
      const receipt = await this.prisma.subsidyReceipt.findFirst({
        where: {
          subsidy_request_id: id,
          drive_file_id: { not: null },
        },
      });

      console.log(`📄 Found receipt:`, receipt ? { id: receipt.id, drive_file_id: receipt.drive_file_id } : 'No receipt found');

      if (receipt?.drive_file_id) {
        // Obter metadados do arquivo para encontrar o parent folder
        console.log(`📂 Getting file metadata for drive_file_id: ${receipt.drive_file_id}`);
        const fileMetadata = await this.driveService.getFileMetadata(receipt.drive_file_id);
        
        console.log(`📊 File metadata:`, {
          id: fileMetadata.id,
          name: fileMetadata.name,
          parents: fileMetadata.parents,
        });
        
        // O parent do arquivo é a pasta do subsídio
        if (fileMetadata.parents && fileMetadata.parents.length > 0) {
          const folderId = fileMetadata.parents[0];
          console.log(`📁 Found parent folder ID: ${folderId}`);
          await this.driveService.renameFolderWithPrefix(folderId, '[DELETED] ');
          console.log(`✅ Renamed Google Drive folder for subsidy ${id}`);
        } else {
          console.log(`⚠️  No parent folder found for subsidy ${id}`);
          console.log(`⚠️  File metadata parents:`, fileMetadata.parents);
        }
      } else {
        console.log(`⚠️  No receipts with drive_file_id found for subsidy ${id}`);
      }
    } catch (error) {
      // Log error but don't fail the deletion
      console.error(`❌ Error renaming Google Drive folder for subsidy ${id}:`, error);
      console.error(`❌ Error details:`, {
        message: error.message,
        stack: error.stack,
      });
    }

    return result;
  }

  async findById(id: string): Promise<SubsidyRequest | null> {
    return this.subsidyRequestRepository.findById(id);
  }

  async findAll(): Promise<SubsidyRequest[]> {
    return this.subsidyRequestRepository.findAll();
  }

  async findByProjectId(projectId: string): Promise<SubsidyRequest[]> {
    return this.subsidyRequestRepository.findManyByFilters({ project_id: projectId });
  }

  async approve(id: string, approvedAmount: number, userId: string): Promise<SubsidyRequest> {
    // Get current subsidy
    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError('SubsidyRequest not found', ErrorCode.NOT_FOUND, 404);
    }

    // Buscar status "APPROVED"
    const approvedStatus = await this.prisma.subsidyStatus.findFirst({
      where: { name: 'APPROVED', is_deleted: false },
    });

    if (!approvedStatus) {
      throw new CustomGraphQLError('Approved status not found', ErrorCode.NOT_FOUND, 404);
    }

    const result = await this.subsidyRequestRepository.update(
      id,
      {
        approved_amount: approvedAmount,
        subsidy_status_id: approvedStatus.id,
        approved_at: new Date(),
        approved_by: userId,
      } as SubsidyRequestUpdateDto,
      userId,
    );

    // Create history record
    await this.historyRepository.create({
      subsidy_request_id: id,
      status_id: approvedStatus.id,
      previous_status_id: current.subsidy_statuses_id,
      reason: `Solicitação aprovada. Valor aprovado: ${approvedAmount}`,
      changed_by: userId,
    });

    // Update Annual Budget (Release allocation, Add expense)
    const fullRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id },
      select: { department_id: true, total_budget: true }
    });

    if (fullRequest?.department_id) {
       await this.annualBudgetService.updateBudgetFinancials(
         fullRequest.department_id,
         new Date().getFullYear(),
         -Number(fullRequest.total_budget || 0), // Release allocation
         approvedAmount, // Add expense
         userId
       );
    }

    return result;
  }

  async reject(id: string, rejectionReason: string, userId: string): Promise<SubsidyRequest> {
    // Get current subsidy
    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError('SubsidyRequest not found', ErrorCode.NOT_FOUND, 404);
    }

    // Buscar status "REJECTED"
    const rejectedStatus = await this.prisma.subsidyStatus.findFirst({
      where: { name: 'REJECTED', is_deleted: false },
    });

    if (!rejectedStatus) {
      throw new CustomGraphQLError('Rejected status not found', ErrorCode.NOT_FOUND, 404);
    }

    const result = await this.subsidyRequestRepository.update(
      id,
      {
        rejection_reason: rejectionReason,
        subsidy_status_id: rejectedStatus.id,
      } as SubsidyRequestUpdateDto,
      userId,
    );

    // Create history record
    await this.historyRepository.create({
      subsidy_request_id: id,
      status_id: rejectedStatus.id,
      previous_status_id: current.subsidy_statuses_id,
      reason: rejectionReason || 'Solicitação rejeitada',
      changed_by: userId,
    });

    // Update Annual Budget (Release allocation only)
    const fullRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id },
      select: { department_id: true, total_budget: true }
    });

    if (fullRequest?.department_id) {
       await this.annualBudgetService.updateBudgetFinancials(
         fullRequest.department_id,
         new Date().getFullYear(),
         -Number(fullRequest.total_budget || 0), // Release allocation
         0, // No expense
         userId
       );
    }

    return result;
  }

  async recalculateStatus(id: string, userId: string): Promise<void> {
    const subsidyRequest = await this.subsidyRequestRepository.findById(id);
    if (!subsidyRequest) return;

    // Fetch all receipts
    const receipts = await this.prisma.subsidyReceipt.findMany({
      where: { 
        subsidy_request_id: id,
        is_deleted: false 
      }
    });

    const totalDocs = receipts.length;
    if (totalDocs === 0) return; // No documents, do nothing

    const approvedDocs = receipts.filter(r => r.is_validated && r.approved).length;
    const rejectedDocs = receipts.filter(r => r.is_validated && !r.approved).length;
    const pendingDocs = receipts.filter(r => !r.is_validated).length;

    let targetStatusName = 'PENDING';

    if (approvedDocs === totalDocs) {
      targetStatusName = 'APPROVED';
    } else if (rejectedDocs === totalDocs) {
      targetStatusName = 'REJECTED';
    } else if (pendingDocs < totalDocs) {
      // Partial validation or mixed results (e.g. some approved, some rejected)
      // "In Review": If not 100% approved and not 100% rejected, and at least some processing started
      targetStatusName = 'IN_REVIEW';
    } else {
      // All pending
      targetStatusName = 'PENDING';
    }

    // Fetch Status ID
    const status = await this.prisma.subsidyStatus.findFirst({
      where: { name: targetStatusName, is_deleted: false }
    });

    if (!status) {
      console.warn(`[recalculateStatus] Status ${targetStatusName} not found`);
      return;
    }

    // Check if update is needed
    if (subsidyRequest.subsidy_statuses_id !== status.id) {
       console.log(`🤖 Auto-updating subsidy ${id} status to ${targetStatusName}`);

       // If changing to APPROVED or REJECTED, use the specific methods that handle budget
       if (targetStatusName === 'APPROVED') {
         // Calculate total approved amount from validated receipts
          const approvedReceiptsValues = receipts
            .filter(r => r.is_validated && r.approved)
            .map(r => r.amount);
         
         const totalApprovedAmount = DecimalHelper.sum(approvedReceiptsValues).toNumber();
         
         // Use approve method which handles budget calculations
         await this.approve(id, totalApprovedAmount, userId);
       } else if (targetStatusName === 'REJECTED') {
         // Use reject method which handles budget calculations
         await this.reject(
           id, 
           'Todos os documentos foram rejeitados',
           userId
         );
       } else {
         // For other status changes (PENDING, IN_REVIEW), use regular update
         const updateData: SubsidyRequestUpdateDto = {
           subsidy_status_id: status.id,
           notes: `Status atualizado automaticamente para ${targetStatusName} baseado na validação de documentos.`
         };
         await this.update(id, updateData, userId);
       }
    }
  }

  // Analytics methods
  async getSubsidyKPIs(institutionId?: string): Promise<SubsidyKPIs> {
    const where = institutionId ? { institution_id: institutionId, is_deleted: false } : { is_deleted: false };
    
    const requests = await this.prisma.subsidyRequest.findMany({
      where,
      include: { subsidy_status: true }
    });
    
    const totalRequests = requests.length;
    const pendingRequests = requests.filter(r => r.subsidy_status?.name === 'PENDING').length;
    const inReviewRequests = requests.filter(r => r.subsidy_status?.name === 'IN_REVIEW').length;
    const approvedRequests = requests.filter(r => r.subsidy_status?.name === 'APPROVED').length;
    const rejectedRequests = requests.filter(r => r.subsidy_status?.name === 'REJECTED').length;
    
    const totalRequested = DecimalHelper.sum(requests.map(r => r.total_budget)).toNumber();
    const approvedRequestsList = requests.filter(r => r.subsidy_status?.name === 'APPROVED');
    const totalApproved = DecimalHelper.sum(approvedRequestsList.map(r => r.approved_amount)).toNumber();
    
    const approvalRate = totalRequests > 0 ? Math.round((approvedRequests / totalRequests) * 100) : 0;
    
    return {
      totalRequests,
      pendingRequests,
      inReviewRequests,
      approvedRequests,
      rejectedRequests,
      totalRequested,
      totalApproved,
      approvalRate
    };
  }

  async getSubsidyByDepartment(institutionId?: string): Promise<SubsidyByDepartment[]> {
    const requests = await this.prisma.subsidyRequest.findMany({
      where: institutionId ? { institution_id: institutionId, is_deleted: false } : { is_deleted: false },
      include: { department: true }
    });
    
    const grouped: Record<string, Record<string, number>> = {};
    
    requests.forEach(request => {
      const dept = request.department?.name || 'Other';
      const month = format(new Date(request.created_at), 'MMM');
      
      if (!grouped[dept]) grouped[dept] = {};
      if (!grouped[dept][month]) grouped[dept][month] = 0;
      
      const currentTotal = grouped[dept][month] || 0;
      grouped[dept][month] = DecimalHelper.toDecimal(currentTotal).plus(request.total_budget).toNumber();
    });
    
    const result: SubsidyByDepartment[] = [];
    Object.entries(grouped).forEach(([dept, months]) => {
      Object.entries(months).forEach(([month, amount]) => {
        result.push({ department: dept, month, amount });
      });
    });
    
    return result;
  }

  async getSubsidyByMonth(institutionId?: string): Promise<SubsidyByMonth[]> {
    const requests = await this.prisma.subsidyRequest.findMany({
      where: institutionId ? { institution_id: institutionId, is_deleted: false } : { is_deleted: false },
      include: { subsidy_status: true }
    });
    
    const monthlyData: Record<string, { approved: number, pending: number, rejected: number }> = {};
    
    requests.forEach(request => {
      const monthName = format(new Date(request.created_at), 'MMMM');
      
      if (!monthlyData[monthName]) {
        monthlyData[monthName] = { approved: 0, pending: 0, rejected: 0 };
      }
      
      const status = request.subsidy_status?.name;
      if (status === 'APPROVED') monthlyData[monthName].approved++;
      else if (status === 'PENDING') monthlyData[monthName].pending++;
      else if (status === 'REJECTED') monthlyData[monthName].rejected++;
    });
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = new Date().getMonth();
    
    return months.slice(0, currentMonth + 1).map((month, index) => ({
      month,
      approved: monthlyData[month]?.approved || 0,
      pending: monthlyData[month]?.pending || 0,
      rejected: monthlyData[month]?.rejected || 0,
      quarter: Math.floor(index / 3) + 1
    }));
  }
}
