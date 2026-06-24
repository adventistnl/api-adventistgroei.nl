import { Injectable } from '@nestjs/common';
import { ProjectHistory } from 'src/@generated/project-history/project-history.model';
import { ProjectHistoryType } from 'src/@generated/prisma/project-history-type.enum';
import { ProjectHistoryCreateDto } from 'src/dto/project-history.dto';
import { ProjectHistoryRepository } from 'src/repositories/project-history.repository';
import { ProjectRepository } from 'src/repositories/project.repository';
import { PubSubService } from 'src/services/pubsub.service';
import { NotificationService } from 'src/services/notification.service';
import {
  PROJECT_HISTORY_ADDED,
  USER_PROJECT_HISTORY_ADDED,
} from 'src/common/constants/subscription-events';

@Injectable()
export class ProjectHistoryService {
  constructor(
    private readonly historyRepository: ProjectHistoryRepository,
    private readonly projectRepository: ProjectRepository,
    private readonly pubSubService: PubSubService,
    private readonly notificationService: NotificationService,
  ) {}

  async create(data: ProjectHistoryCreateDto, userId: string): Promise<ProjectHistory> {
    await this.projectRepository.findById(data.project_id);
    const entry = await this.historyRepository.create(data, userId);
    await this.publishAll(entry);
    return entry;
  }

  async getByProjectId(projectId: string): Promise<ProjectHistory[]> {
    await this.projectRepository.findById(projectId);
    return this.historyRepository.findByProjectId(projectId);
  }

  async delete(historyId: string, userId: string): Promise<ProjectHistory> {
    return this.historyRepository.delete(historyId);
  }

  /**
   * Registra eventos automáticos de histórico (chamado por outros services).
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
    const entry = await this.historyRepository.logEvent(projectId, userId, type, options);
    await this.publishAll(entry);
    return entry;
  }

  /**
   * Publica eventos a cada nova entrada de histórico:
   *
   * 1. PROJECT_HISTORY_ADDED → WebSocket para clientes com o modal aberto no projeto.
   * 2. USER_PROJECT_HISTORY_ADDED → WebSocket por colaborador para notificações em tempo real.
   * 3. Notification.create → persistido no banco por colaborador (sobrevive ao browser fechado).
   */
  private async publishAll(entry: ProjectHistory): Promise<void> {
    // 1. WebSocket: clientes com a tela do projeto aberta
    await this.pubSubService.publish(PROJECT_HISTORY_ADDED, {
      projectHistoryAdded: entry,
      projectId: entry.project_id,
    });

    // Busca projeto para obter institution_id e título
    const project = await this.projectRepository.findById(entry.project_id);
    if (!project) return;

    const institutionId = project.institution_id;
    if (!institutionId) return;

    // Busca colaboradores do projeto separados por tipo (padrão vs financeiro)
    const { standardIds, financeIds } = await this.projectRepository.getCollaboratorIds(entry.project_id);

    // Regra de Negócio: Usuário FINANCE só recebe notificações de mudança de status de subsídio para APPROVED
    const meta = (entry as any).metadata;
    const isSubsidyApproved = entry.type === ProjectHistoryType.STATUS_CHANGED && 
      meta?.newStatus?.toUpperCase() === 'APPROVED';

    const notifyIds = new Set<string>(standardIds);
    if (isSubsidyApproved) {
      financeIds.forEach(id => notifyIds.add(id));
    }

    // 2. WebSocket + 3. Notification persistida — para cada colaborador (exceto o ator)
    await Promise.all(
      Array.from(notifyIds)
        .filter((id) => id !== entry.user_id) // não notifica quem fez a ação
        .map(async (collaboratorId) => {
          // WebSocket em tempo real
          this.pubSubService.publish(USER_PROJECT_HISTORY_ADDED, {
            userProjectHistoryAdded: entry,
            userId: collaboratorId,
          }).catch(() => {/* ignore pubsub errors */});

          // Notificação persistida no banco
          const payload = this.buildNotificationPayload(entry, project.title);
          this.notificationService.createForUser({
            userId: collaboratorId,
            institutionId,
            projectId: entry.project_id,
            type: payload.type,
            title: payload.title,
            message: payload.message,
            metadata: payload.metadata,
            actorUserId: entry.user_id,
          }).catch((e) =>
            console.error('[ProjectHistoryService] Failed to persist notification:', e),
          );
        }),
    );
  }

