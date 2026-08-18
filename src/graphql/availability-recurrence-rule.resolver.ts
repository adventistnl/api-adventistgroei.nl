import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AvailabilityRecurrenceRuleService } from '../services/availability-recurrence-rule.service';
import { AvailabilityRecurrenceRule } from '../@generated/availability-recurrence-rule/availability-recurrence-rule.model';
import { SetAvailabilityRecurrenceRuleInput } from '../dto/availability-recurrence-rule.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => AvailabilityRecurrenceRule)
@UseGuards(PermissionsGuard)
export class AvailabilityRecurrenceRuleResolver {
  constructor(private readonly ruleService: AvailabilityRecurrenceRuleService) {}

  @Permission()
  @Query(() => [AvailabilityRecurrenceRule])
  async myAvailabilityRecurrenceRules(
    @Context() context: { userId: string },
  ): Promise<AvailabilityRecurrenceRule[]> {
    return this.ruleService.myRules(context.userId);
  }

  @Permission()
  @Mutation(() => AvailabilityRecurrenceRule)
  async setAvailabilityRecurrenceRule(
    @Args('input') input: SetAvailabilityRecurrenceRuleInput,
    @Context() context: { userId: string },
  ): Promise<AvailabilityRecurrenceRule> {
    return this.ruleService.setRule(input, context.userId);
  }

  @Permission()
  @Mutation(() => Boolean)
  async deleteAvailabilityRecurrenceRule(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<boolean> {
    return this.ruleService.deleteRule(id, context.userId);
  }
}
