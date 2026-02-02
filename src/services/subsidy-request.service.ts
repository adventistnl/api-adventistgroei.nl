import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';
import { SubsidyRequestItemRepository } from '../repositories/subsidy-request-item.repository';
import { SubsidyStatusHistoryRepository } from '../repositories/subsidy-status-history.repository';
import { SubsidyReceiptRepository } from '../repositories/subsidy-receipt.repository';
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
import { SubsidyReceiptService } from './subsidy-receipt.service';
import { translate } from '../../i18n.config';
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';

@Injectable()
export class SubsidyRequestService {
  constructor(
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
    private readonly subsidyRequestItemRepository: SubsidyRequestItemRepository,
    private readonly historyRepository: SubsidyStatusHistoryRepository,
    private readonly subsidyReceiptRepository: SubsidyReceiptRepository,
    private readonly prisma: PrismaService,
    private readonly driveService: GoogleDriveService,
    private readonly annualBudgetService: AnnualBudgetService,
    @Inject(forwardRef(() => SubsidyReceiptService))
    private readonly subsidyReceiptService: SubsidyReceiptService,
  ) {}

  private validateStatusTransition(currentStatusName: string | undefined, newStatusName: string, language: LanguagePreference = LanguagePreference.en) {
      if (!currentStatusName) return;

      const from = currentStatusName.toUpperCase();
      const to = newStatusName.toUpperCase();

      // Rule 1: Closed status cannot be changed to anything else
      if (from === 'CLOSED' && from !== to) {
          throw new CustomGraphQLError(
              translate('errors.status_is_closed', language, { ns: 'subsidy' }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'STATUS_IS_CLOSED' } }
          );
      }

      // Rule 2: In Review -> Closed Not Allowed directly
      if (from === 'IN_REVIEW' && to === 'CLOSED') {
           throw new CustomGraphQLError(
              translate('errors.invalid_transition_in_review_to_closed', language, { ns: 'subsidy' }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_IN_REVIEW_TO_CLOSED' } }
          );
      }

      // Rule 3: Approved/Rejected can ONLY go to Closed (if not staying same)
      if ((from === 'APPROVED' || from === 'REJECTED') && to !== 'CLOSED' && from !== to) {
           throw new CustomGraphQLError(
              translate('errors.invalid_transition_final_state', language, { ns: 'subsidy', from, to }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_FINAL_STATE' } }
          );
      }
  }

  private ensureNotClosed(statusName: string | undefined, language: LanguagePreference = LanguagePreference.en) {
    if (statusName?.toUpperCase() === 'CLOSED') {
      throw new CustomGraphQLError(
        translate('errors.action_not_allowed_closed', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'STATUS_IS_CLOSED' } }
      );
    }
  }

