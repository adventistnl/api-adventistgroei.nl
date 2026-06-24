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

  /**
   * Creates a persisted notification for a specific user triggered by a project event.
   * Called by ProjectHistoryService.publishAll() for each collaborator.
   */
  async createForUser(params: {
    userId: string;
    institutionId: string;
    projectId?: string;
    type: string;
    title?: string;
    message: string;
    metadata?: any;
    actorUserId: string;
  }): Promise<Notification> {
    return this.prisma.notification.create({
      data: {
        user: { connect: { id: params.userId } },
        institution: { connect: { id: params.institutionId } },
        project: params.projectId ? { connect: { id: params.projectId } } : undefined,
        type: params.type,
        title: params.title,
        message: params.message,
        metadata: params.metadata,
        read_status: false,
        is_deleted: false,
        created_by: params.actorUserId,
        updated_by: params.actorUserId,
      },
    });
  }

  /**
   * Returns the 50 most recent non-deleted notifications for a user, newest first.
   */
  async findByUserId(userId: string, limit = 50): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      where: { user_id: userId, is_deleted: false },
      orderBy: { created_at: 'desc' },
      take: limit,
    });
  }

  /**
   * Marks a single notification as read (only if it belongs to the requesting user).
   */
  async markRead(id: string, userId: string): Promise<Notification> {
    return this.prisma.notification.update({
      where: { id, user_id: userId },
      data: { read_status: true, updated_by: userId },
    });
  }

  /**
   * Marks ALL unread notifications for a user as read.
   */
  async markAllRead(userId: string): Promise<{ count: number }> {
    return this.prisma.notification.updateMany({
      where: { user_id: userId, read_status: false, is_deleted: false },
      data: { read_status: true, updated_by: userId },
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
