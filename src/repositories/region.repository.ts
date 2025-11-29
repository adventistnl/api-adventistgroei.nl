import { Injectable } from '@nestjs/common';
import { RegionCreateDto, RegionUpdateDto } from '../dto/region.dto';
import { Region } from '@prisma/client';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { PrismaService } from '../services';
import { RegionKPIData } from '../models';

@Injectable()
export class RegionRepository {
      // ...existing code...
    /**
     * Busca uma região pelo nome da cidade (território).
     * Retorna a região que contém a cidade informada no JSON territory.
     */
    async findRegionByCity(city: string): Promise<Region | null> {
      const regions = await this.prisma.region.findMany({
        where: { is_deleted: false },
      });
      for (const region of regions) {
        if (!region.territory) continue;
        // territory: { [country]: { [state]: [city, ...] } }
        for (const country of Object.keys(region.territory)) {
          const states = region.territory[country];
          for (const state of Object.keys(states)) {
            const cities = states[state];
            if (cities.includes(city)) {
              return region;
            }
          }
        }
      }
      return null;
    }
  constructor(
    private readonly prisma: PrismaService,
    
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
    // Validação de unicidade de cidade
    if (data.territory) {
      const cities = this.extractCitiesFromTerritory(data.territory);
      for (const city of cities) {
        const region = await this.findRegionByCity(city);
        if (region) {
          throw new CustomGraphQLError(`Já existe uma região com a cidade '${city}'.`, ErrorCode.BAD_REQUEST, 400);
        }
      }
    }
    return await this.prisma.region.create({
      data: {
        description: data.description,
        name: data.name,
        territory: data.territory,
        color: data.color,
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(regionId: string, data: RegionUpdateDto, userId: string): Promise<Region> {
    await this.findById(regionId);
    // Validação de unicidade de cidade
    if (data.territory) {
      const cities = this.extractCitiesFromTerritory(data.territory);
      for (const city of cities) {
        const region = await this.findRegionByCity(city);
        if (region && region.id !== regionId) {
          throw new CustomGraphQLError(`Já existe uma região com a cidade '${city}'.`, ErrorCode.BAD_REQUEST, 400);
        }
      }
    }
    return await this.prisma.region.update({
      where: { id: regionId },
      data: {
        description: data.description,
        name: data.name,
        territory: data.territory,
        color: data.color,
        updated_by: userId,
      },
    });
  }

  /**
   * Extrai todas as cidades de um objeto territory
   */
  extractCitiesFromTerritory(territory: Record<string, Record<string, string[]>>): string[] {
    const cities: string[] = [];
    for (const country of Object.keys(territory)) {
      const states = territory[country];
      for (const state of Object.keys(states)) {
        const stateCities = states[state];
        cities.push(...stateCities);
      }
    }
    return cities;
  }

  async softDelete(id: string, userId: string): Promise<Region> {
    await this.findById(id);

    // Desconectar todas as igrejas ligadas à região
    await this.prisma.church.updateMany({
      where: { region_id: id },
      data: { region_id: null, updated_by: userId },
    });

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

  async getKPIData(regionId: string): Promise<RegionKPIData> {
    const region = await this.findById(regionId);

    const totalChurches = await this.prisma.church.count({
      where: { region_id: regionId, is_deleted: false },
    });

    const totalRegions = await this.prisma.region.count({
      where: { is_deleted: false },
    });

    const territories = (region?.territory as Record<string, Record<string, string[]>>) || {};
    let totalProvinces = 0;
    let totalCities = 0;

    for (const country of Object.keys(territories)) {
      const provinces = territories[country];
      totalProvinces += Object.keys(provinces).length;
      for (const province of Object.keys(provinces)) {
        totalCities += provinces[province].length;
      }
    }

    return {
      totalRegions,
      totalChurches,
      totalProvinces,
      totalCities,
    };
  }

}
