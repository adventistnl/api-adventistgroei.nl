import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { DirectMessage } from '../@generated/direct-message/direct-message.model';
import { DirectMessageCreateDto, DirectMessageUpdateDto } from '../dto/direct-message.dto';

@Injectable()
export class DirectMessageRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: DirectMessageCreateDto, userId: string): Promise<DirectMessage> {
    return this.prisma.directMessage.create({
      data: {
        ...data,
        institution_id: data.institution_id,
        title: data.title,
        status: data.status,
        sent_at: new Date(),
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(id: string, data: DirectMessageUpdateDto, userId: string): Promise<DirectMessage> {
    return this.prisma.directMessage.update({
      where: { id },
      data: {
        ...data,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<DirectMessage> {
    return this.prisma.directMessage.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findById(id: string): Promise<DirectMessage | null> {
    return this.prisma.directMessage.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof DirectMessage, any>>): Promise<DirectMessage[]> {
    const allowedKeys: (keyof DirectMessage)[] = ['institution_id', 'content', 'sender_id', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof DirectMessage)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.directMessage.findMany({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof DirectMessage, any>>): Promise<DirectMessage | null> {
    const allowedKeys: (keyof DirectMessage)[] = ['institution_id', 'content', 'sender_id', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof DirectMessage)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.directMessage.findFirst({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findAll(): Promise<DirectMessage[]> {
    return this.prisma.directMessage.findMany({ where: { is_deleted: false } });
  }
}
