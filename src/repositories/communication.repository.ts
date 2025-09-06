import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Communication } from '../@generated/communication/communication.model';
import { CommunicationCreateDto, CommunicationUpdateDto } from '../dto/communication.dto';

@Injectable()
export class CommunicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CommunicationCreateDto, userId: string): Promise<Communication> {
    const {institution_id, author_id, ...rest} = data

    return this.prisma.communication.create({
      data: {
        ...rest,
        schedule_at: new Date(),
        published_at: new Date(),
        institution: { connect: { id: institution_id } },
        author: { connect: { id: author_id } },
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(id: string, data: CommunicationUpdateDto, userId: string): Promise<Communication> {
    return this.prisma.communication.update({
      where: { id },
      data: {
        ...data,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Communication> {
    return this.prisma.communication.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findById(id: string): Promise<Communication | null> {
    return this.prisma.communication.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Communication, any>>): Promise<Communication[]> {
    const allowedKeys: (keyof Communication)[] = ['title', 'content', 'is_deleted', 'institution_id'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Communication)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.communication.findMany({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof Communication, any>>): Promise<Communication | null> {
    const allowedKeys: (keyof Communication)[] = ['title', 'content', 'is_deleted', 'institution_id'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Communication)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.communication.findFirst({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findAll(): Promise<Communication[]> {
    return this.prisma.communication.findMany({ where: { is_deleted: false } });
  }
}
