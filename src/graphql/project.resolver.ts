import { Resolver, Query, Mutation, Args, Context, ResolveField, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { Project } from '../@generated/project/project.model';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { ProjectCreateDto, ProjectUpdateDto } from '../dto/project.dto';
import { ProjectKPIs, ProjectsByDepartment, SubsidyStatusDistribution, ProjectsTimeline } from '../dto/project-analytics.dto';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';
import { ProjectKPIService } from '../services/project-kpi.service';
import { ProjectKPIsDto } from '../dto/project-kpi.dto';
import { Permission } from '../middlewares';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(
    private readonly projectService: ProjectService,
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
    private readonly projectKPIService: ProjectKPIService,
  ) {}

  @Query(() => [Project])
  @UseGuards(PermissionsGuard)
  @Permission()
  async projects(
    @Args('institutionId', { nullable: true }) institutionId?: string,
    @Context() context?: { userId: string },
  ): Promise<Project[]> {
    return this.projectService.findAll(institutionId, context?.userId);
  }

  @Query(() => Project, { nullable: true })
  @UseGuards(PermissionsGuard)
  @Permission()
  async project(@Args('id') id: string): Promise<Project | null> {
    return this.projectService.findById(id);
  }

  @Mutation(() => Project)
  @UseGuards(PermissionsGuard)
  @Permission()
  async createProject(
    @Args('data') data: ProjectCreateDto,
    @Context() context: { userId: string },
  ): Promise<Project> {
    return this.projectService.create(data, context.userId);
  }

  @Mutation(() => Project)
  @UseGuards(PermissionsGuard)
  @Permission()
  async updateProject(
    @Args('id') id: string,
    @Args('data') data: ProjectUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Project> {
    return this.projectService.update(id, data, context.userId);
  }

  @Mutation(() => Project)
  @UseGuards(PermissionsGuard)
  @Permission()
  async deleteProject(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Project> {
    return this.projectService.delete(id, context.userId);
  }

  @Query(() => ProjectKPIs)
  @UseGuards(PermissionsGuard)
  @Permission()
  async projectKPIs(
    @Args('institutionId', { nullable: true }) institutionId?: string
  ): Promise<ProjectKPIs> {
    return this.projectService.getProjectKPIs(institutionId);
  }

  @Query(() => [ProjectsByDepartment])
  @UseGuards(PermissionsGuard)
  @Permission()
  async projectsByDepartment(
    @Args('institutionId', { nullable: true }) institutionId?: string
  ): Promise<ProjectsByDepartment[]> {
    return this.projectService.getProjectsByDepartment(institutionId);
  }

  @Query(() => [SubsidyStatusDistribution])
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyStatusDistribution(
    @Args('institutionId', { nullable: true }) institutionId?: string
  ): Promise<SubsidyStatusDistribution[]> {
    return this.projectService.getSubsidyStatusDistribution(institutionId);
  }

  @Query(() => [ProjectsTimeline])
  @UseGuards(PermissionsGuard)
  @Permission()
  async projectsTimeline(
    @Args('institutionId', { nullable: true }) institutionId?: string
  ): Promise<ProjectsTimeline[]> {
    return this.projectService.getProjectsTimeline(institutionId);
  }

  // ResolveField para garantir que apenas subsídios com requester válido sejam retornados
  @ResolveField(() => [SubsidyRequest])
  async subsidies(@Parent() project: Project): Promise<SubsidyRequest[]> {
    return this.subsidyRequestRepository.findManyByFilters({
      project_id: project.id,
      is_deleted: false,
    });
  }

  // ResolveField para retornar KPIs calculados do projeto
  @ResolveField(() => ProjectKPIsDto, { name: 'kpis' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async getSpecificProjectKPIs(@Parent() project: Project): Promise<ProjectKPIsDto> {
    return this.projectKPIService.calculateProjectKPIs(project.id);
  }
}
