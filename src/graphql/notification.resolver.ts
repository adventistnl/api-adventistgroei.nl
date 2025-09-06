import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../@generated/notification/notification.model';
import { NotificationCreateDto, NotificationUpdateDto } from '../dto/notification.dto';

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

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
