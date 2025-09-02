import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { RegionService } from '../services/region.service';
import { RegionModel } from '../models/region.model';
import { Region } from '@prisma/client';
import { RegionCreateDto, RegionUpdateDto } from '../dto/region.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => RegionModel)
@UseGuards(PermissionsGuard)
export class RegionResolver {
  constructor(private readonly regionService: RegionService) {}

  @Permission()
  @Mutation(() => RegionModel)
  async createRegion(
    @Args('data') data: RegionCreateDto,
    @Context() context: { userId: string },
  ): Promise<Region> {
    const userId = context.userId;
    return await this.regionService.createRegion(data, userId);
  }

  @Permission()
  @Query(() => [RegionModel])
  async regions(): Promise<Region[]> {
    return await this.regionService.getRegions();
  }

  @Permission()
  @Query(() => RegionModel, { nullable: true })
  async region(@Args('id') id: string): Promise<Region | null> {
    return await this.regionService.getRegionById(id);
  }

  @Permission()
  @Mutation(() => RegionModel)
  async updateRegion(
    @Args('data') data: RegionUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Region> {
    const userId = context.userId;
    return await this.regionService.updateRegion(data, userId);
  }

  @Permission()
  @Mutation(() => RegionModel)
  async deleteRegion(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Region> {
    const userId = context.userId;
    return await this.regionService.deleteRegion(id, userId);
  }
}
