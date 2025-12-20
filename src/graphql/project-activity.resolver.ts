import { Resolver, Query, Mutation, Args, Context, ID } from '@nestjs/graphql';
import { ProjectActivityService } from '../services/project-activity.service';
import { ProjectActivityLogService } from '../services/project-activity-log.service';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { ProjectActivity } from 'src/@generated/project-activity/project-activity.model';
import { ProjectActivityLog } from 'src/@generated/project-activity-log/project-activity-log.model';
import { Permission } from 'src/middlewares';
import { ProjectActivityBatchUpdateDto, ProjectActivityCreateDto, ProjectActivityUpdateDto } from '../dto/project-activity.dto';

@Resolver(() => ProjectActivity)
export class ProjectActivityResolver {
  constructor(
    private readonly service: ProjectActivityService,
    private readonly logService: ProjectActivityLogService,
  ) {}

  @Query(() => [ProjectActivity], { name: 'projectActivities' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async findManyByFilters(@Args('filters', { type: () => String, nullable: true }) filters: string | undefined) {
    const parsedFilters: Partial<Record<string, any>> = filters ? JSON.parse(filters) : {};
    return this.service.findManyByFilters(parsedFilters);
  }

  @Query(() => ProjectActivity, { name: 'projectActivity' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async findById(@Args('id', { type: () => ID }) id: string) {
    return this.service.findById(id);
  }

  @Query(() => [ProjectActivityLog], { name: 'projectActivityLogs' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async getActivityLogs(@Args('activityId', { type: () => ID }) activityId: string) {
    return this.logService.getActivityLogs(activityId);
  }

  @Mutation(() => ProjectActivity)
  @UseGuards(PermissionsGuard)
  @Permission()
  async createProjectActivity(
    @Args('input') input: ProjectActivityCreateDto,
    @Context('userId') userId: string,
  ) {
    return this.service.create(input, userId);
  }

  @Mutation(() => ProjectActivity)
  @UseGuards(PermissionsGuard)
  @Permission()
  async updateProjectActivity(
    @Args('input') input: ProjectActivityUpdateDto,
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

  @Mutation(() => [ProjectActivity])
  @UseGuards(PermissionsGuard)
  @Permission()
  async batchUpdateProjectActivities(
    @Args('data') data: ProjectActivityBatchUpdateDto,
    @Context('userId') userId: string,
  ) {
    return this.service.batchUpdate(data, userId);
  }
}
