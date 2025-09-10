import { Injectable } from '@nestjs/common';
import { SubsidyStatusRepository } from '../repositories/subsidy-status.repository';
import { SubsidyStatus } from '../@generated/subsidy-status/subsidy-status.model';
import { CreateSubsidyStatusDto, UpdateSubsidyStatusDto } from '../dto/subsidy-status.dto';
@Injectable()
export class SubsidyStatusService {
  constructor(private readonly repository: SubsidyStatusRepository) {}

  async create(input: CreateSubsidyStatusDto, userId: string): Promise<SubsidyStatus> {
      return await this.repository.create(input, userId);

  }

  async findById(id: string): Promise<SubsidyStatus | null> {
    return this.repository.findById(id);
  }

  async findManyByFilters(filters: Partial<Record<string, any>>): Promise<SubsidyStatus[]> {
    return this.repository.findManyByFilters(filters);
  }

  async update(input: UpdateSubsidyStatusDto, userId: string): Promise<SubsidyStatus> {
      return await this.repository.update(input.id, {
        ...input,
        updated_by: userId,
      });
  }

  async softDelete(id: string, userId: string): Promise<SubsidyStatus> {
      return await this.repository.softDelete(id, userId);
  }
}
