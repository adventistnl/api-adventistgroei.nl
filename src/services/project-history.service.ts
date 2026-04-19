import { Injectable } from '@nestjs/common';
import { ProjectHistory } from 'src/@generated/project-history/project-history.model';
import { ProjectHistoryType } from 'src/@generated/prisma/project-history-type.enum';
import { ProjectHistoryCreateDto } from 'src/dto/project-history.dto';
import { ProjectHistoryRepository } from 'src/repositories/project-history.repository';
import { ProjectRepository } from 'src/repositories/project.repository';
import { PubSubService } from 'src/services/pubsub.service';
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
   * Publica dois eventos a cada nova entrada de histórico:
   *
   * 1. PROJECT_HISTORY_ADDED → para todos os clientes com o modal aberto
   *    no mesmo projeto (filtrado por projectId no resolver).
   *
   * 2. USER_PROJECT_HISTORY_ADDED → um evento por colaborador do projeto
   *    (owner + co_owner + voluntários), filtrado por userId no resolver.
   *    Permite que o frontend exiba notificações mesmo sem o modal aberto.
   */
  private async publishAll(entry: ProjectHistory): Promise<void> {
    // Publica para clientes com a tela do projeto aberta
    await this.pubSubService.publish(PROJECT_HISTORY_ADDED, {
      projectHistoryAdded: entry,
      projectId: entry.project_id,
    });

    // Busca todos os colaboradores do projeto
    const collaboratorIds = await this.projectRepository.getCollaboratorIds(entry.project_id);

    // Publica um evento individual para cada colaborador
    await Promise.all(
      collaboratorIds.map((collaboratorId) =>
        this.pubSubService.publish(USER_PROJECT_HISTORY_ADDED, {
          userProjectHistoryAdded: entry,
          userId: collaboratorId,
        }),
      ),
    );
  }
}
