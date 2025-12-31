import { Injectable } from '@nestjs/common';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';
import { SubsidyRequestItemRepository } from '../repositories/subsidy-request-item.repository';
import { SubsidyStatusHistoryRepository } from '../repositories/subsidy-status-history.repository';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto } from '../dto/subsidy-request.dto';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { PrismaService } from './prisma.service';

@Injectable()
export class SubsidyRequestService {
  constructor(
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
    private readonly subsidyRequestItemRepository: SubsidyRequestItemRepository,
    private readonly historyRepository: SubsidyStatusHistoryRepository,
    private readonly prisma: PrismaService,
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
        reason: data.notes || 'Status alterado',
        changed_by: userId,
      });
    }

    return result;
  }

  async delete(id: string, userId: string): Promise<SubsidyRequest> {
    // SOFT DELETE em cascata: SubsidyRequest E SubsidyRequestItems
    const subsidyRequest = await this.subsidyRequestRepository.findById(id);

    if (!subsidyRequest) {
      throw new CustomGraphQLError('SubsidyRequest not found', ErrorCode.NOT_FOUND, 404);
    }

    // 1. Soft delete todos os items primeiro
    await this.subsidyRequestItemRepository.softDeleteBySubsidyRequestId(id, userId);

    // 2. Soft delete o SubsidyRequest
    return this.subsidyRequestRepository.softDelete(id, userId);

    // NOTA: Arquivos do Google Drive NÃO são deletados (ActivityDocuments permanecem)
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

    return result;
  }
}
