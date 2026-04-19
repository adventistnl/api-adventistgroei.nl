import { Resolver, Query, Mutation, Args, Context, ResolveField, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { Project } from '../@generated/project/project.model';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { ProjectCreateDto, ProjectUpdateDto, ProjectUpdateCoOwnerDto } from '../dto/project.dto';
import { ProjectKPIs, ProjectsByDepartment, SubsidyStatusDistribution, ProjectsTimeline } from '../dto/project-analytics.dto';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';
import { ProjectKPIService } from '../services/project-kpi.service';
import { ProjectKPIsDto } from '../dto/project-kpi.dto';
import { Permission } from '../middlewares';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { DepartmentService } from '../services/department.service';
import { ProjectCollaborator } from '../models';
import { Church } from '../@generated/church/church.model';
import { Department } from '../@generated/department/department.model';
import { ProjectHistory } from '../@generated/project-history/project-history.model';
import { ProjectHistoryService } from '../services/project-history.service';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(
    private readonly projectService: ProjectService,
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
    private readonly projectKPIService: ProjectKPIService,
    private readonly departmentService: DepartmentService,
    private readonly projectHistoryService: ProjectHistoryService,
  ) {}

  @ResolveField(() => Church, { nullable: true, name: 'Church' })
  getChurch(@Parent() project: Project): Church | null {
    // Check for lowercase church (standard Prisma output based on schema)
    if (project.church) {
      return project.church;
    }
    
    // Fallback to department's church if available
    if (project.department) {
       // Check department's church (lowercase in schema and model)
       if (project.department.church) {
         return project.department.church;
       }
    }

    return null;
  }

  @ResolveField(() => Department, { nullable: true, name: 'churchDepartment' })
  async getChurchDepartment(@Parent() project: Project): Promise<Department | null> {
    if (!project.church_department_id) {
      return null;
    }
    return this.departmentService.getDepartmentById(project.church_department_id as string);
  }

  @Query(() => [Project])
  @UseGuards(PermissionsGuard)
  @Permission()
  async projects(
    @Args('institutionId', { nullable: true }) institutionId?: string,
    @Context() context?: { userId: string },
  ): Promise<Project[]> {
    return this.projectService.findAll(institutionId, context?.userId);
  }

  @Query(() => [Project])
  @UseGuards(PermissionsGuard)
  @Permission()
  async myProjects(
    @Context() context: { userId: string },
  ): Promise<Project[]> {
    return this.projectService.getMyProjects(context.userId);
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
  async updateProjectCoOwner(
    @Args('id') id: string,
    @Args('data') data: ProjectUpdateCoOwnerDto,
    @Context() context: { userId: string },
  ): Promise<Project> {
    return this.projectService.updateCoOwner(id, data, context.userId);
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

  // Retorna KPIs calculados do projeto
  @ResolveField(() => ProjectKPIsDto, { name: 'kpis' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async getSpecificProjectKPIs(@Parent() project: Project): Promise<ProjectKPIsDto> {
    return this.projectKPIService.calculateProjectKPIs(project.id);
  }

  // Retorna todos os colaboradores: owner, co_owner e assignees das atividades
  @ResolveField(() => [ProjectCollaborator], { name: 'collaborators' })
  async getCollaborators(@Parent() project: Project): Promise<ProjectCollaborator[]> {
    return this.projectService.getProjectCollaborators(project.id);
  }

  // Retorna o histórico de eventos e comentários do projeto
  @ResolveField(() => [ProjectHistory], { name: 'history' })
  async getHistory(@Parent() project: Project): Promise<ProjectHistory[]> {
    return this.projectHistoryService.getByProjectId(project.id);
  }
}
