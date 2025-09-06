import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { MissionProject } from '../@generated/mission-project/mission-project.model';
import { MissionProjectCreateDto, MissionProjectUpdateDto } from '../dto/mission-project.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { InstitutionRepository } from './institution.repository';
import { DepartmentRepository } from './department.repository';

@Injectable()
export class MissionProjectRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly institutionRepository: InstitutionRepository,
    private readonly departmentRepository: DepartmentRepository

  ) {}

  async create(data: MissionProjectCreateDto, userId: string): Promise<MissionProject> {
    await this.institutionRepository.findById(data.institution_id);
    await this.departmentRepository.findById(data.department_id);

    return this.prisma.missionProject.create({
      data: {
        title: data.title,
        description: data.description,
        language_preference: data.language_preference,
        budget: new Decimal(data.budget),
        media_link: data.media_link,
        department: { connect: { id: data.department_id } },
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
        Institution: { connect: { id: data.institution_id } },
      },
    });
  }

  async update(id: string, data: MissionProjectUpdateDto, userId: string): Promise<MissionProject> {
    const {institution_id, department_id, ...rest} = data
    if (institution_id) { 
      await this.institutionRepository.findById(institution_id);
    }
    if (department_id) {
      await this.departmentRepository.findById(department_id);
    }
    return this.prisma.missionProject.update({
      where: { id },
      data: {
        Institution: { connect: { id: institution_id } },
        budget: rest.budget ? new Decimal(rest.budget) : undefined,
        department: { connect: { id: department_id } },
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<MissionProject> {
    return this.prisma.missionProject.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findById(id: string): Promise<MissionProject | null> {
    return this.prisma.missionProject.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof MissionProject, any>>): Promise<MissionProject[]> {
    const allowedKeys: (keyof MissionProject)[] = ['institution_id', 'title', 'description', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof MissionProject)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.missionProject.findMany({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof MissionProject, any>>): Promise<MissionProject | null> {
    const allowedKeys: (keyof MissionProject)[] = ['institution_id', 'title', 'description', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof MissionProject)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.missionProject.findFirst({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findAll(): Promise<MissionProject[]> {
    return this.prisma.missionProject.findMany({ where: { is_deleted: false } });
  }
}
