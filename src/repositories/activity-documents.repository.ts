import { Injectable } from '@nestjs/common';
import { ActivityDocuments } from 'src/@generated/activity-documents/activity-documents.model';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { PrismaService } from 'src/services';
import { ProjectActivityLogRepository } from './project-activity-log.repository';
import { ProjectActivityLogAction } from '../@generated/prisma/project-activity-log-action.enum';

export interface CreateActivityDocumentData {
  activity_id: string;
  project_activity_id: string;
  file_url: string;
  drive_file_id: string;
  filename: string;
  type: string;
  uploaded_by: string;
  is_validated: boolean;
  validated_at?: Date | null;
}

export interface UpdateActivityDocumentData {
  file_url?: string;
  drive_file_id?: string;
  type?: string;
  is_validated?: boolean;
  validated_at?: Date | null;
}

@Injectable()
export class ActivityDocumentsRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly activityLogRepository: ProjectActivityLogRepository
  ) {}

  /**
   * Criar novo documento de atividade
   */
  async create(data: CreateActivityDocumentData, userId: string): Promise<ActivityDocuments> {
    try {
      const result = await this.prisma.activityDocuments.create({
        data: {
          activity_id: data.activity_id,
          project_activity_id: data.project_activity_id,
          file_url: data.file_url,
          drive_file_id: data.drive_file_id,
          filename: data.filename,
          type: data.type,
          uploaded_by: data.uploaded_by,
          is_validated: data.is_validated,
          validated_at: data.validated_at,
          created_at: new Date(),
          updated_by: userId,
        },
      });

      // Log upload
      if (data.project_activity_id) {
        await this.activityLogRepository.create({
          activity_id: data.project_activity_id,
          user_id: userId,
          action: ProjectActivityLogAction.UPDATED,
          metadata: { file_uploaded: data.filename, file_url: data.file_url }
        });
      }

      return result;
    } catch (error) {
      // Log detalhado do erro original para debugging
      console.error('Erro detalhado ao criar documento de atividade:', {
        errorMessage: error.message,
        errorCode: error.code,
        errorMeta: error.meta,
        data: data,
        userId: userId,
      });

      throw new CustomGraphQLError(
        `Erro ao criar documento de atividade: ${error.message}`,
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Buscar documento por ID
   */
  async findById(id: string): Promise<ActivityDocuments | null> {
    return this.prisma.activityDocuments.findFirst({
      where: {
        id,
        is_deleted: false,
      },
    });
  }

  /**
   * Buscar documentos de uma atividade
   */
  async findByActivityId(activityId: string): Promise<ActivityDocuments[]> {
    return this.prisma.activityDocuments.findMany({
      where: {
        project_activity_id: activityId,
        is_deleted: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  /**
   * Atualizar documento
   */
  async update(
    id: string,
    data: UpdateActivityDocumentData,
    userId: string,
  ): Promise<ActivityDocuments> {
    try {
      const updateData: any = {
        updated_by: userId,
        updated_at: new Date(),
      };

      if (data.file_url !== undefined) updateData.file_url = data.file_url;
      if (data.drive_file_id !== undefined) updateData.drive_file_id = data.drive_file_id;
      if (data.type !== undefined) updateData.type = data.type;
      if (data.is_validated !== undefined) updateData.is_validated = data.is_validated;
      if (data.validated_at !== undefined) updateData.validated_at = data.validated_at;

      return await this.prisma.activityDocuments.update({
        where: { id },
        data: updateData,
      });
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao atualizar documento de atividade',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Soft delete de documento
   */
  async softDelete(id: string, userId: string): Promise<ActivityDocuments> {
    try {
      const deletionDate = new Date();

      const result = await this.prisma.activityDocuments.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: deletionDate,
          deleted_by: userId,
        },
      });

      // Log deletion
      const doc = await this.findById(id);
      if (doc && doc.project_activity_id) {
        await this.activityLogRepository.create({
          activity_id: doc.project_activity_id,
          user_id: userId,
          action: ProjectActivityLogAction.UPDATED,
          metadata: { file_deleted: doc.filename }
        });
      }

      return result;
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao deletar documento de atividade',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Validar documento (atualizar is_validated para true)
   */
  async validateDocument(id: string, userId: string): Promise<ActivityDocuments> {
    try {
      const result = await this.prisma.activityDocuments.update({
        where: { id },
        data: {
          is_validated: true,
          validated_at: new Date(),
          updated_by: userId,
          updated_at: new Date(),
        },
      });

      // Log validation
      if (result.project_activity_id) {
        await this.activityLogRepository.create({
          activity_id: result.project_activity_id,
          user_id: userId,
          action: ProjectActivityLogAction.UPDATED,
          metadata: { file_validated: result.filename }
        });
      }

      return result;
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao validar documento de atividade',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Soft delete all documents of an activity
   */
  async softDeleteByActivityId(activityId: string, userId: string): Promise<number> {
    try {
      const deletionDate = new Date();

      const result = await this.prisma.activityDocuments.updateMany({
        where: {
          project_activity_id: activityId,
          is_deleted: false,
        },
        data: {
          is_deleted: true,
          deleted_at: deletionDate,
          deleted_by: userId,
        },
      });

      return result.count;
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao deletar documentos da atividade',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }
}