  /**
   * Builds the translation keys and metadata payload for a notification based on history entry type.
   * The frontend will translate these keys using i18next and the provided metadata.
   */
  private buildNotificationPayload(
    entry: ProjectHistory,
    projectTitle: string,
  ): { type: string; title: string; message: string; metadata: any } {
    const actor = (entry as any).user?.name ?? 'Someone';
    const meta = (entry as any).metadata as any;
    const subsidyDescription: string | undefined = meta?.subsidyDescription;
    const rawStatus: string = meta?.newStatus ?? entry.new_value ?? '';
    
    const formattedStatus = rawStatus
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    const metadata = {
      projectTitle,
      actor,
      status: formattedStatus,
      subsidy: subsidyDescription,
      comment: entry.comment ?? '',
      activityName: meta?.activityName ?? entry.new_value ?? '',
    };

    switch (entry.type) {
      case ProjectHistoryType.COMMENT:
        return {
          type: 'PROJECT_MESSAGE',
          title: 'notifications.new_message_title',
          message: 'notifications.new_message',
          metadata,
        };
      case ProjectHistoryType.STATUS_CHANGED:
        if (subsidyDescription) {
          return {
            type: 'SUBSIDY_STATUS_CHANGED',
            title: 'notifications.subsidy_status_change_title',
            message: 'notifications.subsidy_status_change_message',
            metadata,
          };
        }
        return {
          type: 'PROJECT_STATUS_CHANGED',
          title: 'notifications.status_change_title',
          message: 'notifications.status_change_message',
          metadata,
        };
      case ProjectHistoryType.BUDGET_UPDATED:
        return {
          type: 'PROJECT_STATUS_CHANGED',
          title: 'notifications.budget_updated_title',
          message: 'notifications.budget_updated_message',
          metadata,
        };
      case ProjectHistoryType.DEADLINE_UPDATED:
        return {
          type: 'PROJECT_STATUS_CHANGED',
          title: 'notifications.deadline_updated_title',
          message: 'notifications.deadline_updated_message',
          metadata,
        };
      case ProjectHistoryType.OWNER_CHANGED:
        return {
          type: 'PROJECT_MEMBER_ADDED',
          title: 'notifications.owner_changed_title',
          message: 'notifications.owner_changed_message',
          metadata,
        };
      case ProjectHistoryType.CO_OWNER_UPDATED:
        return {
          type: 'PROJECT_MEMBER_ADDED',
          title: 'notifications.co_owner_updated_title',
          message: 'notifications.co_owner_updated_message',
          metadata,
        };
      case ProjectHistoryType.ADJUSTMENT_NEEDED:
        return {
          type: 'SYSTEM_ALERT',
          title: 'notifications.adjustment_needed_title',
          message: 'notifications.adjustment_needed_message',
          metadata,
        };
      case ProjectHistoryType.CREATED:
        return {
          type: 'INFO',
          title: 'notifications.project_created_title',
          message: 'notifications.project_created_message',
          metadata,
        };
      case ProjectHistoryType.DELETED:
        return {
          type: 'SYSTEM_ALERT',
          title: 'notifications.project_deleted_title',
          message: 'notifications.project_deleted_message',
          metadata,
        };
      case ProjectHistoryType.ACTIVITY_CREATED:
        return {
          type: 'INFO',
          title: 'notifications.activity_created_title',
          message: 'notifications.activity_created_message',
          metadata,
        };
      case ProjectHistoryType.ACTIVITY_UPDATED:
        return {
          type: 'INFO',
          title: 'notifications.activity_updated_title',
          message: 'notifications.activity_updated_message',
          metadata,
        };
      case ProjectHistoryType.ACTIVITY_DELETED:
        return {
          type: 'SYSTEM_ALERT',
          title: 'notifications.activity_deleted_title',
          message: 'notifications.activity_deleted_message',
          metadata,
        };
      case ProjectHistoryType.SUBSIDY_CREATED:
        return {
          type: 'SUBSIDY_STATUS_CHANGED',
          title: 'notifications.subsidy_created_title',
          message: 'notifications.subsidy_created_message',
          metadata,
        };
      case ProjectHistoryType.SUBSIDY_UPDATED:
        return {
          type: 'SUBSIDY_STATUS_CHANGED',
          title: 'notifications.subsidy_updated_title',
          message: 'notifications.subsidy_updated_message',
          metadata,
        };
      case ProjectHistoryType.SUBSIDY_APPROVED:
        return {
          type: 'SUBSIDY_STATUS_CHANGED',
          title: 'notifications.subsidy_approved_title',
          message: 'notifications.subsidy_approved_message',
          metadata,
        };
      case ProjectHistoryType.SUBSIDY_REJECTED:
        return {
          type: 'SYSTEM_ALERT',
          title: 'notifications.subsidy_rejected_title',
          message: 'notifications.subsidy_rejected_message',
          metadata,
        };
      case ProjectHistoryType.SUBSIDY_DELETED:
        return {
          type: 'SYSTEM_ALERT',
          title: 'notifications.subsidy_deleted_title',
          message: 'notifications.subsidy_deleted_message',
          metadata,
        };
      case ProjectHistoryType.UPDATED: {
        const action = meta?.action;
        if (subsidyDescription && action === 'created') {
          return {
            type: 'SUBSIDY_STATUS_CHANGED',
            title: 'notifications.subsidy_created_title',
            message: 'notifications.subsidy_created_named_message',
            metadata,
          };
        }
        if (subsidyDescription && action === 'deleted') {
          return {
            type: 'SYSTEM_ALERT',
            title: 'notifications.subsidy_deleted_title',
            message: 'notifications.subsidy_deleted_named_message',
            metadata,
          };
        }
        if (meta?.activityName && action === 'activity_deleted') {
          return {
            type: 'SYSTEM_ALERT',
            title: 'notifications.activity_deleted_title',
            message: 'notifications.activity_deleted_named_message',
            metadata,
          };
        }
        return {
          type: 'INFO',
          title: 'notifications.update_title',
          message: 'notifications.update_message',
          metadata,
        };
      }
      default:
        return {
          type: 'INFO',
          title: 'notifications.update_title',
          message: 'notifications.update_message',
          metadata,
        };
    }
  }
}
