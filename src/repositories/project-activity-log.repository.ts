import { Injectable } from '@nestjs/common';
import { ProjectActivityLog } from 'src/@generated/project-activity-log/project-activity-log.model';
import { ProjectActivityLogCreateDto } from 'src/dto/project-activity-log.dto';
import { PrismaService } from 'src/services';

@Injectable()
export class ProjectActivityLogRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Criar um novo log de atividade
   */
  async create(data: ProjectActivityLogCreateDto): Promise<ProjectActivityLog> {
    return await this.prisma.projectActivityLog.create({
      data: {
        activity_id: data.activity_id,
        user_id: data.user_id,
        action: data.action,
        field_name: data.field_name,
        old_value: data.old_value,
        new_value: data.new_value,
        metadata: data.metadata,
      },
      include: {
        user: true,
      },
    });
  }

  /**
   * Buscar logs de uma atividade específica
   */
  async findByActivityId(activityId: string): Promise<ProjectActivityLog[]> {
    return await this.prisma.projectActivityLog.findMany({
      where: {
        activity_id: activityId,
      },
      include: {
        user: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  /**
   * Criar múltiplos logs de uma vez (útil para batch updates)
   */
  async createMany(logs: ProjectActivityLogCreateDto[]): Promise<number> {
    const result = await this.prisma.projectActivityLog.createMany({
      data: logs.map((log) => ({
        activity_id: log.activity_id,
        user_id: log.user_id,
        action: log.action,
        field_name: log.field_name,
        old_value: log.old_value,
        new_value: log.new_value,
        metadata: log.metadata,
      })),
    });

    return result.count;
  }
}
