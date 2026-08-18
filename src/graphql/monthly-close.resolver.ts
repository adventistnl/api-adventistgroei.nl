import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { MonthlyCloseService } from '../services/monthly-close.service';
import { MonthlyCloseResult } from '../dto/monthly-close.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => MonthlyCloseResult)
@UseGuards(PermissionsGuard)
export class MonthlyCloseResolver {
  constructor(private readonly monthlyCloseService: MonthlyCloseService) {}

  /** R10 — manual-trigger path for admins/department leaders to close a month on demand
   * (testability, or to run the close early), scoped to the caller's own institution. */
  @Permission()
  @Mutation(() => MonthlyCloseResult)
  async triggerMonthlyClose(
    @Args('month') month: string,
    @Context() context: { userId: string },
  ): Promise<MonthlyCloseResult> {
    return this.monthlyCloseService.triggerMonthlyClose(context.userId, month);
  }
}
