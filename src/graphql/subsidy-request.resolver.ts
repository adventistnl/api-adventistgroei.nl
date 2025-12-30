import { Resolver, Query, Mutation, Args, Context, Float } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { SubsidyRequestService } from '../services/subsidy-request.service';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto } from '../dto/subsidy-request.dto';
import { Permission } from '../middlewares';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => SubsidyRequest)
export class SubsidyRequestResolver {
  constructor(private readonly subsidyRequestService: SubsidyRequestService) {}

  @Query(() => [SubsidyRequest], { name: 'subsidyRequests' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyRequests(
    @Args('project_id', { type: () => String, nullable: true }) projectId?: string,
  ): Promise<SubsidyRequest[]> {
    if (projectId) {
      return this.subsidyRequestService.findByProjectId(projectId);
    }
    return this.subsidyRequestService.findAll();
  }

  @Query(() => SubsidyRequest, { nullable: true })
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyRequest(@Args('id') id: string): Promise<SubsidyRequest | null> {
    return this.subsidyRequestService.findById(id);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async createSubsidyRequest(
    @Args('data') data: SubsidyRequestCreateDto,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.create(data, context.userId);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async updateSubsidyRequest(
    @Args('id') id: string,
    @Args('data') data: SubsidyRequestUpdateDto,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.update(id, data, context.userId);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async deleteSubsidyRequest(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.delete(id, context.userId);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async approveSubsidyRequest(
    @Args('id') id: string,
    @Args('approved_amount', { type: () => Float }) approvedAmount: number,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.approve(id, approvedAmount, context.userId);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async rejectSubsidyRequest(
    @Args('id') id: string,
    @Args('rejection_reason') rejectionReason: string,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.reject(id, rejectionReason, context.userId);
  }
}
