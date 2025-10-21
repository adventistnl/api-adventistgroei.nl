import { Injectable } from '@nestjs/common';
import { RegionCreateDto, RegionUpdateDto } from '../dto/region.dto';
import { Region } from '@prisma/client';
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
    return await this.prisma.region.create({
      data: {
        description: data.description,
        name: data.name,
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(regionId: string, data: RegionUpdateDto, userId: string): Promise<Region> {
    await this.findById(regionId);
    return await this.prisma.region.update({
      where: { id: regionId },
      data: {
        description: data.description,
        name: data.name,
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
    const allowedKeys: (keyof Region)[] = ['name', 'is_deleted'];

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

  async findManyByFilters(filters: Partial<Record<keyof Region, any>>) {
    const allowedKeys: (keyof Region)[] = ['name', 'is_deleted'];

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
      include: { churches: true},
    });
  }

}
