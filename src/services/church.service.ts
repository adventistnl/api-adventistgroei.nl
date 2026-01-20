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

  async updateChurch(churchId: string, data: ChurchUpdateDto, userId: string): Promise<Church> {
    return await this.churchRepository.update(churchId, data, userId);
  }

  async deleteChurch(churchId: string, userId: string): Promise<Church> {
    // Validação de existência
    await this.churchRepository.findById(churchId);

    return await this.churchRepository.softDelete(churchId, userId);
  }

  async getChurches(institutionId?: string): Promise<Church[]> {
    if (institutionId) {
      return await this.churchRepository.findManyByFilters({ institution_id: institutionId });
    }
    return await this.churchRepository.findAll();
  }

  async getChurchById(id: string): Promise<Church | null> {
    return await this.churchRepository.findById(id);
  }

  async getChurchByIdSafe(id: string): Promise<Church | null> {
    return await this.churchRepository.findByIdSafe(id);
  }
  
  async findManyByFilters(filters: Partial<Record<keyof Church, any>>): Promise<Church[]> {
    return await this.churchRepository.findManyByFilters(filters);
  }

  async getKPIData(churchId: string): Promise<{ totalMembers: number; totalDepartments: number; totalSubsidyRequests: number; totalBudget: number; totalUsedBudget: number; budgetUtilization: number }> {
    return await this.churchRepository.getKPIData(churchId);
  }

  async getUsersByChurchId(churchId: string): Promise<any[]> {
    return this.churchRepository.getUsersByChurchId(churchId);
  }

  async getChurchActivityTimeline(institution_id?: string, selectedYear?: number): Promise<any[]> {
    return this.churchRepository.getChurchActivityTimeline(institution_id, selectedYear);
  }
}
