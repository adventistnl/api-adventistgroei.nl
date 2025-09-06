import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { CommunicationService } from '../services/communication.service';
import { Communication } from '../@generated/communication/communication.model';
import { CommunicationCreateDto, CommunicationUpdateDto } from '../dto/communication.dto';

@Resolver(() => Communication)
export class CommunicationResolver {
  constructor(private readonly communicationService: CommunicationService) {}

  @Query(() => [Communication])
  async communications(): Promise<Communication[]> {
    return this.communicationService.findAll();
  }

  @Query(() => Communication, { nullable: true })
  async communication(@Args('id') id: string): Promise<Communication | null> {
    return this.communicationService.findById(id);
  }

  @Mutation(() => Communication)
  async createCommunication(
    @Args('data') data: CommunicationCreateDto,
    @Context() context: { userId: string },
  ): Promise<Communication> {
    return this.communicationService.create(data, context.userId);
  }

  @Mutation(() => Communication)
  async updateCommunication(
    @Args('id') id: string,
    @Args('data') data: CommunicationUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Communication> {
    return this.communicationService.update(id, data, context.userId);
  }

  @Mutation(() => Communication)
  async deleteCommunication(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Communication> {
    return this.communicationService.delete(id, context.userId);
  }
}
