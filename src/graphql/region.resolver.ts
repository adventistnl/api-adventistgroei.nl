import { Resolver, Mutation, Args, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { RegionService } from '../services/region.service';
import { RegionModel, RegionKPIData } from '../models/region.model';
import { RegionCreateDto, RegionUpdateDto } from '../dto/region.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { Region } from '../@generated/region/region.model';
import { ChurchService } from '../services';
import { Church } from '../@generated/church/church.model';

@Resolver(() => Region)
@UseGuards(PermissionsGuard)
export class RegionResolver {
  constructor(private readonly regionService: RegionService,
    private readonly churchService: ChurchService,
  ) {}

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
  @Query(() => [Region])
  async regions(): Promise<Region[]> {
    return await this.regionService.getRegions();
  }

  @Permission()
  @Query(() => Region, { nullable: true })
  async region(@Args('id') id: string): Promise<Region | null> {
    return await this.regionService.getRegionById(id);
  }

  @Permission()
  @Mutation(() => RegionModel)
  async updateRegion(
    @Args('data') data: RegionUpdateDto,
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Region> {
    const userId = context.userId;
    return await this.regionService.updateRegion(id, data, userId);
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

  @ResolveField(() => [Church])
  async churches(@Parent() region: Region) {
    return this.churchService.findManyByFilters({ region_id: region.id });
  }

  @ResolveField(() => RegionKPIData)
  async kpiData(@Parent() region: Region): Promise<RegionKPIData> {
    return await this.regionService.getKPIData(region.id);
  }

}
