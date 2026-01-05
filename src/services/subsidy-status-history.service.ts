import { Injectable } from '@nestjs/common';
import { SubsidyStatusHistory } from 'src/@generated/subsidy-status-history/subsidy-status-history.model';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import {
  CreateSubsidyStatusHistoryData,
  SubsidyStatusHistoryRepository,
} from 'src/repositories/subsidy-status-history.repository';

@Injectable()
export class SubsidyStatusHistoryService {
  constructor(
    private readonly repository: SubsidyStatusHistoryRepository,
  ) {}

  /**
   * Create a new status history record
   */
  async createHistory(
    data: CreateSubsidyStatusHistoryData,
  ): Promise<SubsidyStatusHistory> {
    return this.repository.create(data);
  }

  /**
   * Get all history records for a subsidy request
   */
  async getHistoryBySubsidyRequest(
    subsidyRequestId: string,
  ): Promise<SubsidyStatusHistory[]> {
    if (!subsidyRequestId) {
      throw new CustomGraphQLError(
        'ID da solicitação de subsídio é obrigatório',
        ErrorCode.BAD_REQUEST,
        400,
      );
    }

    return this.repository.findBySubsidyRequestId(subsidyRequestId);
  }

  /**
   * Get a specific history record by ID
   */
  async getHistoryById(id: string): Promise<SubsidyStatusHistory> {
    const history = await this.repository.findById(id);

    if (!history) {
      throw new CustomGraphQLError(
        'Registro de histórico não encontrado',
        ErrorCode.NOT_FOUND,
        404,
      );
    }

    return history;
  }

  /**
   * Update a history message
   */
  async updateMessage(id: string, message: string, userId: string): Promise<SubsidyStatusHistory> {
    const history = await this.getHistoryById(id);
    
    // Validate if user is owner
    if (history.changed_by !== userId) {
      throw new CustomGraphQLError('Você só pode editar suas próprias mensagens', ErrorCode.FORBIDDEN, 403);
    }

    return this.repository.update(id, message);
  }

  /**
   * Delete a history message (soft delete)
   */
  async deleteMessage(id: string, userId: string): Promise<SubsidyStatusHistory> {
    const history = await this.getHistoryById(id);
    
    // Validate if user is owner
    if (history.changed_by !== userId) {
      throw new CustomGraphQLError('Você só pode deletar suas próprias mensagens', ErrorCode.FORBIDDEN, 403);
    }

    return this.repository.softDelete(id, userId);
  }
}
