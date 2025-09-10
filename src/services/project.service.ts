import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repositories/project.repository';
import { Project } from '../@generated/project/project.model';
import { ProjectCreateDto, ProjectUpdateDto } from '../dto/project.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async create(data: ProjectCreateDto, userId: string): Promise<Project> {
    return this.projectRepository.create(data, userId);
  }

  async update(id: string, data: ProjectUpdateDto, userId: string): Promise<Project> {
    return this.projectRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<Project> {
    return this.projectRepository.softDelete(id, userId);
  }

  async findById(id: string): Promise<Project | null> {
    return this.projectRepository.findById(id);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }
}
