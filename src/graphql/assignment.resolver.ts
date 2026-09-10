import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AssignmentService } from '../services/assignment.service';
import { Assignment } from '../@generated/assignment/assignment.model';
import { SetAssignmentInput } from '../dto/assignment.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => Assignment)
@UseGuards(PermissionsGuard)
export class AssignmentResolver {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Permission()
  @Query(() => [Assignment])
  async scheduleOverview(
    @Args('month') month: string,
    @Context() context: { userId: string },
  ): Promise<Assignment[]> {
    return this.assignmentService.scheduleOverview(context.userId, month);
  }

  @Permission()
  @Mutation(() => Assignment)
  async setAssignment(
    @Args('input') input: SetAssignmentInput,
    @Context() context: { userId: string },
  ): Promise<Assignment> {
    return this.assignmentService.setAssignment(input, context.userId);
  }

  @Permission()
  @Mutation(() => Assignment)
  async setAssignmentAny(
    @Args('input') input: SetAssignmentInput,
    @Context() context: { userId: string },
  ): Promise<Assignment> {
    return this.assignmentService.setAssignmentAny(input, context.userId);
  }
}
