import { Injectable } from '@nestjs/common';
import { InstitutionPosition } from '@prisma/client';
import { InstitutionPositionRepository } from '../repositories/institution-position.repository';
import { InstitutionPositionCreateDto, InstitutionPositionUpdateDto } from '../dto/institution-position.dto';

@Injectable()
export class InstitutionPositionService {
  constructor(private readonly institutionPositionRepository: InstitutionPositionRepository) {}

  async getPositions(institution_id: string): Promise<InstitutionPosition[]> {
    return this.institutionPositionRepository.findAll(institution_id);
  }

  async getPositionById(institutionPositionId: string): Promise<InstitutionPosition> {
    return this.institutionPositionRepository.findById(institutionPositionId);
  }

  async createPosition(data: InstitutionPositionCreateDto, userId: string): Promise<InstitutionPosition> {
    return this.institutionPositionRepository.create(data, userId);
  }

  async updatePosition(
    institutionPositionId: string,
    data: InstitutionPositionUpdateDto,
    userId: string,
  ): Promise<InstitutionPosition> {
    return this.institutionPositionRepository.update(institutionPositionId, data, userId);
  }

  async deletePosition(institutionPositionId: string, userId: string): Promise<InstitutionPosition> {
    return this.institutionPositionRepository.delete(institutionPositionId, userId);
  }
}
