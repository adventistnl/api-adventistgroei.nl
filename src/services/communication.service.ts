import { Injectable } from '@nestjs/common';
import { CommunicationRepository } from '../repositories/communication.repository';
import { Communication } from '../@generated/communication/communication.model';
import { CommunicationCreateDto, CommunicationUpdateDto } from '../dto/communication.dto';

@Injectable()
export class CommunicationService {
  constructor(private readonly communicationRepository: CommunicationRepository) {}

  async create(data: CommunicationCreateDto, userId: string): Promise<Communication> {
    return this.communicationRepository.create(data, userId);
  }

  async update(id: string, data: CommunicationUpdateDto, userId: string): Promise<Communication> {
    return this.communicationRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<Communication> {
    return this.communicationRepository.softDelete(id, userId);
  }

  async findById(id: string): Promise<Communication | null> {
    return this.communicationRepository.findById(id);
  }

  async findAll(): Promise<Communication[]> {
    return this.communicationRepository.findAll();
  }
}
