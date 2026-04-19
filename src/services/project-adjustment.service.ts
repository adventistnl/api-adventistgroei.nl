import { Injectable } from '@nestjs/common';
import { ProjectAdjustment } from 'src/@generated/project-adjustment/project-adjustment.model';
import { AdjustmentTask } from 'src/@generated/adjustment-task/adjustment-task.model';
import { AdjustmentStatus } from 'src/@generated/prisma/adjustment-status.enum';
import { ProjectHistoryType } from 'src/@generated/prisma/project-history-type.enum';
import {
  AddAdjustmentTaskDto,
  CreateAdjustmentDto,
  ToggleAdjustmentTaskDto,
  UpdateAdjustmentStatusDto,
} from 'src/dto/project-adjustment.dto';
import { ProjectAdjustmentRepository } from 'src/repositories/project-adjustment.repository';
import { ProjectHistoryService } from 'src/services/project-history.service';

@Injectable()
export class ProjectAdjustmentService {
  constructor(
    private readonly adjustmentRepository: ProjectAdjustmentRepository,
    private readonly historyService: ProjectHistoryService,
  ) {}

  /**
   * Cria uma entrada ADJUSTMENT_NEEDED no histórico e o adjustment vinculado.
   * O adjustment pode conter somente texto (comment), somente tasks (todo list),
   * ou ambos simultaneamente.
   * Publica automaticamente os eventos PubSub para todos os colaboradores do projeto.
   */
  async createAdjustment(data: CreateAdjustmentDto, userId: string): Promise<ProjectAdjustment> {
    // Cria o ProjectHistory (type = ADJUSTMENT_NEEDED) + publica PubSub
    const history = await this.historyService.create(
      {
        project_id: data.project_id,
        type: ProjectHistoryType.ADJUSTMENT_NEEDED,
        comment: data.comment,
      },
      userId,
    );

    // Cria o ProjectAdjustment vinculado ao histórico com as tasks opcionais
    return this.adjustmentRepository.create(history.id, userId, data.tasks ?? []);
  }

  async getByProjectId(projectId: string): Promise<ProjectAdjustment[]> {
    return this.adjustmentRepository.findByProjectId(projectId);
  }

  async getById(id: string): Promise<ProjectAdjustment> {
    return this.adjustmentRepository.findById(id);
  }

  /** Altera o status: OPEN → IN_PROGRESS → CLOSED (ou qualquer transição). */
  async updateStatus(data: UpdateAdjustmentStatusDto, userId: string): Promise<ProjectAdjustment> {
    return this.adjustmentRepository.updateStatus(data.id, data.status as AdjustmentStatus, userId);
  }

  /** Adiciona uma nova task ao todo list de um adjustment existente. */
  async addTask(data: AddAdjustmentTaskDto, userId: string): Promise<AdjustmentTask> {
    return this.adjustmentRepository.addTask(data.adjustment_id, data.title, userId, data.position);
  }

  /** Marca ou desmarca uma task como concluída. */
  async toggleTask(data: ToggleAdjustmentTaskDto): Promise<AdjustmentTask> {
    return this.adjustmentRepository.toggleTask(data.task_id, data.completed);
  }

  /** Remove uma task do todo list. */
  async removeTask(taskId: string): Promise<AdjustmentTask> {
    return this.adjustmentRepository.removeTask(taskId);
  }
}
