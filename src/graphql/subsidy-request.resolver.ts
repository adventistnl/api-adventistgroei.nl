import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { SubsidyRequestService } from '../services/subsidy-request.service';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto } from '../dto/subsidy-request.dto';

@Resolver(() => SubsidyRequest)
export class SubsidyRequestResolver {
  constructor(private readonly subsidyRequestService: SubsidyRequestService) {}

  @Query(() => [SubsidyRequest])
  async subsidyRequests(): Promise<SubsidyRequest[]> {
    return this.subsidyRequestService.findAll();
  }

  @Query(() => SubsidyRequest, { nullable: true })
  async subsidyRequest(@Args('id') id: string): Promise<SubsidyRequest | null> {
    return this.subsidyRequestService.findById(id);
  }

  @Mutation(() => SubsidyRequest)
  async createSubsidyRequest(
    @Args('data') data: SubsidyRequestCreateDto,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.create(data, context.userId);
  }

  @Mutation(() => SubsidyRequest)
  async updateSubsidyRequest(
    @Args('id') id: string,
    @Args('data') data: SubsidyRequestUpdateDto,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.update(id, data, context.userId);
  }

  @Mutation(() => SubsidyRequest)
  async deleteSubsidyRequest(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.delete(id, context.userId);
  }
  
}
