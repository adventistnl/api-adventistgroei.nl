import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Notification } from '../@generated/notification/notification.model';
import { NotificationCreateDto, NotificationUpdateDto } from '../dto/notification.dto';

@Injectable()
export class NotificationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: NotificationCreateDto, userId: string): Promise<Notification> {
      const { institution_id, user_id, ...rest } = data;

    return this.prisma.notification.create({
      data: {
        ...rest,
        institution: { connect: { id: institution_id } },
        user: { connect: { id: user_id } },
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(id: string, data: NotificationUpdateDto, userId: string): Promise<Notification> {
    return this.prisma.notification.update({
      where: { id },
      data: {
        ...data,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Notification> {
    return this.prisma.notification.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findById(id: string): Promise<Notification | null> {
    return this.prisma.notification.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Notification, any>>): Promise<Notification[]> {
    const allowedKeys: (keyof Notification)[] = ['message', 'read_status', 'is_deleted', 'institution_id'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Notification)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.notification.findMany({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof Notification, any>>): Promise<Notification | null> {
    const allowedKeys: (keyof Notification)[] = ['message', 'read_status', 'is_deleted', 'institution_id'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Notification)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.notification.findFirst({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findAll(): Promise<Notification[]> {
    return this.prisma.notification.findMany({ where: { is_deleted: false } });
  }
}
