import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Project } from '../@generated/project/project.model';
import { ProjectCreateDto, ProjectUpdateDto } from '../dto/project.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { InstitutionRepository } from './institution.repository';
import { DepartmentRepository } from './department.repository';
import { UserRepository } from './user.repository';

@Injectable()
export class ProjectRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly institutionRepository: InstitutionRepository,
    private readonly departmentRepository: DepartmentRepository,
    private readonly userRepository: UserRepository

  ) {}

  async create(data: ProjectCreateDto, userId: string): Promise<Project> {
    await this.institutionRepository.findById(data.institution_id);
    await this.departmentRepository.findById(data.department_id);
    await this.userRepository.findById(data.owner_id);

    return this.prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        language_preference: data.language_preference,
        budget: new Decimal(data.budget),
        media_link: data.media_link,
        type: data.type,
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
        department: { connect: { id: data.department_id } },
        owner: {connect: {id: data.owner_id}},
        Institution: { connect: { id: data.institution_id } },
      },
    });
  }

  async update(id: string, data: ProjectUpdateDto, userId: string): Promise<Project> {
    const { institution_id, department_id, owner_id, ...rest } = data;
    if (institution_id) {
      await this.institutionRepository.findById(institution_id);
    }
    if (department_id) {
      await this.departmentRepository.findById(department_id);
    }
    if (owner_id) {
      await this.userRepository.findById(owner_id);
    }
    return this.prisma.project.update({
      where: { id },
      data: {
        Institution: institution_id ? { connect: { id: institution_id } } : undefined,
        owner: owner_id ? { connect: { id: owner_id } } : undefined,
        budget: rest.budget ? new Decimal(rest.budget) : undefined,
        department: department_id ? { connect: { id: department_id } } : undefined,
        title: rest.title,
        description: rest.description,
        language_preference: rest.language_preference,
        media_link: rest.media_link,
        type: rest.type,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findById(id: string): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Project, any>>): Promise<Project[]> {
  const allowedKeys: (keyof Project)[] = ['institution_id', 'title', 'description', 'is_deleted', 'type'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Project)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.project.findMany({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof Project, any>>): Promise<Project | null> {
    const allowedKeys: (keyof Project)[] = ['institution_id', 'title', 'description', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Project)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.project.findFirst({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany({ where: { is_deleted: false } });
  }
}
