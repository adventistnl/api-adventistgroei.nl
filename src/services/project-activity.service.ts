import { Injectable } from '@nestjs/common';
import { ProjectActivityRepository } from '../repositories/project-activity.repository';
import { ProjectRepository } from '../repositories/project.repository';
import { DecimalHelper } from '../common/helpers/decimal.helper';
import { ProjectActivity } from 'src/@generated/project-activity/project-activity.model';
import { ProjectActivityBatchUpdateDto, ProjectActivityCreateDto, ProjectActivityUpdateDto } from '../dto/project-activity.dto';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { ProjectActivityLogService } from './project-activity-log.service';
import { SubsidyRequestItemRepository } from '../repositories/subsidy-request-item.repository';
import { SubsidyRequestService } from './subsidy-request.service';
import { ActivityDocumentsRepository } from '../repositories/activity-documents.repository';
import { GoogleDriveService } from './google-drive.service';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProjectActivityService {
  constructor(
    private readonly repository: ProjectActivityRepository,
    private readonly projectRepository: ProjectRepository,
    private readonly logService: ProjectActivityLogService,
    private readonly subsidyRequestItemRepository: SubsidyRequestItemRepository,
    private readonly subsidyRequestService: SubsidyRequestService,
    private readonly activityDocumentsRepository: ActivityDocumentsRepository,
    private readonly driveService: GoogleDriveService,
    private readonly prisma: PrismaService,
  ) {}

  private async recalculateProjectBudget(projectId: string, userId: string): Promise<void> {
    try {
      console.log(`💰 Recalculating budget for project ${projectId}...`);
      
      const activities = await this.repository.findManyByFilters({ project_id: projectId });
      const totalBudget = DecimalHelper.sum(activities.map(a => a.budget_amount));

      await this.projectRepository.update(projectId, { budget: totalBudget.toNumber() }, userId);
      
      console.log(`✅ Project ${projectId} budget updated to ${totalBudget.toNumber()}`);
    } catch (error) {
      console.error(`❌ Error recalculating project budget:`, error);
      // We don't throw here to avoid blocking the main operation if budget update fails
    }
  }

  async create(input: ProjectActivityCreateDto, userId: string): Promise<ProjectActivity> {
    try {
      const activity = await this.repository.create(input, userId);

      // Log creation
      await this.logService.logCreation(activity.id, userId);

      // Recalculate project budget
      await this.recalculateProjectBudget(activity.project_id, userId);

      return activity;
    } catch (error) {
      throw new CustomGraphQLError('Erro ao criar atividade do projeto', ErrorCode.INTERNAL_SERVER_ERROR, error);
    }
  }

  async update(input: ProjectActivityUpdateDto, userId: string): Promise<ProjectActivity> {
    try {
      // Debug log
      console.log('📝 ProjectActivityService.update - Input received:', JSON.stringify(input, null, 2));
      console.log('👥 assignee_ids received:', input.assignee_ids);

      // Get old data before update
      const oldActivity = await this.repository.findById(input.id);
      if (!oldActivity) {
        throw new CustomGraphQLError('Atividade não encontrada', ErrorCode.NOT_FOUND, 404);
      }

      // Perform update
      const updatedActivity = await this.repository.update(input, userId);

      // Log changes
      await this.logService.logChanges(input.id, userId, oldActivity, input);

      // Recalculate project budget if cost changed
      if (oldActivity.budget_amount.toNumber() !== updatedActivity.budget_amount.toNumber()) {
        await this.recalculateProjectBudget(updatedActivity.project_id, userId);
      }

      return updatedActivity;
    } catch (error) {
      throw new CustomGraphQLError('Erro ao atualizar atividade do projeto', ErrorCode.INTERNAL_SERVER_ERROR, error);
    }
  }

  async findById(id: string): Promise<ProjectActivity | null> {
    return this.repository.findById(id);
  }

  async findManyByFilters(filters: Partial<Record<string, any>>): Promise<ProjectActivity[]> {
    return this.repository.findManyByFilters(filters);
  }

  async softDelete(id: string, userId: string): Promise<ProjectActivity> {
    console.log(`🗑️  Starting soft delete for activity ${id}`);

    // Get activity first to know projectId
    const activity = await this.repository.findById(id);
    if (!activity) {
      throw new CustomGraphQLError('Activity not found', ErrorCode.NOT_FOUND, 404);
    }

    // 1. Find all subsidy requests linked to this activity
    const subsidyRequestIds = await this.subsidyRequestItemRepository.findSubsidyRequestsByActivityId(id);
    
    console.log(`📋 Found ${subsidyRequestIds.length} subsidy requests linked to activity`);

    // 2. Validate: Check if any subsidy has APPROVED or CLOSED status
    if (subsidyRequestIds.length > 0) {
      const subsidyRequests = await this.prisma.subsidyRequest.findMany({
        where: {
          id: { in: subsidyRequestIds },
          is_deleted: false,
        },
        include: {
          subsidy_status: true,
        },
      });

      const blockedStatuses = ['APPROVED', 'CLOSED'];
      const blockedSubsidies = subsidyRequests.filter(
        (sr) => sr.subsidy_status?.name && blockedStatuses.includes(sr.subsidy_status.name)
      );

      if (blockedSubsidies.length > 0) {
        const statusNames = blockedSubsidies.map((sr) => sr.subsidy_status?.name).join(', ');
        throw new CustomGraphQLError(
          `Cannot delete activity with ${statusNames.toLowerCase()} subsidy requests. Please remove or change the status of associated subsidies first.`,
          ErrorCode.BAD_REQUEST,
          400,
          { additional: { errorCode: 'ACTIVITY_HAS_APPROVED_SUBSIDIES' } }
        );
      }
    }

    // 3. Delete all subsidy requests (uses existing service with validation)
    console.log(`🔄 Deleting ${subsidyRequestIds.length} subsidy requests...`);
    for (const subsidyRequestId of subsidyRequestIds) {
      await this.subsidyRequestService.delete(subsidyRequestId, userId);
    }

    // 4. Soft delete activity documents
    console.log(`📄 Soft deleting activity documents...`);
    await this.activityDocumentsRepository.softDeleteByActivityId(id, userId);

    // 5. Soft delete the activity (repository handles funding, logs, assignees)
    console.log(`🎯 Soft deleting activity...`);
    const deletedActivity = await this.repository.softDelete(id, userId);

    // 6. Rename Google Drive folder (outside critical path)
    try {
      console.log(`📁 Attempting to rename Google Drive folder...`);
      
      const document = await this.prisma.activityDocuments.findFirst({
        where: {
          project_activity_id: id,
          drive_file_id: { not: null },
        },
      });

      if (document?.drive_file_id) {
        const fileMetadata = await this.driveService.getFileMetadata(document.drive_file_id);
        
        if (fileMetadata.parents && fileMetadata.parents.length > 0) {
          const folderId = fileMetadata.parents[0];
          await this.driveService.renameFolderWithPrefix(folderId, '[DELETED] ');
          console.log(`✅ Renamed Google Drive folder for activity ${id}`);
        } else {
          console.log(`⚠️  No parent folder found for activity ${id}`);
        }
      } else {
        console.log(`⚠️  No documents with drive_file_id found for activity ${id}`);
      }
    } catch (error) {
      console.error(`❌ Error renaming Google Drive folder for activity ${id}:`, error);
    }

    // Log deletion
    await this.logService.logDeletion(id, userId);

    // Recalculate project budget
    await this.recalculateProjectBudget(activity.project_id, userId);

    console.log(`✅ Activity ${id} soft deleted successfully`);
    return deletedActivity;
  }

  async batchUpdate(data: ProjectActivityBatchUpdateDto, userId: string): Promise<ProjectActivity[]> {
    // Get old data for all activities before update
    const oldActivitiesMap = new Map<string, ProjectActivity>();
    const projectIdsToUpdate = new Set<string>();

    for (const activityId of data.ids) {
      const oldActivity = await this.repository.findById(activityId);
      if (oldActivity) {
        oldActivitiesMap.set(activityId, oldActivity);
        projectIdsToUpdate.add(oldActivity.project_id);
      }
    }

    // Perform batch update
    const updatedActivities = await this.repository.batchUpdate(data, userId);

    // Log changes for each activity
    for (const activityId of data.ids) {
      const oldActivity = oldActivitiesMap.get(activityId);
      if (oldActivity) {
        await this.logService.logChanges(activityId, userId, oldActivity, data);
      }
    }

    // Recalculate budget for all affected projects
    for (const projectId of projectIdsToUpdate) {
      await this.recalculateProjectBudget(projectId, userId);
    }

    return updatedActivities;
  }
}
