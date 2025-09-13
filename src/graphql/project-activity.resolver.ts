import { Resolver, Query, Mutation, Args, Context, ID } from '@nestjs/graphql';
import { ProjectActivityService } from '../services/project-activity.service';
import { CreateProjectActivityInput, UpdateProjectActivityInput } from '../dto/project-activity.dto';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { ProjectActivity } from 'src/@generated/project-activity/project-activity.model';
import { Permission } from 'src/middlewares';

@Resolver(() => ProjectActivity)
export class ProjectActivityResolver {
  constructor(private readonly service: ProjectActivityService) {}

  @Query(() => [ProjectActivity], { name: 'projectActivities' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async findManyByFilters(@Args('filters', { type: () => String, nullable: true }) filters: any) {
    return this.service.findManyByFilters(filters || {});
  }

  @Query(() => ProjectActivity, { name: 'projectActivity' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async findById(@Args('id', { type: () => ID }) id: string) {
    return this.service.findById(id);
  }

  @Mutation(() => ProjectActivity)
  @UseGuards(PermissionsGuard)
  @Permission()
  async createProjectActivity(
    @Args('input') input: CreateProjectActivityInput,
    @Context('userId') userId: string,
  ) {
    return this.service.create(input, userId);
  }

  @Mutation(() => ProjectActivity)
  @UseGuards(PermissionsGuard)
  @Permission()
  async updateProjectActivity(
    @Args('input') input: UpdateProjectActivityInput,
    @Context('userId') userId: string,
  ) {
    return this.service.update(input, userId);
  }

  @Mutation(() => ProjectActivity)
  @UseGuards(PermissionsGuard)
  @Permission()
  async deleteProjectActivity(
    @Args('id', { type: () => ID }) id: string,
    @Context('userId') userId: string,
  ) {
    return this.service.softDelete(id, userId);
  }
}
