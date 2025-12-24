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
      const activity = await this.prisma.projectActivity.create({
        data: {
          name: data.name,
          description: data.description,
          budget_amount: data.budget_amount,
          deadline: data.deadline,
          tags: data.tags,
          custom_tags: data.custom_tags || [],
          project_id: data.project_id,
          status: data.status,
          priority: data.priority,
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
          // Create assignees (required - at least one)
          assignees: {
            create: data.assignee_ids.map(assigneeId => ({
              user_id: assigneeId,
              created_by: userId,
            })),
          },
        },
        include: {
          activity_funding: true,
          assignees: {
            include: {
              user: true,
            },
          },
        },
      });
      return activity;
    } catch (error) {
      throw new CustomGraphQLError('Erro ao criar ProjectActivity', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
  }

  async update(data: ProjectActivityUpdateDto, userId: string): Promise<ProjectActivity> {
    try {
      console.log('📦 Repository.update - Data received:', JSON.stringify(data, null, 2));
      console.log('👥 Repository.update - assignee_ids:', data.assignee_ids);

      const updateData: any = {
        updated_by: userId,
      };

      if (data.name !== undefined) updateData.name = data.name;
      if (data.description !== undefined) updateData.description = data.description;
      if (data.budget_amount !== undefined) updateData.budget_amount = data.budget_amount;
      if (data.deadline !== undefined) updateData.deadline = data.deadline;
      if (data.tags !== undefined) updateData.tags = data.tags;
      if (data.custom_tags !== undefined) updateData.custom_tags = data.custom_tags;
      if (data.status !== undefined) updateData.status = data.status;
      if (data.priority !== undefined) updateData.priority = data.priority;
      if (data.is_subsidized !== undefined) updateData.is_subsidized = data.is_subsidized;
      if (data.activity_tag !== undefined) updateData.activity_tag = data.activity_tag;

      // Handle assignees update if provided
      if (data.assignee_ids !== undefined) {
        console.log('🔄 Updating assignees for activity:', data.id);
        console.log('🗑️ Deleting existing assignees...');
        
        // Delete existing assignees and create new ones
        const deleteResult = await this.prisma.projectActivityAssignee.deleteMany({
          where: { activity_id: data.id },
        });
        console.log('🗑️ Deleted assignees count:', deleteResult.count);

        if (data.assignee_ids.length > 0) {
          console.log('✨ Creating new assignees:', data.assignee_ids);
          await this.prisma.projectActivityAssignee.createMany({
            data: data.assignee_ids.map(assigneeId => ({
              activity_id: data.id,
              user_id: assigneeId,
              created_by: userId,
            })),
          });
          console.log('✅ New assignees created successfully');
        } else {
          console.log('ℹ️ No assignees to create (empty array)');
        }
      } else {
        console.log('⏭️ assignee_ids not provided, skipping assignee update');
      }

      return await this.prisma.projectActivity.update({
        where: { id: data.id },
        data: updateData,
        include: {
          activity_funding: true,
          assignees: {
            include: {
              user: true,
            },
          },
        },
      });
    } catch (error) {
      throw new CustomGraphQLError('Erro ao atualizar ProjectActivity', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
  }

  async findById(id: string): Promise<ProjectActivity | null> {
    return this.prisma.projectActivity.findUnique({ 
      where: { id, is_deleted: false },
      include: {
        activity_funding: true,
        assignees: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof ProjectActivity, any>>): Promise<ProjectActivity[]> {
    const allowedKeys: (keyof ProjectActivity)[] = ['id', 'name', 'project_id', 'is_deleted'];
    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof ProjectActivity)) {
        throw new CustomGraphQLError(`Invalid filter key: ${key}`, ErrorCode.BAD_REQUEST, 400);
      }
    }
    return this.prisma.projectActivity.findMany({ 
      where: { ...filters, is_deleted: false },
      include: {
        activity_funding: true,
        assignees: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<ProjectActivity> {
    try {
      const deletionDate = new Date();

      // Soft delete all related records in a transaction
      return await this.prisma.$transaction(async (tx) => {
        // 1. Soft delete activity funding
        await tx.activityFunding.updateMany({
          where: { activity_id: id, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: deletionDate,
            deleted_by: userId,
          },
        });

        // 2. Soft delete activity documents
        await tx.activityDocuments.updateMany({
          where: { project_activity_id: id, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: deletionDate,
            deleted_by: userId,
          },
        });

        // 3. Soft delete subsidy receipts
        await tx.subsidyReceipt.updateMany({
          where: { project_activities_id: id, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: deletionDate,
            deleted_by: userId,
          },
        });

        // 4. Finally, soft delete the activity itself
        return await tx.projectActivity.update({
          where: { id },
          data: {
            is_deleted: true,
            deleted_at: deletionDate,
            deleted_by: userId,
          },
        });
      });
    } catch (error) {
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
        updateData.activity_tag = data.activity_tag;
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
          assignees: {
            include: {
              user: true,
            },
          },
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
