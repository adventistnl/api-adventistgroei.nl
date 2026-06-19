import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/middlewares/permissions.guard';
import { Permission } from 'src/middlewares';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../@generated/notification/notification.model';
import { NotificationCreateDto, NotificationUpdateDto } from '../dto/notification.dto';
import { Int } from '@nestjs/graphql';
import { ObjectType, Field } from '@nestjs/graphql';

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
   * Used by the frontend on mount to hydrate the notification sidebar (catch-up).
   */
  @Query(() => [Notification], { name: 'myNotifications' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async myNotifications(
    @Context() context: { userId: string },
  ): Promise<Notification[]> {
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
   * Marks a single notification as read. Only succeeds if it belongs to the authenticated user.
   */
  @Mutation(() => Notification, { name: 'markNotificationRead' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async markNotificationRead(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Notification> {
    return this.notificationService.markRead(id, context.userId);
  }

  /**
   * Marks ALL notifications of the authenticated user as read.
   * Called when user clicks "Mark all as read" in the sidebar.
   */
  @Mutation(() => MarkAllReadResult, { name: 'markAllNotificationsRead' })
  @UseGuards(PermissionsGuard)
  @Permission()
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
