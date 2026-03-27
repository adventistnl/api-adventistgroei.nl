import { Resolver, Query, Mutation, Args, Context, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/middlewares/permissions.guard';
import { Permission } from 'src/middlewares';
import { ProjectAdjustment } from 'src/@generated/project-adjustment/project-adjustment.model';
import { AdjustmentTask } from 'src/@generated/adjustment-task/adjustment-task.model';
import {
  AddAdjustmentTaskDto,
  CreateAdjustmentDto,
  ToggleAdjustmentTaskDto,
  UpdateAdjustmentStatusDto,
} from 'src/dto/project-adjustment.dto';
import { ProjectAdjustmentService } from 'src/services/project-adjustment.service';

@Resolver(() => ProjectAdjustment)
export class ProjectAdjustmentResolver {
  constructor(private readonly service: ProjectAdjustmentService) {}

  /** Lista todos os adjustments de um projeto, ordenados do mais recente ao mais antigo. */
  @Query(() => [ProjectAdjustment], { name: 'projectAdjustments' })
  @UseGuards(PermissionsGuard)
  @Permission('projectAdjustments')
  async getByProjectId(
    @Args('projectId', { type: () => ID }) projectId: string,
  ): Promise<ProjectAdjustment[]> {
    return this.service.getByProjectId(projectId);
  }

  /** Retorna um adjustment específico pelo ID. */
  @Query(() => ProjectAdjustment, { name: 'projectAdjustment' })
  @UseGuards(PermissionsGuard)
  @Permission('projectAdjustment')
  async getById(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<ProjectAdjustment> {
    return this.service.getById(id);
  }

  /**
   * Cria um novo adjustment vinculado ao projeto.
   * Aceita texto livre (comment), uma todo list (tasks) ou ambos simultaneamente.
   * Gera automaticamente uma entrada ADJUSTMENT_NEEDED no ProjectHistory e
   * publica notificações em tempo real para todos os colaboradores do projeto.
   */
  @Mutation(() => ProjectAdjustment)
  @UseGuards(PermissionsGuard)
  @Permission()
  async createAdjustment(
    @Args('data') data: CreateAdjustmentDto,
    @Context() context: { userId: string },
  ): Promise<ProjectAdjustment> {
    return this.service.createAdjustment(data, context.userId);
  }

  /** Atualiza o status do adjustment: OPEN → IN_PROGRESS → CLOSED (ou qualquer transição). */
  @Mutation(() => ProjectAdjustment)
  @UseGuards(PermissionsGuard)
  @Permission()
  async updateAdjustmentStatus(
    @Args('data') data: UpdateAdjustmentStatusDto,
    @Context() context: { userId: string },
  ): Promise<ProjectAdjustment> {
    return this.service.updateStatus(data, context.userId);
  }

  /** Adiciona uma nova tarefa ao todo list de um adjustment existente. */
  @Mutation(() => AdjustmentTask)
  @UseGuards(PermissionsGuard)
  @Permission()
  async addAdjustmentTask(
    @Args('data') data: AddAdjustmentTaskDto,
    @Context() context: { userId: string },
  ): Promise<AdjustmentTask> {
    return this.service.addTask(data, context.userId);
  }

  /** Marca ou desmarca uma tarefa como concluída. */
  @Mutation(() => AdjustmentTask)
  @UseGuards(PermissionsGuard)
  @Permission()
  async toggleAdjustmentTask(
    @Args('data') data: ToggleAdjustmentTaskDto,
  ): Promise<AdjustmentTask> {
    return this.service.toggleTask(data);
  }

  /** Remove uma tarefa do todo list. */
  @Mutation(() => AdjustmentTask)
  @UseGuards(PermissionsGuard)
  @Permission()
  async removeAdjustmentTask(
    @Args('taskId', { type: () => ID }) taskId: string,
  ): Promise<AdjustmentTask> {
    return this.service.removeTask(taskId);
  }
}
