import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AssignmentRequestService } from '../services/assignment-request.service';
import { AssignmentRequest } from '../@generated/assignment-request/assignment-request.model';
import { PreacherRegionAccess } from '../@generated/preacher-region-access/preacher-region-access.model';
import { User } from '../@generated/user/user.model';
import { OpenSlotForPreacher } from '../dto/assignment-request.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => AssignmentRequest)
@UseGuards(PermissionsGuard)
export class AssignmentRequestResolver {
  constructor(private readonly requestService: AssignmentRequestService) {}

  @Permission()
  @Query(() => [AssignmentRequest])
  async myAssignmentRequests(@Context() context: { userId: string }): Promise<AssignmentRequest[]> {
    return this.requestService.myAssignmentRequests(context.userId);
  }

  @Permission()
  @Query(() => [OpenSlotForPreacher])
  async openSlotsForPreacher(
    @Args('month') month: string,
    @Context() context: { userId: string },
  ): Promise<OpenSlotForPreacher[]> {
    return this.requestService.openSlotsForPreacher(context.userId, month);
  }

  @Permission()
  @Query(() => [User])
  async eligiblePreachersForSlot(
    @Args('church_id') churchId: string,
    @Args('date') date: Date,
    @Context() context: { userId: string },
  ): Promise<User[]> {
    return this.requestService.eligiblePreachersForSlot(churchId, date, context.userId);
  }

  @Permission()
  @Mutation(() => AssignmentRequest)
  async requestAssignment(
    @Args('church_id') churchId: string,
    @Args('date') date: Date,
    @Context() context: { userId: string },
  ): Promise<AssignmentRequest> {
    return this.requestService.requestAssignment(churchId, date, context.userId);
  }

  @Permission()
  @Mutation(() => AssignmentRequest)
  async inviteToAssignment(
    @Args('church_id') churchId: string,
    @Args('date') date: Date,
    @Args('user_id') userId: string,
    @Args('template_id', { nullable: true, type: () => String }) templateId: string | undefined,
    @Context() context: { userId: string },
  ): Promise<AssignmentRequest> {
    return this.requestService.inviteToAssignment(churchId, date, userId, templateId, context.userId);
  }

  @Permission()
  @Mutation(() => AssignmentRequest)
  async inviteToAssignmentAny(
    @Args('church_id') churchId: string,
    @Args('date') date: Date,
    @Args('user_id') userId: string,
    @Args('template_id', { nullable: true, type: () => String }) templateId: string | undefined,
    @Context() context: { userId: string },
  ): Promise<AssignmentRequest> {
    return this.requestService.inviteToAssignmentAny(churchId, date, userId, templateId, context.userId);
  }

  @Permission()
  @Mutation(() => AssignmentRequest)
  async respondToAssignmentRequest(
    @Args('id') id: string,
    @Args('accept') accept: boolean,
    @Context() context: { userId: string },
  ): Promise<AssignmentRequest> {
    return this.requestService.respondToAssignmentRequest(id, accept, context.userId);
  }

  @Permission()
  @Mutation(() => AssignmentRequest)
  async respondToAssignmentRequestAny(
    @Args('id') id: string,
    @Args('accept') accept: boolean,
    @Context() context: { userId: string },
  ): Promise<AssignmentRequest> {
    return this.requestService.respondToAssignmentRequestAny(id, accept, context.userId);
  }

  @Permission()
  @Query(() => [PreacherRegionAccess])
  async myPreacherRegionAccess(@Context() context: { userId: string }): Promise<PreacherRegionAccess[]> {
    return this.requestService.myRegionAccess(context.userId);
  }

  @Permission()
  @Mutation(() => PreacherRegionAccess)
  async grantPreacherRegionAccess(
    @Args('user_id') userId: string,
    @Args('region_id') regionId: string,
    @Context() context: { userId: string },
  ): Promise<PreacherRegionAccess> {
    return this.requestService.grantRegionAccess(userId, regionId, context.userId);
  }

  @Permission()
  @Mutation(() => Boolean)
  async revokePreacherRegionAccess(@Args('id') id: string): Promise<boolean> {
    return this.requestService.revokeRegionAccess(id);
  }
}
