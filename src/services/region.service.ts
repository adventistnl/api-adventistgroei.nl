import { Injectable } from '@nestjs/common';
import { RegionRepository } from '../repositories/region.repository';
import { RegionCreateDto, RegionUpdateDto } from '../dto/region.dto';
import { Region } from '@prisma/client';

@Injectable()
export class RegionService {
  constructor(private readonly regionRepository: RegionRepository) {}

  async createRegion(data: RegionCreateDto, userId: string): Promise<Region> {
    return await this.regionRepository.create(data, userId);
  }

  async updateRegion(regionId: string, data: RegionUpdateDto, userId: string): Promise<Region> {
    return await this.regionRepository.update(regionId, data, userId);
  }

  async deleteRegion(id: string, userId: string): Promise<Region> {
    return await this.regionRepository.softDelete(id, userId);
  }

  async getRegions(): Promise<Region[]> {
    return await this.regionRepository.findAll();
  }

  async getRegionById(id: string): Promise<Region | null> {
    return await this.regionRepository.findById(id);
  }

}
