import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';
import { Notification } from '../@generated/notification/notification.model';
import { NotificationCreateDto, NotificationUpdateDto } from '../dto/notification.dto';

@Injectable()
export class NotificationService {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async create(data: NotificationCreateDto, userId: string): Promise<Notification> {
    return this.notificationRepository.create(data, userId);
  }

  /**
   * Persists a notification for a specific user triggered by a project history event.
   * Called by ProjectHistoryService for each collaborator that should be notified.
   */
  async createForUser(params: {
    userId: string;
    institutionId: string;
    projectId?: string;
    type: string;
    title?: string;
    message: string;
    actorUserId: string;
  }): Promise<Notification> {
    return this.notificationRepository.createForUser(params);
  }

  /**
   * Returns the 50 most recent notifications for the authenticated user.
   */
  async findByUserId(userId: string): Promise<Notification[]> {
    return this.notificationRepository.findByUserId(userId);
  }

  /**
   * Marks a single notification as read for the authenticated user.
   */
  async markRead(id: string, userId: string): Promise<Notification> {
    return this.notificationRepository.markRead(id, userId);
  }

  /**
   * Marks all notifications for the authenticated user as read.
   */
  async markAllRead(userId: string): Promise<{ count: number }> {
    return this.notificationRepository.markAllRead(userId);
  }

  async update(id: string, data: NotificationUpdateDto, userId: string): Promise<Notification> {
    return this.notificationRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<Notification> {
    return this.notificationRepository.softDelete(id, userId);
  }

  async findById(id: string): Promise<Notification | null> {
    return this.notificationRepository.findById(id);
  }

  async findAll(): Promise<Notification[]> {
    return this.notificationRepository.findAll();
  }
}
