import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AvailabilityService } from '../services/availability.service';
import { Availability } from '../@generated/availability/availability.model';
import { SetAvailabilityInput, SetAvailabilityBulkInput } from '../dto/availability.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => Availability)
@UseGuards(PermissionsGuard)
export class AvailabilityResolver {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Permission()
  @Query(() => [Availability])
  async myAvailability(
    @Args('month') month: string,
    @Context() context: { userId: string },
  ): Promise<Availability[]> {
    return this.availabilityService.myAvailability(context.userId, month);
  }

  @Permission()
  @Mutation(() => Availability)
  async setAvailability(
    @Args('input') input: SetAvailabilityInput,
    @Context() context: { userId: string },
  ): Promise<Availability> {
    return this.availabilityService.setAvailability(input, context.userId);
  }

  @Permission()
  @Mutation(() => [Availability])
  async setAvailabilityBulk(
    @Args('input') input: SetAvailabilityBulkInput,
    @Context() context: { userId: string },
  ): Promise<Availability[]> {
    return this.availabilityService.setAvailabilityBulk(input, context.userId);
  }
}
