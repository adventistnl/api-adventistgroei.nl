import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ProjectAdjustment } from 'src/@generated/project-adjustment/project-adjustment.model';
import { AdjustmentTask } from 'src/@generated/adjustment-task/adjustment-task.model';
import { AdjustmentStatus } from 'src/@generated/prisma/adjustment-status.enum';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { AdjustmentTaskInput } from 'src/dto/project-adjustment.dto';

const ADJUSTMENT_INCLUDE = {
  tasks: { orderBy: { position: 'asc' as const } },
  project_history: {
    include: { user: true },
  },
} as const;

@Injectable()
export class ProjectAdjustmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    projectHistoryId: string,
    userId: string,
    tasks: AdjustmentTaskInput[] = [],
  ): Promise<ProjectAdjustment> {
    return await this.prisma.projectAdjustment.create({
      data: {
        project_history_id: projectHistoryId,
        created_by: userId,
        updated_by: userId,
        tasks: tasks.length
          ? {
              create: tasks.map((t, idx) => ({
                title: t.title,
                position: t.position ?? idx,
              })),
            }
          : undefined,
      },
      include: ADJUSTMENT_INCLUDE,
    });
  }

  async findByProjectId(projectId: string): Promise<ProjectAdjustment[]> {
    return await this.prisma.projectAdjustment.findMany({
      where: {
        project_history: { project_id: projectId },
      },
      include: ADJUSTMENT_INCLUDE,
      orderBy: { created_at: 'desc' },
    });
  }

  async findById(id: string): Promise<ProjectAdjustment> {
    const record = await this.prisma.projectAdjustment.findUnique({
      where: { id },
      include: ADJUSTMENT_INCLUDE,
    });

    if (!record) {
      throw new CustomGraphQLError('Ajuste não encontrado.', ErrorCode.NOT_FOUND, 404);
    }

    return record;
  }

  async updateStatus(id: string, status: AdjustmentStatus, userId: string): Promise<ProjectAdjustment> {
    await this.findById(id);

    return await this.prisma.projectAdjustment.update({
      where: { id },
      data: { status, updated_by: userId },
      include: ADJUSTMENT_INCLUDE,
    });
  }

  async addTask(
    adjustmentId: string,
    title: string,
    userId: string,
    position?: number,
  ): Promise<AdjustmentTask> {
    await this.findById(adjustmentId);

    // Se position não foi fornecida, coloca ao final
    const lastTask = await this.prisma.adjustmentTask.findFirst({
      where: { adjustment_id: adjustmentId },
      orderBy: { position: 'desc' },
      select: { position: true },
    });

    return await this.prisma.adjustmentTask.create({
      data: {
        adjustment_id: adjustmentId,
        title,
        position: position ?? (lastTask ? lastTask.position + 1 : 0),
      },
    });
  }

  async toggleTask(taskId: string, completed: boolean): Promise<AdjustmentTask> {
    const task = await this.prisma.adjustmentTask.findUnique({ where: { id: taskId } });

    if (!task) {
      throw new CustomGraphQLError('Tarefa não encontrada.', ErrorCode.NOT_FOUND, 404);
    }

    return await this.prisma.adjustmentTask.update({
      where: { id: taskId },
      data: { completed },
    });
  }

  async removeTask(taskId: string): Promise<AdjustmentTask> {
    const task = await this.prisma.adjustmentTask.findUnique({ where: { id: taskId } });

    if (!task) {
      throw new CustomGraphQLError('Tarefa não encontrada.', ErrorCode.NOT_FOUND, 404);
    }

    return await this.prisma.adjustmentTask.delete({ where: { id: taskId } });
  }
}
