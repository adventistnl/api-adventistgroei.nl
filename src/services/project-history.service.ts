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

    // Busca todos os colaboradores do projeto
    const collaboratorIds = await this.projectRepository.getCollaboratorIds(entry.project_id);

    // 2. WebSocket + 3. Notification persistida — para cada colaborador (exceto o ator)
    await Promise.all(
      collaboratorIds
        .filter((id) => id !== entry.user_id) // não notifica quem fez a ação
        .map(async (collaboratorId) => {
          // WebSocket em tempo real
          this.pubSubService.publish(USER_PROJECT_HISTORY_ADDED, {
            userProjectHistoryAdded: entry,
            userId: collaboratorId,
          }).catch(() => {/* ignore pubsub errors */});

          // Notificação persistida no banco
          const { title, message } = this.buildNotificationText(entry, project.title);
          this.notificationService.createForUser({
            userId: collaboratorId,
            institutionId,
            projectId: entry.project_id,
            type: entry.type === ProjectHistoryType.COMMENT ? 'project_message' : 'status_change',
            title,
            message,
            actorUserId: entry.user_id,
          }).catch((e) =>
            console.error('[ProjectHistoryService] Failed to persist notification:', e),
          );
        }),
    );
  }

  /**
   * Builds human-readable title and message for a notification based on history entry type.
   * Intentionally language-neutral (English) — frontend handles i18n display.
   */
  private buildNotificationText(
    entry: ProjectHistory,
    projectTitle: string,
  ): { title: string; message: string } {
    const actor = (entry as any).user?.name ?? 'Someone';
    const meta = (entry as any).metadata as any;
    const subsidyDescription: string | undefined = meta?.subsidyDescription;
    const newStatus: string | undefined = meta?.newStatus;

    switch (entry.type) {
      case ProjectHistoryType.COMMENT:
        return {
          title: `New message in "${projectTitle}"`,
          message: `${actor}: ${entry.comment ?? ''}`,
        };
      case ProjectHistoryType.STATUS_CHANGED:
        if (subsidyDescription) {
          return {
            title: `Subsidy update in "${projectTitle}"`,
            message: `Subsidy "${subsidyDescription}" changed to "${newStatus ?? entry.new_value ?? ''}"`,
          };
        }
        return {
          title: `Status updated in "${projectTitle}"`,
          message: `${actor} changed the status to "${newStatus ?? entry.new_value ?? ''}"`,
        };
      case ProjectHistoryType.BUDGET_UPDATED:
        return {
          title: `Budget updated in "${projectTitle}"`,
          message: `${actor} updated the project budget`,
        };
      case ProjectHistoryType.DEADLINE_UPDATED:
        return {
          title: `Deadline updated in "${projectTitle}"`,
          message: `${actor} updated the project deadline`,
        };
      case ProjectHistoryType.OWNER_CHANGED:
        return {
          title: `Owner changed in "${projectTitle}"`,
          message: `${actor} updated the project owner`,
        };
      case ProjectHistoryType.CO_OWNER_UPDATED:
        return {
          title: `Co-owner updated in "${projectTitle}"`,
          message: `${actor} updated the project co-owner`,
        };
      case ProjectHistoryType.ADJUSTMENT_NEEDED:
        return {
          title: `Adjustment needed in "${projectTitle}"`,
          message: `${actor} requested an adjustment`,
        };
      default:
        return {
          title: `Update in "${projectTitle}"`,
          message: `${actor} made a change to the project`,
        };
    }
  }
}
