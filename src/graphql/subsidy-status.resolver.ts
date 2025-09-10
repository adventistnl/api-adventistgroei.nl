import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { SubsidyStatusService } from '../services/subsidy-status.service';
import { SubsidyStatus } from '../@generated/subsidy-status/subsidy-status.model';
import { CreateSubsidyStatusDto, UpdateSubsidyStatusDto } from '../dto/subsidy-status.dto';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { UseGuards } from '@nestjs/common';
import { Permission } from 'src/middlewares';

@Resolver(() => SubsidyStatus)
export class SubsidyStatusResolver {
  constructor(private readonly service: SubsidyStatusService) {}

  @Query(() => [SubsidyStatus], { name: 'subsidyStatuses' })
  @Permission()
  @UseGuards(PermissionsGuard)
  async subsidyStatuses(@Args('filters', { nullable: true, type: () => String }) filters: any) {
    return this.service.findManyByFilters(filters || {});
  }

  @Query(() => SubsidyStatus, { name: 'subsidyStatus', nullable: true })
  @Permission()
  @UseGuards(PermissionsGuard)
  async subsidyStatus(@Args('id', { type: () => String }) id: string) {
    return this.service.findById(id);
  }

  @Mutation(() => SubsidyStatus)
  @Permission()
  @UseGuards(PermissionsGuard)
  async createSubsidyStatus(
    @Args('input') input: CreateSubsidyStatusDto,
    @Context('userId') userId: string,
  ) {
    return this.service.create(input, userId);
  }

  @Mutation(() => SubsidyStatus)
  @Permission()
  @UseGuards(PermissionsGuard)
  async updateSubsidyStatus(
    @Args('input') input: UpdateSubsidyStatusDto,
    @Context('userId') userId: string,
  ) {
    return this.service.update(input, userId);
  }

  @Mutation(() => SubsidyStatus)
  @Permission()
  @UseGuards(PermissionsGuard)
  async deleteSubsidyStatus(
    @Args('id', { type: () => String }) id: string,
    @Context('userId') userId: string,
  ) {
    return this.service.softDelete(id, userId);
  }
}
