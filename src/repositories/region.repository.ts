import { Injectable } from '@nestjs/common';
import { RegionCreateDto, RegionUpdateDto } from '../dto/region.dto';
import { Region, Prisma } from '@prisma/client';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { PrismaService } from '../services';
import { InstitutionRepository } from './institution.repository';

@Injectable()
export class RegionRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly institutionRepository: InstitutionRepository
    
  ) {}

  async findAll(): Promise<Region[]> {
    const regions = await this.prisma.region.findMany();
    return regions.map((r) => r);
  }

  async findById(id: string): Promise<Region | null> {
    const r = await this.prisma.region.findUnique({ where: { id } });
    if (!r) throw new CustomGraphQLError('Region not found', ErrorCode.NOT_FOUND, 404);
    return r;
  }

  async create(data: RegionCreateDto, userId: string): Promise<Region> {
    await this.institutionRepository.findById(data.institution_id);
    if (data.parent_region_id) {
      const parent_region = await this.prisma.region.findUnique({ where: { id: data.parent_region_id } });
      if (!parent_region) throw new CustomGraphQLError('Parent region not found', ErrorCode.NOT_FOUND, 404);
    }
    const annualBudget = await this.prisma.annualBudget.create({
      data: {
        balance: new Prisma.Decimal(data.annual_budget.balance),
        planned_budget: new Prisma.Decimal(data.annual_budget.planned_budget),
        total_expenses: new Prisma.Decimal(data.annual_budget.total_expenses),
        year: data.annual_budget.year,
        created_by: userId,
        updated_by: userId,
      },
    });
    return await this.prisma.region.create({
      data: {
        institution: { connect: { id: data.institution_id } },
        annual_budget: { connect: { id: annualBudget.id } },
        parent_region: data.parent_region_id ? { connect: { id: data.parent_region_id } } : undefined,
        name: data.name,
        contact: data.contact ? {
          create: {
            ...data.contact,
            is_primary: true,
            created_by: userId,
            updated_by: userId,
          }
        } : undefined,
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(regionId: string, data: RegionUpdateDto, userId: string): Promise<Region> {
    const region = await this.findById(regionId);
    if (data.institution_id) await this.institutionRepository.findById(data.institution_id);
    if (data.parent_region_id) {
      const parent_region = await this.prisma.region.findUnique({ where: { id: data.parent_region_id } });
      if (!parent_region) throw new CustomGraphQLError('Parent region not found', ErrorCode.NOT_FOUND, 404);
    }

    return await this.prisma.region.update({
      where: { id: regionId },
      data: {
        institution: data.institution_id ? { connect: { id: data.institution_id } } : undefined,
        parent_region: data.parent_region_id ? { connect: { id: data.parent_region_id } } : undefined,
        name: data.name,
        contact: data.contact
          ? region?.contact_id ? {
              update: {
                ...data.contact,
                updated_by: userId,
              },
            } : {
              create: {
                ...data.contact,
                is_primary: true,
                created_by: userId,
                updated_by: userId,
              },
            } : undefined,
        annual_budget: data.annual_budget ? { update: data.annual_budget } : undefined,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Region> {
    return await this.prisma.region.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof Region, any>>): Promise<Region | null> {
    const allowedKeys: (keyof Region)[] = ['institution_id', 'parent_region_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Region)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.region.findFirst({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Region, any>>): Promise<Region[]> {
    const allowedKeys: (keyof Region)[] = ['institution_id', 'parent_region_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Region)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.region.findMany({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }

  async findChildren(parentRegionId: string): Promise<Region[]> {
    return this.prisma.region.findMany({
      where: { parent_region_id: parentRegionId, is_deleted: false },
    });
  }

}
