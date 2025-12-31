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
}
