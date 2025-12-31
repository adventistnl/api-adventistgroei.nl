import { Injectable } from '@nestjs/common';
import { SubsidyReceipt } from 'src/@generated/subsidy-receipt/subsidy-receipt.model';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { PrismaService } from 'src/services';

export interface CreateSubsidyReceiptData {
  subsidy_request_id: string;
  subsidy_request_item_id?: string;
  project_activities_id: string;
  file_url: string;
  drive_file_id: string;
  filename: string;
  type: string;
  amount?: number;
  uploaded_by: string;
  is_validated: boolean;
  validated_at?: Date | null;
}

export interface UpdateSubsidyReceiptData {
  file_url?: string;
  drive_file_id?: string;
  type?: string;
  amount?: number;
  is_validated?: boolean;
  validated_at?: Date | null;
  validated_by?: string | null;
  approved?: boolean;
}

@Injectable()
export class SubsidyReceiptRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Criar novo recibo de subsídio
   */
  async create(data: CreateSubsidyReceiptData, userId: string): Promise<SubsidyReceipt> {
    try {
      const result = await this.prisma.subsidyReceipt.create({
        data: {
          subsidy_request_id: data.subsidy_request_id,
          subsidy_request_item_id: data.subsidy_request_item_id,
          project_activities_id: data.project_activities_id,
          file_url: data.file_url,
          drive_file_id: data.drive_file_id,
          filename: data.filename,
          type: data.type,
          amount: data.amount,
          uploaded_by: data.uploaded_by,
          is_validated: data.is_validated,
          validated_at: data.validated_at,
          created_at: new Date(),
          created_by: userId,
          updated_by: userId,
        },
        include: {
          subsidy_request: true,
          subsidy_request_item: true,
          project_activity: true,
        },
      });

      return result;
    } catch (error) {
      console.error('Erro detalhado ao criar recibo de subsídio:', {
        errorMessage: error.message,
        errorCode: error.code,
        errorMeta: error.meta,
        data: data,
        userId: userId,
      });

      throw new CustomGraphQLError(
        `Erro ao criar recibo de subsídio: ${error.message}`,
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Buscar recibo por ID
   */
  async findById(id: string): Promise<SubsidyReceipt | null> {
    return this.prisma.subsidyReceipt.findFirst({
      where: {
        id,
        is_deleted: false,
      },
      include: {
        subsidy_request: true,
        subsidy_request_item: true,
        project_activity: true,
      },
    });
  }

  /**
   * Buscar recibos de uma solicitação de subsídio
   */
  async findBySubsidyRequestId(subsidyRequestId: string): Promise<SubsidyReceipt[]> {
    return this.prisma.subsidyReceipt.findMany({
      where: {
        subsidy_request_id: subsidyRequestId,
        is_deleted: false,
      },
      include: {
        subsidy_request_item: true,
        project_activity: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  /**
   * Buscar recibos de um item de solicitação de subsídio
   */
  async findBySubsidyRequestItemId(subsidyRequestItemId: string): Promise<SubsidyReceipt[]> {
    return this.prisma.subsidyReceipt.findMany({
      where: {
        subsidy_request_item_id: subsidyRequestItemId,
        is_deleted: false,
      },
      include: {
        subsidy_request: true,
        project_activity: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  /**
   * Buscar recibos de uma atividade
   */
  async findByActivityId(activityId: string): Promise<SubsidyReceipt[]> {
    return this.prisma.subsidyReceipt.findMany({
      where: {
        project_activities_id: activityId,
        is_deleted: false,
      },
      include: {
        subsidy_request: true,
        subsidy_request_item: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  /**
   * Atualizar recibo
   */
  async update(
    id: string,
    data: UpdateSubsidyReceiptData,
    userId: string,
  ): Promise<SubsidyReceipt> {
    try {
      const updateData: any = {
        updated_by: userId,
        updated_at: new Date(),
      };

      if (data.file_url !== undefined) updateData.file_url = data.file_url;
      if (data.drive_file_id !== undefined) updateData.drive_file_id = data.drive_file_id;
      if (data.type !== undefined) updateData.type = data.type;
      if (data.amount !== undefined) updateData.amount = data.amount;
      if (data.is_validated !== undefined) updateData.is_validated = data.is_validated;
      if (data.validated_at !== undefined) updateData.validated_at = data.validated_at;
      if (data.validated_by !== undefined) updateData.validated_by = data.validated_by;
      if (data.approved !== undefined) updateData.approved = data.approved;

      return await this.prisma.subsidyReceipt.update({
        where: { id },
        data: updateData,
        include: {
          subsidy_request: true,
          subsidy_request_item: true,
          project_activity: true,
        },
      });
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao atualizar recibo de subsídio',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Soft delete de recibo
   */
  async softDelete(id: string, userId: string): Promise<SubsidyReceipt> {
    try {
      const deletionDate = new Date();

      return await this.prisma.subsidyReceipt.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: deletionDate,
          deleted_by: userId,
        },
        include: {
          subsidy_request: true,
          subsidy_request_item: true,
          project_activity: true,
        },
      });
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao deletar recibo de subsídio',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Validar recibo (atualizar is_validated para true)
   */
  async validateReceipt(id: string, userId: string): Promise<SubsidyReceipt> {
    try {
      return await this.prisma.subsidyReceipt.update({
        where: { id },
        data: {
          is_validated: true,
          validated_at: new Date(),
          validated_by: userId,
          updated_by: userId,
          updated_at: new Date(),
        },
        include: {
          subsidy_request: true,
          subsidy_request_item: true,
          project_activity: true,
        },
      });
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao validar recibo de subsídio',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Aprovar recibo
   */
  async approveReceipt(id: string, userId: string): Promise<SubsidyReceipt> {
    try {
      return await this.prisma.subsidyReceipt.update({
        where: { id },
        data: {
          approved: true,
          updated_by: userId,
          updated_at: new Date(),
        },
        include: {
          subsidy_request: true,
          subsidy_request_item: true,
          project_activity: true,
        },
      });
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao aprovar recibo de subsídio',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }
}