  /**
   * Check if user has FINANCIAL_MANAGER role
   */
  private async userHasFinancialRole(userId: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        user_roles: {
          where: { is_deleted: false },
          include: {
            role: {
              select: { key_code: true }
            }
          }
        }
      }
    });

    if (!user) return false;

    const userRoles = user.user_roles.map(ur => ur.role.key_code);
    return userRoles.includes('FINANCIAL_MANAGER');
  }

  private async ensureAllDocumentsValidated(id: string, language: LanguagePreference = LanguagePreference.en) {
    const pendingReceipts = await this.prisma.subsidyReceipt.count({
      where: {
        subsidy_request_id: id,
        is_deleted: false,
        is_validated: false 
      }
    });

    if (pendingReceipts > 0) {
       throw new CustomGraphQLError(
        translate('errors.documents_not_validated', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'DOCUMENTS_NOT_VALIDATED' } }
      );
    }
  }

  /**
   * Validates that ALL documents are approved (not just validated).
   * This blocks approval of subsidy if any document was rejected.
   */
  private async ensureAllDocumentsApproved(id: string, language: LanguagePreference = LanguagePreference.en) {
    const receipts = await this.prisma.subsidyReceipt.findMany({
      where: {
        subsidy_request_id: id,
        is_deleted: false,
      },
      select: {
        is_validated: true,
        approved: true,
      }
    });

    // Check for any pending (not validated) documents
    const pendingCount = receipts.filter(r => !r.is_validated).length;
    if (pendingCount > 0) {
      throw new CustomGraphQLError(
        translate('errors.documents_pending_validation', language, { ns: 'subsidy', count: pendingCount }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'DOCUMENTS_NOT_VALIDATED' } }
      );
    }

    // Check for any rejected documents
    const rejectedCount = receipts.filter(r => r.is_validated && !r.approved).length;
    if (rejectedCount > 0) {
      throw new CustomGraphQLError(
        translate('errors.documents_rejected', language, { ns: 'subsidy', count: rejectedCount }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'DOCUMENTS_REJECTED' } }
      );
    }
  }

  async create(data: SubsidyRequestCreateDto, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Se subsidy_status_id não foi fornecido, buscar status "PENDING" automaticamente
    if (!data.subsidy_status_id) {
      const pendingStatus = await this.prisma.subsidyStatus.findFirst({
        where: { name: 'PENDING', is_deleted: false },
      });

      if (!pendingStatus) {
        throw new CustomGraphQLError(
          translate('errors.pending_status_not_found', language, { ns: 'subsidy' }),
          ErrorCode.NOT_FOUND,
          404
        );
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
      reason: translate('history.request_created', language, { ns: 'subsidy' }),
      changed_by: userId,
    });

    // Process linked_activity_document_ids if any
    if (data.items && data.items.length > 0) {
      // Fetch created items to get their IDs
      const createdItems = await this.subsidyRequestItemRepository.findBySubsidyRequestId(subsidyRequest.id);
      
      for (const itemInput of data.items) {
        if (itemInput.linked_activity_document_ids && itemInput.linked_activity_document_ids.length > 0) {
          const createdItem = createdItems.find(
            (ci) => ci.project_activity_id === itemInput.project_activity_id
          );

          if (createdItem) {
            for (let i = 0; i < itemInput.linked_activity_document_ids.length; i++) {
              const docId = itemInput.linked_activity_document_ids[i];
              const docAmount = itemInput.linked_document_amounts?.[i] || 0;
              
              await this.subsidyReceiptService.createFromActivityDocument(
                userId,
                subsidyRequest.id,
                docId,
                itemInput.project_activity_id,
                createdItem.id,
                docAmount
              );
            }
          }
        }
      }
    }

    // Validate that the sum of receipt amounts matches the requested amount for each item
    if (data.items && data.items.length > 0) {
      for (const itemInput of data.items) {
        // Calculate sum of document amounts for this item
        const documentAmountsSum = (itemInput.linked_document_amounts || []).reduce((sum, amount) => sum + amount, 0);
        
        // Check if sum matches requested amount
        if (documentAmountsSum > 0 && Math.abs(documentAmountsSum - itemInput.requested_amount) > 0.01) {
          throw new CustomGraphQLError(
            translate('errors.document_amounts_mismatch', language, { ns: 'subsidy', sum: documentAmountsSum, requested: itemInput.requested_amount }),
            ErrorCode.VALIDATION_ERROR,
            400
          );
        }
      }
    }

    return subsidyRequest;
  }

  async update(id: string, data: SubsidyRequestUpdateDto, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Get current subsidy to check if status changed


    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Checking if currently closed
    this.ensureNotClosed(current.subsidy_status?.name, language);

    // If status is being changed, validate BEFORE the update
    if (data.subsidy_status_id && data.subsidy_status_id !== current.subsidy_statuses_id) {
      const newStatus = await this.prisma.subsidyStatus.findUnique({ where: { id: data.subsidy_status_id } });
      
      if (newStatus) {
        // Validate status transition
        this.validateStatusTransition(current.subsidy_status?.name, newStatus.name, language);
        
        const targetName = newStatus.name.toUpperCase();
        
        // Validate documents for terminal states
        if (['APPROVED', 'REJECTED', 'CLOSED'].includes(targetName)) {
          await this.ensureAllDocumentsValidated(id, language);
        }
        
        // Only FINANCIAL_MANAGER can close a subsidy request - MUST be checked BEFORE update
        if (targetName === 'CLOSED') {
          const hasFinancialRole = await this.userHasFinancialRole(userId);
          if (!hasFinancialRole) {
            throw new CustomGraphQLError(
              translate('errors.only_financial_can_close', language, { ns: 'subsidy' }),
              ErrorCode.FORBIDDEN,
              403,
              { additional: { errorCode: 'ONLY_FINANCIAL_CAN_CLOSE' } }
            );
          }
        }
      }
    }

    const result = await this.subsidyRequestRepository.update(id, data, userId);

    // Process linked_activity_document_ids if any
    if (data.items && data.items.length > 0) {
      // Fetch created items to get their IDs
      const createdItems = await this.subsidyRequestItemRepository.findBySubsidyRequestId(id);
      
      for (const itemInput of data.items) {
        if (itemInput.linked_activity_document_ids && itemInput.linked_activity_document_ids.length > 0) {
          const createdItem = createdItems.find(
            (ci) => ci.project_activity_id === itemInput.project_activity_id
          );

          if (createdItem) {
            for (let i = 0; i < itemInput.linked_activity_document_ids.length; i++) {
              const docId = itemInput.linked_activity_document_ids[i];
              const docAmount = itemInput.linked_document_amounts?.[i] || 0;
              
              await this.subsidyReceiptService.createFromActivityDocument(
                userId,
                id,
                docId,
                itemInput.project_activity_id,
                createdItem.id,
                docAmount
              );
            }
          }
        }


      }
    }

    // Validate that the sum of receipt amounts matches the requested amount for each item
    // For UPDATE, we need to check ALL receipts for each item, not just linked ones
    if (data.items && data.items.length > 0) {
      const createdItems = await this.subsidyRequestItemRepository.findBySubsidyRequestId(id);
      
      for (const itemInput of data.items) {
        const createdItem = createdItems.find(
          (ci) => ci.project_activity_id === itemInput.project_activity_id
        );

        if (createdItem) {
          // Fetch all receipts for this item
          const itemReceipts = await this.subsidyReceiptRepository.findBySubsidyRequestItemId(createdItem.id);
          const totalReceiptAmount = itemReceipts
            .filter(r => !r.is_deleted)
            .reduce((sum, receipt) => sum + Number(receipt.amount), 0);

          // Check if sum matches requested amount
          if (totalReceiptAmount > 0 && Math.abs(totalReceiptAmount - itemInput.requested_amount) > 0.01) {
            throw new CustomGraphQLError(
              `The sum of document amounts (${totalReceiptAmount}) does not match the requested amount (${itemInput.requested_amount}) for the activity`,
              ErrorCode.VALIDATION_ERROR,
              400
            );
          }
        }
      }
    }

    // If status changed, create history record
    if (data.subsidy_status_id && data.subsidy_status_id !== current.subsidy_statuses_id) {
      // Fetch status names for better history message
      const [previousStatus, newStatus] = await Promise.all([
        this.prisma.subsidyStatus.findUnique({ where: { id: current.subsidy_statuses_id } }),
        this.prisma.subsidyStatus.findUnique({ where: { id: data.subsidy_status_id } })
      ]);

      // Translate status names using status key (name is like PENDING, IN_REVIEW, etc.)
      const previousStatusKey = previousStatus?.name?.toLowerCase().replace(' ', '_') || 'unknown';
      const newStatusKey = newStatus?.name?.toLowerCase().replace(' ', '_') || 'unknown';
      const previousStatusName = translate(`status.${previousStatusKey}`, language, { ns: 'subsidy' });
      const newStatusName = translate(`status.${newStatusKey}`, language, { ns: 'subsidy' });
      const reason = data.notes || translate('history.status_changed', language, { ns: 'subsidy', from: previousStatusName, to: newStatusName });

      await this.historyRepository.create({
        subsidy_request_id: id,
        status_id: data.subsidy_status_id,
        previous_status_id: current.subsidy_statuses_id,
        type: SubsidyHistoryType.STATUS_CHANGE,
        reason,
        changed_by: userId,
      });

      // When status changes to CLOSED, release allocation and add approved amount to spent
      if (newStatus?.name.toUpperCase() === 'CLOSED') {
        const fullRequest = await this.prisma.subsidyRequest.findUnique({
          where: { id },
          select: { department_id: true, approved_amount: true, total_budget: true }
        });

        if (fullRequest?.department_id && fullRequest.approved_amount) {
          await this.annualBudgetService.updateBudgetFinancials(
            fullRequest.department_id,
            new Date().getFullYear(),
            -Number(fullRequest.total_budget || 0), // Release allocation (remove from planned)
            Number(fullRequest.approved_amount), // Add approved amount as expense (move to spent)
            userId
          );
        }
      }
    }

    // If priority changed, create history record
    if (data.priority && data.priority !== current.priority) {
      await this.historyRepository.create({
        subsidy_request_id: id,
        status_id: current.subsidy_statuses_id, // Keep current status context
        type: SubsidyHistoryType.PRIORITY_CHANGE,
        reason: translate('history.priority_changed', language, { ns: 'subsidy', from: current.priority, to: data.priority }),
        changed_by: userId,
      });
    }

    return result;
  }

  async addMessage(subsidyRequestId: string, message: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<any> {
    const subsidyRequest = await this.subsidyRequestRepository.findById(subsidyRequestId);
    if (!subsidyRequest) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    this.ensureNotClosed(subsidyRequest.subsidy_status?.name, language);

    return this.historyRepository.create({
      subsidy_request_id: subsidyRequestId,
      status_id: subsidyRequest.subsidy_statuses_id,
      previous_status_id: undefined,
      type: SubsidyHistoryType.COMMENT,
      reason: message,
      changed_by: userId,
    });
  }

  async delete(id: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Buscar subsidy request com status
    const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id, is_deleted: false },
      include: {
        subsidy_status: true,
      },
    });

    if (!subsidyRequest) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Validação: Não permitir deletar se status for APPROVED ou CLOSED
    const blockedStatuses = ['APPROVED', 'CLOSED'];
    if (subsidyRequest.subsidy_status?.name && blockedStatuses.includes(subsidyRequest.subsidy_status.name)) {
      throw new CustomGraphQLError(
        translate('errors.cannot_delete_approved_or_closed', language, { ns: 'subsidy', status: subsidyRequest.subsidy_status.name.toLowerCase() }),
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
        reason: translate('history.subsidy_deleted', language, { ns: 'subsidy' }),
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

  async approve(id: string, approvedAmount: number, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Get current subsidy
    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Validate Status Transition
    this.validateStatusTransition(current.subsidy_status?.name, 'APPROVED', language);

    // Ensure all documents are approved (not just validated - rejects any with rejected docs)
    await this.ensureAllDocumentsApproved(id, language);

    // Buscar status "APPROVED"
    const approvedStatus = await this.prisma.subsidyStatus.findFirst({
      where: { name: 'APPROVED', is_deleted: false },
    });

    if (!approvedStatus) {
      throw new CustomGraphQLError(
        translate('errors.approved_status_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
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
      reason: translate('history.request_approved', language, { ns: 'subsidy', amount: approvedAmount }),
      changed_by: userId,
    });

    // Budget remains as planned/allocated when approved
    // Expense will only be added to spent when status changes to CLOSED

    return result;
  }

  async reject(id: string, rejectionReason: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Get current subsidy
    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Validate Status Transition
    this.validateStatusTransition(current.subsidy_status?.name, 'REJECTED', language);

    // Ensure all documents are validated
    await this.ensureAllDocumentsValidated(id, language);

    // Buscar status "REJECTED"
    const rejectedStatus = await this.prisma.subsidyStatus.findFirst({
      where: { name: 'REJECTED', is_deleted: false },
    });

    if (!rejectedStatus) {
      throw new CustomGraphQLError(
        translate('errors.rejected_status_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
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
      reason: rejectionReason || translate('history.request_rejected', language, { ns: 'subsidy' }),
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

  /**
   * Recalculates subsidy status based on document validations.
   * NOTE: This method NO LONGER automatically changes status to APPROVED/REJECTED.
   * Status changes to APPROVED/REJECTED/CLOSED must be done manually by the user.
   * This prevents duplicate budget calculations when documents are validated.
   */
  async recalculateStatus(id: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<void> {
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

    // Determine what status WOULD be if auto-updated (for logging only)
    let suggestedStatus = 'PENDING';
    if (approvedDocs === totalDocs) {
      suggestedStatus = 'APPROVED';
    } else if (rejectedDocs === totalDocs) {
      suggestedStatus = 'REJECTED';
    } else if (pendingDocs < totalDocs) {
      suggestedStatus = 'IN_REVIEW';
    }

    console.log(`📊 [recalculateStatus] Subsidy ${id}: ${approvedDocs}/${totalDocs} approved, ${rejectedDocs}/${totalDocs} rejected, ${pendingDocs}/${totalDocs} pending. Suggested status: ${suggestedStatus}`);

    // Only auto-update to IN_REVIEW when documents start being validated
    // APPROVED/REJECTED/CLOSED must be set manually to trigger budget calculations once
    if (suggestedStatus === 'IN_REVIEW') {
      const status = await this.prisma.subsidyStatus.findFirst({
        where: { name: 'IN_REVIEW', is_deleted: false }
      });

      if (status && subsidyRequest.subsidy_statuses_id !== status.id) {
        console.log(`🤖 Auto-updating subsidy ${id} status to IN_REVIEW`);
        const updateData: SubsidyRequestUpdateDto = {
          subsidy_status_id: status.id,
          notes: translate('history.auto_status_in_review', language, { ns: 'subsidy', approved: approvedDocs, rejected: rejectedDocs, pending: pendingDocs })
        };
        await this.update(id, updateData, userId, language);
      }
    }
    // For APPROVED/REJECTED, just log - user must manually approve/reject to trigger budget calculations
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
    const closedRequests = requests.filter(r => r.subsidy_status?.name === 'CLOSED').length;
    
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
      closedRequests,
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
