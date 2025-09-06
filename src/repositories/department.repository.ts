import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Department } from '../@generated/department/department.model';
import { DepartmentCreateInput as GeneratedDepartmentCreateInput } from '../@generated/department/department-create.input';
import { DepartmentUpdateInput as GeneratedDepartmentUpdateInput } from '../@generated/department/department-update.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class DepartmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Department[]> {
    return this.prisma.department.findMany();
  }

  async findById(id: string): Promise<Department | null> {
    return this.prisma.department.findUnique({ where: { id } });
  }

  async create(data: GeneratedDepartmentCreateInput): Promise<Department> {
    const prismaData: Prisma.DepartmentCreateInput = data as Prisma.DepartmentCreateInput;
    return this.prisma.department.create({ data: prismaData });
  }

  async update(id: string, data: GeneratedDepartmentUpdateInput): Promise<Department> {
    const prismaData: Prisma.DepartmentUpdateInput = data as Prisma.DepartmentUpdateInput;
    return this.prisma.department.update({ where: { id }, data: prismaData });
  }

  async delete(id: string): Promise<Department> {
    return this.prisma.department.delete({ where: { id } });
  }

  async findOneByFilters(filters: Partial<Record<keyof Department, any>>): Promise<Department | null> {
    const allowedKeys: (keyof Department)[] = ['institution_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Department)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.department.findFirst({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Department, any>>): Promise<Department[]> {
    const allowedKeys: (keyof Department)[] = ['institution_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Department)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.department.findMany({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }
}
