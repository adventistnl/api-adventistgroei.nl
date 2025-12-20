import { Injectable } from '@nestjs/common';
import { ProjectActivityLog } from 'src/@generated/project-activity-log/project-activity-log.model';
import { ProjectActivityLogCreateDto } from 'src/dto/project-activity-log.dto';
import { ProjectActivityLogRepository } from 'src/repositories/project-activity-log.repository';
import { ProjectActivityLogAction } from 'src/@generated/prisma/project-activity-log-action.enum';

@Injectable()
export class ProjectActivityLogService {
  constructor(
    private readonly logRepository: ProjectActivityLogRepository,
  ) {}

  /**
   * Criar um log de atividade
   */
  async createLog(data: ProjectActivityLogCreateDto): Promise<ProjectActivityLog> {
    return this.logRepository.create(data);
  }

  /**
   * Buscar logs de uma atividade
   */
  async getActivityLogs(activityId: string): Promise<ProjectActivityLog[]> {
    return this.logRepository.findByActivityId(activityId);
  }

  /**
   * Helper para criar log de mudança de campo
   */
  async logFieldChange(
    activityId: string,
    userId: string,
    fieldName: string,
    oldValue: any,
    newValue: any,
    action: ProjectActivityLogAction = ProjectActivityLogAction.UPDATED,
  ): Promise<ProjectActivityLog> {
    return this.createLog({
      activity_id: activityId,
      user_id: userId,
      action,
      field_name: fieldName,
      old_value: oldValue ? JSON.stringify(oldValue) : null,
      new_value: newValue ? JSON.stringify(newValue) : null,
    });
  }

  /**
   * Helper para criar log de criação
   */
  async logCreation(activityId: string, userId: string, metadata?: any): Promise<ProjectActivityLog> {
    return this.createLog({
      activity_id: activityId,
      user_id: userId,
      action: ProjectActivityLogAction.CREATED,
      metadata,
    });
  }

  /**
   * Helper para criar log de deleção
   */
  async logDeletion(activityId: string, userId: string): Promise<ProjectActivityLog> {
    return this.createLog({
      activity_id: activityId,
      user_id: userId,
      action: ProjectActivityLogAction.DELETED,
    });
  }

  /**
   * Helper para criar múltiplos logs (batch updates)
   */
  async createManyLogs(logs: ProjectActivityLogCreateDto[]): Promise<number> {
    return this.logRepository.createMany(logs);
  }

  /**
   * Detectar mudanças entre objetos e criar logs apropriados
   */
  async logChanges(
    activityId: string,
    userId: string,
    oldData: any,
    newData: any,
  ): Promise<ProjectActivityLog[]> {
    const logs: ProjectActivityLog[] = [];
    const fieldsToTrack = [
      'status',
      'priority',
      'name',
      'description',
      'budget_amount',
      'deadline',
      'owner_id',
      'is_subsidized',
      'activity_tag',
    ];

    for (const field of fieldsToTrack) {
      if (oldData[field] !== newData[field] && newData[field] !== undefined) {
        let action = ProjectActivityLogAction.UPDATED;

        // Determinar ação específica baseada no campo
        if (field === 'status') {
          action = ProjectActivityLogAction.STATUS_CHANGED;
        } else if (field === 'priority') {
          action = ProjectActivityLogAction.PRIORITY_CHANGED;
        } else if (field === 'budget_amount') {
          action = ProjectActivityLogAction.BUDGET_UPDATED;
        } else if (field === 'deadline') {
          action = ProjectActivityLogAction.DEADLINE_UPDATED;
        } else if (field === 'is_subsidized') {
          action = ProjectActivityLogAction.SUBSIDIZED_CHANGED;
        }

        const log = await this.logFieldChange(
          activityId,
          userId,
          field,
          oldData[field],
          newData[field],
          action,
        );
        logs.push(log);
      }
    }

    return logs;
  }
}
