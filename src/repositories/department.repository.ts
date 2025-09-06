import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Department } from '../@generated/department/department.model';
import { DepartmentCreateDto, DepartmentUpdateDto } from 'src/dto';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { InstitutionRepository } from './institution.repository';
import { ChurchRepository } from './church.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class DepartmentRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly institutionRepository: InstitutionRepository,
    private readonly churchRepository: ChurchRepository
  ) {}

  async findAll(): Promise<Department[]> {
    return this.prisma.department.findMany();
  }

  async findById(id: string): Promise<Department | null> {
    const department = await this.prisma.department.findUnique({ where: { id } });
    if (!department) {
      throw new CustomGraphQLError('Department not found', ErrorCode.NOT_FOUND, 404);
    }
    return department;
  }

  async create(data: DepartmentCreateDto, userId: string): Promise<Department> {
    const institution = await this.institutionRepository.findById(data.institution);
    if (!institution) {
      throw new CustomGraphQLError('Institution not found', ErrorCode.NOT_FOUND, 404);
    }
    const church = await this.churchRepository.findById(data.church);
    if (!church) {
      throw new CustomGraphQLError('Church not found', ErrorCode.NOT_FOUND, 404);
    }
    const annual_budget = Prisma.Decimal(data.annual_budget);
    console.log("data", data);
    console.log("annual_budget", annual_budget);
    return this.prisma.department.create({
      data: {
        ...data,
        created_by: userId,
        updated_by: userId,
        annual_budget: annual_budget,
        institution: { connect: { id: data.institution } },
        church: { connect: { id: data.church } },
      },
    });
  }

  async update(id: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
    const department = await this.findById(id);
    if (!department) {
      throw new CustomGraphQLError('Department not found', ErrorCode.NOT_FOUND, 404);
    }
    if(data.institution_id) {
      const institution = await this.institutionRepository.findById(data.institution_id);
      if (!institution) {
        throw new CustomGraphQLError('Institution not found', ErrorCode.NOT_FOUND, 404);
      }
    }
    if(data.church_id) {
      const church = await this.churchRepository.findById(data.church_id);
      if (!church) {
        throw new CustomGraphQLError('Church not found', ErrorCode.NOT_FOUND, 404);
        }
    }

    return this.prisma.department.update({ where: { id }, data: {
      updated_by: { set: userId },
      name: data.name ? { set: data.name } : undefined,
      description: data.description ? { set: data.description } : undefined,
      annual_budget: data.annual_budget ? { set: Prisma.Decimal(data.annual_budget) } : undefined,
      institution: data.institution_id ? { connect: { id: data.institution_id } } : undefined,
      church: data.church_id ? { connect: { id: data.church_id } } : undefined,
    } });
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
