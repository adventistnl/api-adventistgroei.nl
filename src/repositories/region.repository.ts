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
    const regions = await this.prisma.region.findMany({
      where: { is_deleted: false }
    });
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

    const createdRegion = await this.prisma.region.create({
      data: {
        description: data.description,
        name: data.name,
        territory: data.territory,
        color: data.color,
        created_by: userId,
        updated_by: userId,
      },
    });

    // Match churches with the new region territory
    if (data.territory) {
      await this.matchChurchesToRegion(createdRegion.id, data.territory, userId);
    }

    return createdRegion;
  }

  async update(regionId: string, data: RegionUpdateDto, userId: string): Promise<Region> {
    const existingRegion = await this.findById(regionId);

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

    const updatedRegion = await this.prisma.region.update({
      where: { id: regionId },
      data: {
        description: data.description,
        name: data.name,
        territory: data.territory,
        color: data.color,
        updated_by: userId,
      },
    });

    // Handle territory changes
    if (data.territory !== undefined) {
      const oldTerritory = existingRegion!.territory as Record<string, Record<string, string[]>> | null;
      const newTerritory = data.territory;

      // If territory changed, update church-region matches
      if (JSON.stringify(oldTerritory) !== JSON.stringify(newTerritory)) {
        // Find locations that were removed
        const removedLocations = this.findRemovedLocations(oldTerritory, newTerritory);

        // Find locations that were added
        const addedLocations = this.findAddedLocations(oldTerritory, newTerritory);

        // Disconnect churches from removed locations
        if (removedLocations.length > 0) {
          await this.disconnectChurchesFromRemovedLocations(regionId, removedLocations, userId);
        }

        // Connect churches to new locations
        if (newTerritory && addedLocations.length > 0) {
          await this.matchChurchesToRegion(regionId, newTerritory, userId, addedLocations);
        }
      }
    }

    return updatedRegion;
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

  /**
   * Match churches to a region based on territory
   * Connects churches that are in the region's territory
   */
  private async matchChurchesToRegion(
    regionId: string,
    territory: Record<string, Record<string, string[]>>,
    userId: string,
    onlyLocations?: Array<{ country: string; state: string; city: string }>
  ): Promise<void> {
    // Build location filter conditions
    const locationConditions: Array<{
      contact: {
        country: string;
        state: string;
        city: string;
      };
    }> = [];

    for (const country of Object.keys(territory)) {
      const states = territory[country];
      for (const state of Object.keys(states)) {
        const cities = states[state];
        for (const city of cities) {
          // If onlyLocations is provided, only process those locations
          if (onlyLocations && onlyLocations.length > 0) {
            const matchesFilter = onlyLocations.some(
              loc => loc.country === country && loc.state === state && loc.city === city
            );
            if (!matchesFilter) continue;
          }

          locationConditions.push({
            contact: {
              country,
              state,
              city,
            },
          });
        }
      }
    }

    if (locationConditions.length === 0) return;

    // Find all churches that match any of these locations
    const churchesToConnect = await this.prisma.church.findMany({
      where: {
        is_deleted: false,
        OR: locationConditions,
        region_id: null, // Only connect churches that don't have a region yet
      },
      select: { id: true },
    });

    // Connect these churches to the region
    if (churchesToConnect.length > 0) {
      await this.prisma.church.updateMany({
        where: {
          id: { in: churchesToConnect.map(c => c.id) },
        },
        data: {
          region_id: regionId,
          updated_by: userId,
        },
      });
    }
  }

  /**
   * Find locations that were removed from territory
   */
  private findRemovedLocations(
    oldTerritory: Record<string, Record<string, string[]>> | null,
    newTerritory: Record<string, Record<string, string[]>> | null
  ): Array<{ country: string; state: string; city: string }> {
    const removed: Array<{ country: string; state: string; city: string }> = [];

    if (!oldTerritory) return removed;

    for (const country of Object.keys(oldTerritory)) {
      const oldStates = oldTerritory[country];
      for (const state of Object.keys(oldStates)) {
        const oldCities = oldStates[state];
        for (const city of oldCities) {
          // Check if this location exists in new territory
          const existsInNew = newTerritory?.[country]?.[state]?.includes(city);
          if (!existsInNew) {
            removed.push({ country, state, city });
          }
        }
      }
    }

    return removed;
  }

  /**
   * Find locations that were added to territory
   */
  private findAddedLocations(
    oldTerritory: Record<string, Record<string, string[]>> | null,
    newTerritory: Record<string, Record<string, string[]>> | null
  ): Array<{ country: string; state: string; city: string }> {
    const added: Array<{ country: string; state: string; city: string }> = [];

    if (!newTerritory) return added;

    for (const country of Object.keys(newTerritory)) {
      const newStates = newTerritory[country];
      for (const state of Object.keys(newStates)) {
        const newCities = newStates[state];
        for (const city of newCities) {
          // Check if this location exists in old territory
          const existsInOld = oldTerritory?.[country]?.[state]?.includes(city);
          if (!existsInOld) {
            added.push({ country, state, city });
          }
        }
      }
    }

    return added;
  }

  /**
   * Disconnect churches from removed locations
   */
  private async disconnectChurchesFromRemovedLocations(
    regionId: string,
    removedLocations: Array<{ country: string; state: string; city: string }>,
    userId: string
  ): Promise<void> {
    if (removedLocations.length === 0) return;

    // Build location filter conditions
    const locationConditions = removedLocations.map(loc => ({
      contact: {
        country: loc.country,
        state: loc.state,
        city: loc.city,
      },
    }));

    // Find churches in this region that match the removed locations
    const churchesToDisconnect = await this.prisma.church.findMany({
      where: {
        is_deleted: false,
        region_id: regionId,
        OR: locationConditions,
      },
      select: { id: true },
    });

    // Disconnect these churches from the region
    if (churchesToDisconnect.length > 0) {
      await this.prisma.church.updateMany({
        where: {
          id: { in: churchesToDisconnect.map(c => c.id) },
        },
        data: {
          region_id: null,
          updated_by: userId,
        },
      });
    }
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
