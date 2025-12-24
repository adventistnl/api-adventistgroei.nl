import { Injectable } from '@nestjs/common';
import { ProjectActivityRepository } from '../repositories/project-activity.repository';
import { ProjectActivity } from 'src/@generated/project-activity/project-activity.model';
import { ProjectActivityBatchUpdateDto, ProjectActivityCreateDto, ProjectActivityUpdateDto } from '../dto/project-activity.dto';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { ProjectActivityLogService } from './project-activity-log.service';

@Injectable()
export class ProjectActivityService {
  constructor(
    private readonly repository: ProjectActivityRepository,
    private readonly logService: ProjectActivityLogService,
  ) {}

  async create(input: ProjectActivityCreateDto, userId: string): Promise<ProjectActivity> {
    try {
      const activity = await this.repository.create(input, userId);

      // Log creation
      await this.logService.logCreation(activity.id, userId);

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
    const activity = await this.repository.softDelete(id, userId);

    // Log deletion
    await this.logService.logDeletion(id, userId);

    return activity;
  }

  async batchUpdate(data: ProjectActivityBatchUpdateDto, userId: string): Promise<ProjectActivity[]> {
    // Get old data for all activities before update
    const oldActivitiesMap = new Map<string, ProjectActivity>();
    for (const activityId of data.ids) {
      const oldActivity = await this.repository.findById(activityId);
      if (oldActivity) {
        oldActivitiesMap.set(activityId, oldActivity);
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

    return updatedActivities;
  }
}
