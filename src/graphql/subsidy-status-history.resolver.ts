import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { SubsidyStatusHistory } from 'src/@generated/subsidy-status-history/subsidy-status-history.model';
import { SubsidyStatusHistoryService } from 'src/services/subsidy-status-history.service';
import { PermissionsGuard } from 'src/middlewares/permissions.guard';
import { Permission } from 'src/middlewares/permissions.decorator';

@Resolver(() => SubsidyStatusHistory)
export class SubsidyStatusHistoryResolver {
  constructor(
    private readonly subsidyStatusHistoryService: SubsidyStatusHistoryService,
  ) {}

  @Query(() => [SubsidyStatusHistory])
  @UseGuards(PermissionsGuard)
  @Permission()
  async getSubsidyStatusHistory(
    @Args('subsidyRequestId') subsidyRequestId: string,
  ): Promise<SubsidyStatusHistory[]> {
    return this.subsidyStatusHistoryService.getHistoryBySubsidyRequest(subsidyRequestId);
  }
}
