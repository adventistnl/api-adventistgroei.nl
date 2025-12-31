import { Injectable } from '@nestjs/common';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { PrismaService } from 'src/services';

export interface CreateSubsidyStatusHistoryData {
  subsidy_request_id: string;
  status_id: string;
  previous_status_id?: string;
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
}
