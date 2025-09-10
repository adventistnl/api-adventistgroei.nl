import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ProjectService } from '../services/project.service';
import { Project } from '../@generated/project/project.model';
import { ProjectCreateDto, ProjectUpdateDto } from '../dto/project.dto';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [Project])
  async projects(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Query(() => Project, { nullable: true })
  async project(@Args('id') id: string): Promise<Project | null> {
    return this.projectService.findById(id);
  }

  @Mutation(() => Project)
  async createProject(
    @Args('data') data: ProjectCreateDto,
    @Context() context: { userId: string },
  ): Promise<Project> {
    return this.projectService.create(data, context.userId);
  }

  @Mutation(() => Project)
  async updateProject(
    @Args('id') id: string,
    @Args('data') data: ProjectUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Project> {
    return this.projectService.update(id, data, context.userId);
  }

  @Mutation(() => Project)
  async deleteProject(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Project> {
    return this.projectService.delete(id, context.userId);
  }
}
