import { Injectable } from '@nestjs/common';
import { DirectMessageRepository } from '../repositories/direct-message.repository';
import { DirectMessage } from '../@generated/direct-message/direct-message.model';
import { DirectMessageCreateDto, DirectMessageUpdateDto } from '../dto/direct-message.dto';

@Injectable()
export class DirectMessageService {
  constructor(private readonly directMessageRepository: DirectMessageRepository) {}

  async create(data: DirectMessageCreateDto, userId: string): Promise<DirectMessage> {
    return this.directMessageRepository.create(data, userId);
  }

  async update(id: string, data: DirectMessageUpdateDto, userId: string): Promise<DirectMessage> {
    return this.directMessageRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<DirectMessage> {
    return this.directMessageRepository.softDelete(id, userId);
  }

  async findById(id: string): Promise<DirectMessage | null> {
    return this.directMessageRepository.findById(id);
  }

  async findAll(): Promise<DirectMessage[]> {
    return this.directMessageRepository.findAll();
  }
}
