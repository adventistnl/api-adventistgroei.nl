import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { MissionProject } from '../@generated/mission-project/mission-project.model';
import { MissionProjectCreateDto, MissionProjectUpdateDto } from '../dto/mission-project.dto';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class MissionProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: MissionProjectCreateDto, userId: string): Promise<MissionProject> {

    return this.prisma.missionProject.create({
      data: {
        title: data.title,
        description: data.description,
        language_preference: data.language_preference,
        budget: new Decimal(data.budget),
        media_link: data.media_link,
        department: { connect: { id: data.department } },
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(id: string, data: MissionProjectUpdateDto, userId: string): Promise<MissionProject> {
    return this.prisma.missionProject.update({
      where: { id },
      data: {
        ...data,
        budget: data.budget ? new Decimal(data.budget) : undefined,
        department: data.departmentId ? { connect: { id: data.departmentId } } : undefined,
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
