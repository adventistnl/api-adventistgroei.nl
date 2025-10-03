import { Injectable } from '@nestjs/common';
import { ProjectActivity } from 'src/@generated/project-activity/project-activity.model';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
// import { ProjectActivityCreateDto, ProjectActivityUpdateDto } from 'src/dto/project-activity.dto';
import { PrismaService } from 'src/services';

@Injectable()
export class ProjectActivityRepository {
  constructor(private readonly prisma: PrismaService) {}

  // async create(data: ProjectActivityCreateDto, userId: string): Promise<ProjectActivity> {
  //   try {
  //     return await this.prisma.projectActivity.create({
  //       data: {
  //         ...data,
  //         created_by: userId,
  //         updated_by: userId,
  //         deadline: data.deadline || new Date(), // Adicionando valor padrão para deadline
  //         owner_id: data.owner_id || '', // Garantir que owner_id seja fornecido
  //       },
  //     });
  //   } catch {
  //     throw new CustomGraphQLError('Erro ao criar ProjectActivity', ErrorCode.INTERNAL_SERVER_ERROR, 500);
  //   }
  // }

  // async update(data: ProjectActivityUpdateDto, userId: string): Promise<ProjectActivity> {
  //   try {
  //     return await this.prisma.projectActivity.update({
  //       where: { id: data.id },
  //       data: {
  //         ...data,
  //         updated_by: userId,
  //       },
  //     });
  //   } catch {
  //     throw new CustomGraphQLError('Erro ao atualizar ProjectActivity', ErrorCode.INTERNAL_SERVER_ERROR, 500);
  //   }
  // }

  async findById(id: string): Promise<ProjectActivity | null> {
    return this.prisma.projectActivity.findUnique({ where: { id, is_deleted: false } });
  }

  async findManyByFilters(filters: Partial<Record<keyof ProjectActivity, any>>): Promise<ProjectActivity[]> {
    const allowedKeys: (keyof ProjectActivity)[] = ['id', 'name', 'project_id', 'is_deleted'];
    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof ProjectActivity)) {
        throw new CustomGraphQLError(`Invalid filter key: ${key}`, ErrorCode.BAD_REQUEST, 400);
      }
    }
    return this.prisma.projectActivity.findMany({ where: { ...filters, is_deleted: false } });
  }

  async softDelete(id: string, userId: string): Promise<ProjectActivity> {
    try {
      return await this.prisma.projectActivity.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
        },
      });
    } catch {
      throw new CustomGraphQLError('Erro ao deletar ProjectActivity', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
  }
}
