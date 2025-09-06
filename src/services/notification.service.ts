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
