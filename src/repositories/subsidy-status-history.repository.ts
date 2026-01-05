import { Injectable } from '@nestjs/common';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { PrismaService } from 'src/services';
import { SubsidyHistoryType } from 'src/@generated/prisma/subsidy-history-type.enum';

export interface CreateSubsidyStatusHistoryData {
  subsidy_request_id: string;
  status_id: string;
  previous_status_id?: string;
  type?: SubsidyHistoryType;
  reason?: string;
  changed_by: string;
}

@Injectable()
export class SubsidyStatusHistoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new status history record
   */
  async create(data: CreateSubsidyStatusHistoryData): Promise<any> {
    try {
      return await this.prisma.subsidyStatusHistory.create({
        data: {
          subsidy_request_id: data.subsidy_request_id,
          status_id: data.status_id,
          previous_status_id: data.previous_status_id,
          type: data.type || SubsidyHistoryType.STATUS_CHANGE,
          reason: data.reason,
          changed_by: data.changed_by,
          changed_at: new Date(),
        },
        include: {
          status: true,
          previous_status: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }) as any;
    } catch (error) {
      console.error('Error creating subsidy status history:', error);
      throw new CustomGraphQLError(
        'Erro ao criar histórico de status',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Find all history records for a subsidy request
   */
  async findBySubsidyRequestId(subsidyRequestId: string): Promise<any[]> {
    try {
      return await this.prisma.subsidyStatusHistory.findMany({
        where: {
          subsidy_request_id: subsidyRequestId,
          is_deleted: false,
        },
        include: {
          status: true,
          previous_status: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          changed_at: 'asc',
        },
      }) as any[];
    } catch (error) {
      console.error('Error finding subsidy status history:', error);
      throw new CustomGraphQLError(
        'Erro ao buscar histórico de status',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Find a specific history record by ID
   */
  async findById(id: string): Promise<any | null> {
    try {
      return await this.prisma.subsidyStatusHistory.findFirst({
        where: {
          id,
          is_deleted: false,
        },
        include: {
          status: true,
          previous_status: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }) as any;
    } catch (error) {
      console.error('Error finding subsidy status history by ID:', error);
      throw new CustomGraphQLError(
        'Erro ao buscar registro de histórico',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Soft delete de todos os registros de histórico de uma solicitação de subsídio
   * Usado para cascata quando deletar o subsidy request
   */
  async softDeleteBySubsidyRequestId(subsidyRequestId: string, userId: string): Promise<number> {
    const result = await this.prisma.subsidyStatusHistory.updateMany({
      where: {
        subsidy_request_id: subsidyRequestId,
        is_deleted: false,
      },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
      },
    });

    return result.count;
  }

  /**
   * Update a history record (specifically reason)
   */
  async update(id: string, reason: string): Promise<any> {
    try {
      return await this.prisma.subsidyStatusHistory.update({
        where: { id },
        data: {
          reason,
        },
        include: {
          status: true,
          previous_status: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Error updating subsidy status history:', error);
      throw new CustomGraphQLError(
        'Erro ao atualizar histórico',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Soft delete a single history record
   */
  async softDelete(id: string, userId: string): Promise<any> {
    try {
      return await this.prisma.subsidyStatusHistory.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
        },
        include: {
          status: true,
          previous_status: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Error deleting subsidy status history:', error);
      throw new CustomGraphQLError(
        'Erro ao excluir histórico',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }
}
