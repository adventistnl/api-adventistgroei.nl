import { Injectable } from '@nestjs/common';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto } from '../dto/subsidy-request.dto';

@Injectable()
export class SubsidyRequestService {
  constructor(private readonly subsidyRequestRepository: SubsidyRequestRepository) {}

  async create(data: SubsidyRequestCreateDto, userId: string): Promise<SubsidyRequest> {
    return this.subsidyRequestRepository.create(data, userId);
  }

  async update(id: string, data: SubsidyRequestUpdateDto, userId: string): Promise<SubsidyRequest> {
    return this.subsidyRequestRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<SubsidyRequest> {
    return this.subsidyRequestRepository.softDelete(id, userId);
  }

  async findById(id: string): Promise<SubsidyRequest | null> {
    return this.subsidyRequestRepository.findById(id);
  }

  async findAll(): Promise<SubsidyRequest[]> {
    return this.subsidyRequestRepository.findAll();
  }
}
