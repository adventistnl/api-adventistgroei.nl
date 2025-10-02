import { Injectable } from '@nestjs/common';
import { ProjectActivityRepository } from '../repositories/project-activity.repository';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { ProjectActivity } from 'src/@generated/project-activity/project-activity.model';
import { ProjectActivityCreateDto, ProjectActivityUpdateDto } from 'src/dto/project-activity.dto';

@Injectable()
export class ProjectActivityService {
  constructor(private readonly repository: ProjectActivityRepository) {}

  // async create(input: ProjectActivityCreateDto, userId: string): Promise<ProjectActivity> {
  //   try {
  //     return await this.repository.create(input, userId);
  //   } catch (error) {
  //     throw new CustomGraphQLError('Erro ao criar atividade do projeto', ErrorCode.INTERNAL_SERVER_ERROR, error);
  //   }
  // }

  // async update(input: ProjectActivityUpdateDto, userId: string): Promise<ProjectActivity> {
  //   try {
  //     return await this.repository.update(input, userId);
  //   } catch (error) {
  //     throw new CustomGraphQLError('Erro ao atualizar atividade do projeto', ErrorCode.INTERNAL_SERVER_ERROR, error);
  //   }
  // }

  async findById(id: string): Promise<ProjectActivity | null> {
    return this.repository.findById(id);
  }

  async findManyByFilters(filters: Partial<Record<string, any>>): Promise<ProjectActivity[]> {
    return this.repository.findManyByFilters(filters);
  }

  async softDelete(id: string, userId: string): Promise<ProjectActivity> {
    return this.repository.softDelete(id, userId);
  }
}
