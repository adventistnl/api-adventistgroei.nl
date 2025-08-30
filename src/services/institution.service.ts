import { Injectable } from '@nestjs/common';
import { InstitutionRepository } from '../repositories/institution.repository';
import { InstitutionCreateDto } from '../dto/institution-create.dto';
import { Institution } from '@prisma/client';

@Injectable()
export class InstitutionService {
  constructor(private readonly institutionRepository: InstitutionRepository) {}

  async createInstitution(
    data: InstitutionCreateDto,
    userId: string,
  ): Promise<Institution> {
    return await this.institutionRepository.create(data, userId);
  }

  async getInstitutions(): Promise<Institution[]> {
    return await this.institutionRepository.findAll();
  }

  async getInstitutionById(id: string): Promise<Institution | null> {
    return await this.institutionRepository.findById(id);
  }
}
