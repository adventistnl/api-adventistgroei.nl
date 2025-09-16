import { Resolver, Mutation, Args, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { RegionService } from '../services/region.service';
import { RegionModel } from '../models/region.model';
import { RegionCreateDto, RegionUpdateDto } from '../dto/region.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { Region } from 'src/@generated/region/region.model';
import { Institution } from 'src/@generated/institution/institution.model';
import { ChurchService, ContactService, InstitutionService } from 'src/services';
import { Contact } from 'src/@generated/contact/contact.model';
import { Church } from 'src/@generated/church/church.model';

@Resolver(() => Region)
@UseGuards(PermissionsGuard)
export class RegionResolver {
  constructor(private readonly regionService: RegionService,
    private readonly institutionService: InstitutionService,
    private readonly contactService: ContactService,
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

  @ResolveField(() => Institution)
  async institution(@Parent() region: Region) {
    return this.institutionService.getInstitutionById(region.institution_id);
  }

  @ResolveField(() => Contact, { nullable: true })
  async contact(@Parent() region: Region) {
    if (!region.contact_id) {
      return null;
    }
    return this.contactService.getContactById(region.contact_id);
  }

  @ResolveField(() => [Church])
  async churches(@Parent() region: Region) {
    return this.churchService.findManyByFilters({ region_id: region.id });
  }

  @ResolveField(() => [Region], { name: 'children' })
  async getChildren(@Parent() region: Region): Promise<Region[]> {
    return this.regionService.getChildren(region.id);
  }

  @ResolveField(() => Region, { name: 'parent_region', nullable: true })
  async getParentRegion(@Parent() region: Region): Promise<Region | null> {
    if (!region.parent_region_id) {
      return null;
    }
    return this.regionService.getParentRegion(region.parent_region_id);
  }

}
