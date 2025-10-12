import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ChurchCreateDto, ChurchUpdateDto } from '../dto/church.dto';
import { Church } from '@prisma/client';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { InstitutionRepository } from './institution.repository';
import { RegionRepository } from './region.repository';

@Injectable()
export class ChurchRepository {
  constructor(private readonly prisma: PrismaService,
    private readonly institutionRepository: InstitutionRepository,
    private readonly regionRepository: RegionRepository
  ) {}

  async create(data: ChurchCreateDto, userId: string): Promise<Church> {
    // Validação de relacionamentos
    await this.validateInstitution(data.institution_id);
    await this.validateRegion(data.region_id);

    let contactId: string | undefined = undefined;
    if (data.contact) {
      const contact = await this.prisma.contact.create({
        data: {
          ...data.contact,
          is_primary: true,
          created_by: userId,
          updated_by: userId,
        },
      });
      contactId = contact.id;
    }

    return await this.prisma.church.create({
      data: {
        institution: { connect: { id: data.institution_id } },
        region: { connect: { id: data.region_id } },
        name: data.name,
        type: data.type,
        contact:  contactId ? { connect: { id: contactId } } : undefined,
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(churchId: string, data: ChurchUpdateDto, userId: string): Promise<Church> {
    await this.findById(churchId)
    if (data.region_id) await this.regionRepository.findById(data.region_id)
    if (data.institution_id) await this.institutionRepository.findById(data.institution_id)
    return await this.prisma.church.update({
      where: { id: churchId },
      data: {
        institution: { connect: { id: data.institution_id } },
        type: data.type,
        name: data.name,
        region: { connect: { id: data.region_id } },
        contact: data.contact ? { update: { ...data.contact, updated_by: userId }} : undefined,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Church> {
    return await this.prisma.church.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findAll(): Promise<Church[]> {
    return await this.prisma.church.findMany({ where: { is_deleted: false } });
  }

  async findById(id: string): Promise<Church | null> {
    const church = await this.prisma.church.findUnique({
      where: { id },
    });

    if (!church || church.is_deleted) {
      throw new CustomGraphQLError('Church not found', ErrorCode.NOT_FOUND, 404);
    }

    return church;
  }

  async findOneByFilters(filters: Partial<Record<keyof Church, any>>): Promise<Church | null> {
    const allowedKeys: (keyof Church)[] = ['institution_id', 'region_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Church)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.church.findFirst({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Church, any>>): Promise<Church[]> {
    const allowedKeys: (keyof Church)[] = ['institution_id', 'region_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Church)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.church.findMany({
      where: {
        is_deleted: false,
        ...filters,
      },
      include: {annual_budgets: true, contact: true, departments: true, region: true, users: true },
    });
  }

  async validateInstitution(institutionId: string): Promise<void> {
    const institution = await this.prisma.institution.findUnique({ where: { id: institutionId } });
    if (!institution) {
      throw new CustomGraphQLError('Institution not found', ErrorCode.NOT_FOUND, 404);
    }
  }

  async validateRegion(regionId: string): Promise<void> {
    const region = await this.prisma.region.findUnique({ where: { id: regionId } });
    if (!region) {
      throw new CustomGraphQLError('Region not found', ErrorCode.NOT_FOUND, 404);
    }
  }
}
