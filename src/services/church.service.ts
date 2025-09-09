import { Injectable } from '@nestjs/common';
import { ChurchRepository } from '../repositories/church.repository';
import { ChurchCreateDto, ChurchUpdateDto } from '../dto/church.dto';
import { Church } from '@prisma/client';

@Injectable()
export class ChurchService {
  constructor(private readonly churchRepository: ChurchRepository) {}

  async createChurch(data: ChurchCreateDto, userId: string): Promise<Church> {
    return await this.churchRepository.create(data, userId);
  }

  async updateChurch(data: ChurchUpdateDto, userId: string): Promise<Church> {
    return await this.churchRepository.update(data, userId);
  }

  async deleteChurch(id: string, userId: string): Promise<Church> {
    return await this.churchRepository.softDelete(id, userId);
  }

  async getChurches(): Promise<Church[]> {
    return await this.churchRepository.findAll();
  }

  async getChurchById(id: string): Promise<Church | null> {
    return await this.churchRepository.findById(id);
  }
  
  async findManyByFilters(filters: Partial<Record<keyof Church, any>>): Promise<Church[]> {
    return await this.churchRepository.findManyByFilters(filters);
  }
}
