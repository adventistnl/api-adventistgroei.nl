import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ProjectHistory } from 'src/@generated/project-history/project-history.model';
import { ProjectHistoryCreateDto } from 'src/dto/project-history.dto';
import { ProjectHistoryType } from 'src/@generated/prisma/project-history-type.enum';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';

@Injectable()
export class ProjectHistoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ProjectHistoryCreateDto, userId: string): Promise<ProjectHistory> {
    return await this.prisma.projectHistory.create({
      data: {
        project_id: data.project_id,
        user_id: userId,
        type: data.type,
        comment: data.comment,
        field_name: data.field_name,
        old_value: data.old_value,
        new_value: data.new_value,
        metadata: data.metadata,
      },
      include: {
        user: true,
      },
    });
  }

  async findByProjectId(projectId: string): Promise<ProjectHistory[]> {
    return await this.prisma.projectHistory.findMany({
      where: { project_id: projectId },
      include: { user: true },
      orderBy: { created_at: 'desc' },
    });
  }

  async findById(historyId: string): Promise<ProjectHistory> {
    const record = await this.prisma.projectHistory.findUnique({
      where: { id: historyId },
      include: { user: true },
    });

    if (!record) {
      throw new CustomGraphQLError('Registro de histórico não encontrado.', ErrorCode.NOT_FOUND, 404);
    }

    return record;
  }

  async delete(historyId: string): Promise<ProjectHistory> {
    await this.findById(historyId);

    return await this.prisma.projectHistory.delete({
      where: { id: historyId },
      include: { user: true },
    });
  }

  /**
   * Registra automaticamente um evento de histórico, sem necessidade de passar project_id via DTO.
   */
  async logEvent(
    projectId: string,
    userId: string,
    type: ProjectHistoryType,
    options?: {
      comment?: string;
      field_name?: string;
      old_value?: string;
      new_value?: string;
      metadata?: any;
    },
  ): Promise<ProjectHistory> {
    return await this.prisma.projectHistory.create({
      data: {
        project_id: projectId,
        user_id: userId,
        type,
        comment: options?.comment,
        field_name: options?.field_name,
        old_value: options?.old_value,
        new_value: options?.new_value,
        metadata: options?.metadata,
      },
      include: { user: true },
    });
  }
}
