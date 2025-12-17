import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ProjectService } from '../services/project.service';
import { Project } from '../@generated/project/project.model';
import { ProjectCreateDto, ProjectUpdateDto } from '../dto/project.dto';
import { ProjectKPIs, ProjectsByDepartment, SubsidyStatusDistribution, ProjectsTimeline } from '../dto/project-analytics.dto';

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

  @Query(() => ProjectKPIs)
  async projectKPIs(
    @Args('institutionId', { nullable: true }) institutionId?: string
  ): Promise<ProjectKPIs> {
    return this.projectService.getProjectKPIs(institutionId);
  }

  @Query(() => [ProjectsByDepartment])
  async projectsByDepartment(
    @Args('institutionId', { nullable: true }) institutionId?: string
  ): Promise<ProjectsByDepartment[]> {
    return this.projectService.getProjectsByDepartment(institutionId);
  }

  @Query(() => [SubsidyStatusDistribution])
  async subsidyStatusDistribution(
    @Args('institutionId', { nullable: true }) institutionId?: string
  ): Promise<SubsidyStatusDistribution[]> {
    return this.projectService.getSubsidyStatusDistribution(institutionId);
  }

  @Query(() => [ProjectsTimeline])
  async projectsTimeline(
    @Args('institutionId', { nullable: true }) institutionId?: string
  ): Promise<ProjectsTimeline[]> {
    return this.projectService.getProjectsTimeline(institutionId);
  }
}
