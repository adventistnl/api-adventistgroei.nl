import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ProjectVoluntaryService } from '../services/project-voluntary.service';
import { AddProjectVoluntaryDto, RemoveProjectVoluntaryDto } from '../dto/project-voluntary.dto';
import { VoluntariesOnProjects } from '../@generated/voluntaries-on-projects/voluntaries-on-projects.model';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => VoluntariesOnProjects)
export class ProjectVoluntaryResolver {
  constructor(private readonly projectVoluntaryService: ProjectVoluntaryService) {}

  @Mutation(() => VoluntariesOnProjects)
  @UseGuards(PermissionsGuard)
  @Permission()
  async addProjectVoluntary(
    @Args('data') data: AddProjectVoluntaryDto
  ): Promise<VoluntariesOnProjects> {
    return this.projectVoluntaryService.addVoluntary(data);
  }

  @Mutation(() => VoluntariesOnProjects)
  @UseGuards(PermissionsGuard)
  @Permission()
  async removeProjectVoluntary(
    @Args('data') data: RemoveProjectVoluntaryDto
  ): Promise<VoluntariesOnProjects> {
    return this.projectVoluntaryService.removeVoluntary(data);
  }
}
