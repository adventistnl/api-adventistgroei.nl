import { Injectable } from '@nestjs/common';
import { ProjectActivity } from 'src/@generated/project-activity/project-activity.model';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { ProjectActivityBatchUpdateDto, ProjectActivityCreateDto, ProjectActivityUpdateDto } from 'src/dto/project-activity.dto';
import { PrismaService } from 'src/services';

@Injectable()
export class ProjectActivityRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ProjectActivityCreateDto, userId: string): Promise<ProjectActivity> {
    try {
      return await this.prisma.projectActivity.create({
        data: {
          name: data.name,
          description: data.description,
          budget_amount: data.budget_amount,
          deadline: data.deadline,
          owner_id: data.owner_id,
          tags: data.tags,
          project_id: data.project_id,
          is_subsidized: data.is_subsidized ?? false,
          created_by: userId,
          updated_by: userId,
          activity_funding: {
            create: {
              entity_contribution_amount: data.activity_funding.entity_contribution_amount,
              entity_contribution_percent: data.activity_funding.entity_contribution_percent,
              entity_type: data.activity_funding.entity_type,
              entity_id: data.activity_funding.entity_id,
            },
          },
        },
        include: {
          owner: true,
          activity_funding: true,
        },
      });
    } catch (error) {
      throw new CustomGraphQLError('Erro ao criar ProjectActivity', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
  }

  async update(data: ProjectActivityUpdateDto, userId: string): Promise<ProjectActivity> {
    try {
      const updateData: any = {
        updated_by: userId,
      };

      if (data.name !== undefined) updateData.name = data.name;
      if (data.description !== undefined) updateData.description = data.description;
      if (data.budget_amount !== undefined) updateData.budget_amount = data.budget_amount;
      if (data.deadline !== undefined) updateData.deadline = data.deadline;
      if (data.owner_id !== undefined) updateData.owner_id = data.owner_id;
      if (data.tags !== undefined) updateData.tags = data.tags;

      return await this.prisma.projectActivity.update({
        where: { id: data.id },
        data: updateData,
        include: {
          owner: true,
          activity_funding: true,
        },
      });
    } catch (error) {
      throw new CustomGraphQLError('Erro ao atualizar ProjectActivity', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
  }

  async findById(id: string): Promise<ProjectActivity | null> {
    return this.prisma.projectActivity.findUnique({ where: { id, is_deleted: false } });
  }

  async findManyByFilters(filters: Partial<Record<keyof ProjectActivity, any>>): Promise<ProjectActivity[]> {
    const allowedKeys: (keyof ProjectActivity)[] = ['id', 'name', 'project_id', 'is_deleted'];
    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof ProjectActivity)) {
        throw new CustomGraphQLError(`Invalid filter key: ${key}`, ErrorCode.BAD_REQUEST, 400);
      }
    }
    return this.prisma.projectActivity.findMany({ where: { ...filters, is_deleted: false } });
  }

  async softDelete(id: string, userId: string): Promise<ProjectActivity> {
    try {
      return await this.prisma.projectActivity.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
        },
      });
    } catch {
      throw new CustomGraphQLError('Erro ao deletar ProjectActivity', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
  }

  async batchUpdate(data: ProjectActivityBatchUpdateDto, userId: string): Promise<ProjectActivity[]> {
    try {
      const updateData: any = {
        updated_by: userId,
        updated_at: new Date(),
      };

      // Only add fields that were provided
      if (data.status !== undefined) {
        updateData.status = data.status;
      }
      if (data.priority !== undefined) {
        updateData.priority = data.priority;
      }
      if (data.is_subsidized !== undefined) {
        updateData.is_subsidized = data.is_subsidized;
      }
      if (data.activity_tag !== undefined) {
        // For tags, we need to update the array
        // Since it's an array field, we'll handle it differently
        updateData.tags = { set: [data.activity_tag] };
      }

      // Use updateMany to update all activities with the given IDs
      await this.prisma.projectActivity.updateMany({
        where: {
          id: { in: data.ids },
          is_deleted: false,
        },
        data: updateData,
      });

      // Return the updated activities
      return this.prisma.projectActivity.findMany({
        where: {
          id: { in: data.ids },
          is_deleted: false,
        },
        include: {
          owner: true,
        },
      });
    } catch (error) {
      throw new CustomGraphQLError(
        'Erro ao atualizar atividades em lote',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }
}
