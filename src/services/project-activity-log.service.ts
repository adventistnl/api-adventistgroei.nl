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
      old_value: this.valueToString(oldValue),
      new_value: this.valueToString(newValue),
    });
  }

  /**
   * Converte valor para string para salvar no banco
   */
  private valueToString(value: any): string | undefined {
    if (value === null || value === undefined) {
      return undefined;
    }

    // Handle Prisma Decimal type
    if (value && typeof value === 'object' && typeof value.toString === 'function' && 'toFixed' in value) {
      return value.toString();
    }

    // Handle Date objects
    if (value instanceof Date) {
      return value.toISOString();
    }

    // Handle objects/arrays
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }

    // Handle primitives
    return String(value);
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
      // Skip if field is not present in newData
      if (newData[field] === undefined) {
        continue;
      }

      // Normalize values for comparison
      const oldValue = this.normalizeValue(oldData[field]);
      const newValue = this.normalizeValue(newData[field]);

      // Only log if value actually changed
      if (oldValue !== newValue) {
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

  /**
   * Normaliza valores para comparação (converte Decimal para string, Date para ISO, etc.)
   */
  private normalizeValue(value: any): any {
    if (value === null || value === undefined) {
      return null;
    }

    // Handle Prisma Decimal type (has toString and toFixed methods)
    if (value && typeof value === 'object' && typeof value.toString === 'function' && 'toFixed' in value) {
      return value.toString();
    }

    // Handle Date objects
    if (value instanceof Date) {
      return value.toISOString();
    }

    // Handle strings that look like ISO dates - normalize to ISO format
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
      try {
        return new Date(value).toISOString();
      } catch {
        return value;
      }
    }

    // Handle numbers (important for budget_amount)
    if (typeof value === 'number') {
      return value.toString();
    }

    return value;
  }
}
