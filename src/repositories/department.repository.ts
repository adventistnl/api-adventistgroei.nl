import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Department } from '../@generated/department/department.model';
import { DepartmentCreateDto, DepartmentUpdateDto } from 'src/dto';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { InstitutionRepository } from './institution.repository';
import { ChurchRepository } from './church.repository';
import { AnnualBudget, Prisma } from '@prisma/client';

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
    await this.institutionRepository.findById(data.institution);
    await this.churchRepository.findById(data.church);

    let contactId: string | undefined;
    if (data.contact) {
      const contact = await this.prisma.contact.create({
        data: {
          name: data.contact.name,
          phone: data.contact.phone,
          email: data.contact.email,
          is_primary: false, // Valor padrão para is_primary
          created_by: userId,
          updated_by: userId,
        },
      });
      contactId = contact.id;
    }
    const { annual_budget: annualBudgetData } = data
    let annual_budget: AnnualBudget | undefined;
    if (annualBudgetData) {
      annual_budget = await this.prisma.annualBudget.create({
        data: {
          balance: new Prisma.Decimal(annualBudgetData.balance),
          planned_budget: new Prisma.Decimal(annualBudgetData.planned_budget),
          total_expenses: new Prisma.Decimal(annualBudgetData.total_expenses),
          year: annualBudgetData.year,
          created_by: userId,
          updated_by: userId,
        },
      });
    }

    return this.prisma.department.create({
      data: {
        name: data.name,
        description: data.description,
        annual_budget: annual_budget ? { connect: { id: annual_budget.id } } : undefined,
        institution: { connect: { id: data.institution } },
        church: { connect: { id: data.church } },
        contact: contactId ? { connect: { id: contactId } } : undefined,
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(departmentId: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
    if (data.institution_id) {
      await this.institutionRepository.findById(data.institution_id);
    }

    if (data.church_id) {
      await this.churchRepository.findById(data.church_id);
    }

    const existingDepartment = await this.findById(departmentId);
    if (!existingDepartment) {
      throw new CustomGraphQLError('Department not found', ErrorCode.NOT_FOUND, 404);
    }

    let contactData;
    if (data.contact) {
      contactData = existingDepartment.contact_id
        ? {
            update: {
              ...data.contact,
              updated_by: userId,
            },
          }
        : {
            create: {
              ...data.contact,
              is_primary: false,
              created_by: userId,
              updated_by: userId,
            },
          };
    }

    return this.prisma.department.update({
      where: { id: departmentId },
      data: {
        name: data.name ?? undefined,
        description: data.description ?? undefined,
        annual_budget: data.annual_budget ? { update: data.annual_budget } : undefined,
        institution: data.institution_id ? { connect: { id: data.institution_id } } : undefined,
        church: data.church_id ? { connect: { id: data.church_id } } : undefined,
        contact: contactData,
        updated_by: userId,
      },
    });
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
