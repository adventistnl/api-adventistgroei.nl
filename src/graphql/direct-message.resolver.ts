import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { DirectMessageService } from '../services/direct-message.service';
import { DirectMessage } from '../@generated/direct-message/direct-message.model';
import { DirectMessageCreateDto, DirectMessageUpdateDto } from '../dto/direct-message.dto';

@Resolver(() => DirectMessage)
export class DirectMessageResolver {
  constructor(private readonly directMessageService: DirectMessageService) {}

  @Query(() => [DirectMessage])
  async directMessages(): Promise<DirectMessage[]> {
    return this.directMessageService.findAll();
  }

  @Query(() => DirectMessage, { nullable: true })
  async directMessage(@Args('id') id: string): Promise<DirectMessage | null> {
    return this.directMessageService.findById(id);
  }

  @Mutation(() => DirectMessage)
  async createDirectMessage(
    @Args('data') data: DirectMessageCreateDto,
    @Context() context: { userId: string },
  ): Promise<DirectMessage> {
    return this.directMessageService.create(data, context.userId);
  }

  @Mutation(() => DirectMessage)
  async updateDirectMessage(
    @Args('id') id: string,
    @Args('data') data: DirectMessageUpdateDto,
    @Context() context: { userId: string },
  ): Promise<DirectMessage> {
    return this.directMessageService.update(id, data, context.userId);
  }

  @Mutation(() => DirectMessage)
  async deleteDirectMessage(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<DirectMessage> {
    return this.directMessageService.delete(id, context.userId);
  }
}
