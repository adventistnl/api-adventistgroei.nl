import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GapReportService } from '../services/gap-report.service';
import { GapReport } from '../dto/gap-report.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => GapReport)
@UseGuards(PermissionsGuard)
export class GapReportResolver {
  constructor(private readonly gapReportService: GapReportService) {}

  @Permission()
  @Query(() => GapReport)
  async gapReport(
    @Args('month') month: string,
    @Context() context: { userId: string },
  ): Promise<GapReport> {
    return this.gapReportService.gapReport(context.userId, month);
  }
}
