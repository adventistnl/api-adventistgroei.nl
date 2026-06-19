import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../@generated/notification/notification.model';
import { NotificationCreateDto, NotificationUpdateDto } from '../dto/notification.dto';
import { Int, ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class MarkAllReadResult {
  @Field(() => Int)
  count: number;
}

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  /**
   * Returns the 50 most recent notifications for the authenticated user.
   * No specific system permission required — only a valid auth token (context.userId).
   */
  @Query(() => [Notification], { name: 'myNotifications' })
  async myNotifications(
    @Context() context: { userId: string },
  ): Promise<Notification[]> {
    if (!context.userId) return [];
    return this.notificationService.findByUserId(context.userId);
  }

  @Query(() => [Notification])
  async notifications(): Promise<Notification[]> {
    return this.notificationService.findAll();
  }

  @Query(() => Notification, { nullable: true })
  async notification(@Args('id') id: string): Promise<Notification | null> {
    return this.notificationService.findById(id);
  }

  @Mutation(() => Notification)
  async createNotification(
    @Args('data') data: NotificationCreateDto,
    @Context() context: { userId: string },
  ): Promise<Notification> {
    return this.notificationService.create(data, context.userId);
  }

  /**
   * Marks a single notification as read.
   * Security enforced by userId filter in repository (cannot mark others' notifications).
   */
  @Mutation(() => Notification, { name: 'markNotificationRead' })
  async markNotificationRead(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Notification> {
    return this.notificationService.markRead(id, context.userId);
  }

  /**
   * Marks ALL notifications of the authenticated user as read.
   */
  @Mutation(() => MarkAllReadResult, { name: 'markAllNotificationsRead' })
  async markAllNotificationsRead(
    @Context() context: { userId: string },
  ): Promise<{ count: number }> {
    return this.notificationService.markAllRead(context.userId);
  }

  @Mutation(() => Notification)
  async updateNotification(
    @Args('id') id: string,
    @Args('data') data: NotificationUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Notification> {
    return this.notificationService.update(id, data, context.userId);
  }

  @Mutation(() => Notification)
  async deleteNotification(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Notification> {
    return this.notificationService.delete(id, context.userId);
  }
}
