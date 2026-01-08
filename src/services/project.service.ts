import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repositories/project.repository';
import { DecimalHelper } from '../common/helpers/decimal.helper';
import { Project } from '../@generated/project/project.model';
import { ProjectCreateDto, ProjectUpdateDto } from '../dto/project.dto';
import { PrismaService } from './prisma.service';
import { ProjectKPIs, ProjectsByDepartment, SubsidyStatusDistribution, ProjectsTimeline } from '../dto/project-analytics.dto';
import { SubsidyRequestService } from './subsidy-request.service';
import { ProjectActivityService } from './project-activity.service';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { AnnualBudgetService } from './annual-budget.service';
import { UserRepository } from '../repositories/user.repository';
import { UserWithRoles } from '../models';

@Injectable()
export class ProjectService {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly prisma: PrismaService,
    private readonly subsidyRequestService: SubsidyRequestService,
    private readonly projectActivityService: ProjectActivityService,
    private readonly annualBudgetService: AnnualBudgetService,
    private readonly userRepository: UserRepository,
  ) {}

  async create(data: ProjectCreateDto, userId: string): Promise<Project> {
    const project = await this.projectRepository.create(data, userId);

    try {
      // Update Annual Budget if there is a subsidized budget
      if (data.subsidized_budget && data.subsidized_budget > 0) {
        const year = new Date().getFullYear();
        await this.annualBudgetService.updateBudgetFinancials(
          data.department_id,
          year,
          data.subsidized_budget, // Add to Allocated
          0, // No spending yet
          userId
        );
      }
    } catch (e) {
      console.error("Failed to allocate budget for new project, rolling back...", e);
      await this.projectRepository.softDelete(project.id, userId);
      throw e;
    }

    return project;
  }

  async update(id: string, data: ProjectUpdateDto, userId: string): Promise<Project> {
    return this.projectRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<Project> {
    console.log(`🗑️  Starting soft delete for project ${id}`);

    // 1. Find all subsidies for this project
    const subsidies = await this.prisma.subsidyRequest.findMany({
      where: {
        project_id: id,
        is_deleted: false,
      },
      include: {
        subsidy_status: true,
      },
    });

    console.log(`📋 Found ${subsidies.length} subsidy requests for project`);

    // 2. Validate: Block if any subsidy is APPROVED or CLOSED
    if (subsidies.length > 0) {
      const blockedStatuses = ['APPROVED', 'CLOSED'];
      const blockedSubsidies = subsidies.filter(
        (s) => s.subsidy_status?.name && blockedStatuses.includes(s.subsidy_status.name)
      );

      if (blockedSubsidies.length > 0) {
        const statusNames = blockedSubsidies.map((s) => s.subsidy_status?.name).join(', ');
        throw new CustomGraphQLError(
          `Cannot delete project with ${statusNames.toLowerCase()} subsidy requests. Please remove or change the status of associated subsidies first.`,
          ErrorCode.BAD_REQUEST,
          400,
          { additional: { errorCode: 'PROJECT_HAS_APPROVED_SUBSIDIES' } }
        );
      }
    }

    // 3. Delete all subsidies (uses existing service with validation)
    console.log(`🔄 Deleting ${subsidies.length} subsidy requests...`);
    for (const subsidy of subsidies) {
      await this.subsidyRequestService.delete(subsidy.id, userId);
    }

    // 4. Delete all activities (uses existing service with validation)
    const activities = await this.prisma.projectActivity.findMany({
      where: {
        project_id: id,
        is_deleted: false,
      },
    });

    console.log(`🔄 Deleting ${activities.length} activities...`);
    for (const activity of activities) {
      await this.projectActivityService.softDelete(activity.id, userId);
    }

    // 5. Soft delete special projects
    console.log(`📄 Soft deleting special projects...`);
    await this.prisma.specialProjects.updateMany({
      where: {
        project_id: id,
        is_deleted: false,
      },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
      },
    });

    // 6. Delete voluntary users (hard delete - join table)
    console.log(`👥 Deleting voluntary users...`);
    await this.prisma.voluntariesOnProjects.deleteMany({
      where: { project_id: id },
    });

    // 7. Soft delete the project
    console.log(`🎯 Soft deleting project...`);
    const deletedProject = await this.projectRepository.softDelete(id, userId);

    console.log(`✅ Project ${id} soft deleted successfully`);
    return deletedProject;
  }

  async findById(id: string): Promise<Project | null> {
    return this.projectRepository.findById(id);
  }

  async findAll(institutionId?: string, userId?: string): Promise<Project[]> {
    let user: UserWithRoles | null = null;
    if (userId) {
      user = await this.userRepository.findByIdWithRoles(userId);
    }
    return this.projectRepository.findAll(institutionId, user);
  }

  async getProjectsByChurch(churchId: string): Promise<Project[]> {
    return this.projectRepository.findByChurchId(churchId);
  }

  async getProjectKPIs(institutionId?: string): Promise<ProjectKPIs> {
    const projectsData = await this.prisma.project.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          department: {
            institution_id: institutionId,
          },
        }),
      },
      include: {
        activities: {
          where: {
            is_deleted: false,
          },
        },
      },
    });

    // Type assertion to access fields that exist in the schema but TypeScript doesn't recognize
    const projects = projectsData as Array<typeof projectsData[0] & { subsidized_budget: any }>

    const now = new Date();
    const activeProjects = projects.filter(p => {
      const start = new Date(p.start_at);
      const end = new Date(p.end_at);
      return start <= now && end >= now;
    });

    const completedProjects = projects.filter(p => {
      const end = new Date(p.end_at);
      return end < now;
    });

    const upcomingProjects = projects.filter(p => {
      const start = new Date(p.start_at);
      return start > now;
    });

    const totalBudget = DecimalHelper.sum(projects.map(p => p.budget));
    const totalSubsidizedBudget = DecimalHelper.sum(projects.map(p => p.subsidized_budget));

    // Count subsidy requests (projects with special projects)
    const specialProjects = await this.prisma.specialProjects.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          institution_id: institutionId,
        }),
        subsidy_status: {
          name: {
            not: 'rejected',
          },
        },
      },
    });

    const totalSubsidyAmount = DecimalHelper.sum(specialProjects.map(sp => sp.budget));

    return {
      totalProjects: projects.length,
      activeProjects: activeProjects.length,
      completedProjects: completedProjects.length,
      upcomingProjects: upcomingProjects.length,
      totalBudget: totalBudget.toNumber(),
      totalSubsidizedBudget: totalSubsidizedBudget.toNumber(),
      totalSubsidyRequests: specialProjects.length,
      totalSubsidyAmount: totalSubsidyAmount.toNumber(),
      projectsWithVolunteers: projects.filter(p => p.required_volunteers).length,
      averageBudgetPerProject: projects.length > 0 ? totalBudget.dividedBy(projects.length).toNumber() : 0,
    };
  }

  async getProjectsByDepartment(institutionId?: string): Promise<ProjectsByDepartment[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          department: {
            institution_id: institutionId,
          },
        }),
      },
      include: {
        department: true,
      },
    });

    // Group by department
    const departmentMap = new Map<string, { name: string; projects: any[]; annualBudget: number }>();

    for (const project of projects) {
      if (!project.department) continue;

      if (!departmentMap.has(project.department_id)) {
        // Get department annual budget
        const annualBudget = await this.prisma.annualBudget.findFirst({
          where: {
            department_id: project.department_id,
            year: new Date().getFullYear(),
            is_deleted: false,
          },
        });

        departmentMap.set(project.department_id, {
          name: project.department.name,
          projects: [],
          annualBudget: DecimalHelper.toDecimal(annualBudget?.planned_budget).toNumber(),
        });
      }

      departmentMap.get(project.department_id)?.projects.push(project);
    }

    // Calculate metrics for each department
    const result: ProjectsByDepartment[] = [];
    departmentMap.forEach((value) => {
      const budgetUsed = DecimalHelper.sum(value.projects.map(p => p.budget));
      const annualBudget = DecimalHelper.toDecimal(value.annualBudget);
      result.push({
        department: value.name,
        projects: value.projects.length,
        budget_used: budgetUsed.toNumber(),
        remaining_budget: annualBudget.minus(budgetUsed).toNumber(),
        annual_budget: annualBudget.toNumber(),
      });
    });

    return result;
  }

  async getSubsidyStatusDistribution(institutionId?: string): Promise<SubsidyStatusDistribution[]> {
    const specialProjects = await this.prisma.specialProjects.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          institution_id: institutionId,
        }),
      },
      include: {
        subsidy_status: true,
      },
    });

    // Group by status
    const statusMap = new Map<string, number>();
    specialProjects.forEach(sp => {
      const status = sp.subsidy_status?.name || 'Pending';
      statusMap.set(status, (statusMap.get(status) || 0) + 1);
    });

    // Map status to colors
    const statusColors: Record<string, string> = {
      'Approved': '#22c55e',
      'Pending': '#f59e0b',
      'In Analysis': '#3b82f6',
      'Rejected': '#ef4444',
    };

    const result: SubsidyStatusDistribution[] = [];
    statusMap.forEach((count, status) => {
      result.push({
        status,
        count,
        color: statusColors[status] || '#6b7280',
      });
    });

    return result;
  }

  async getProjectsTimeline(institutionId?: string): Promise<ProjectsTimeline[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          department: {
            institution_id: institutionId,
          },
        }),
      },
      orderBy: { created_at: 'asc' },
    });

    // Group by month
    const monthMap = new Map<string, { created: number; completed: number; budget: number }>();

    projects.forEach(project => {
      const createdMonth = new Date(project.created_at).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
      const endMonth = new Date(project.end_at).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });

      // Count created projects
      if (!monthMap.has(createdMonth)) {
        monthMap.set(createdMonth, { created: 0, completed: 0, budget: 0 });
      }
      const createdData = monthMap.get(createdMonth)!;
      createdData.created += 1;
      createdData.budget = DecimalHelper.toDecimal(createdData.budget).plus(project.budget).toNumber();

      // Count completed projects
      const now = new Date();
      const end = new Date(project.end_at);
      if (end < now) {
        if (!monthMap.has(endMonth)) {
          monthMap.set(endMonth, { created: 0, completed: 0, budget: 0 });
        }
        const endData = monthMap.get(endMonth)!;
        endData.completed += 1;
      }
    });

    // Convert to array and get last 6 months
    const result: ProjectsTimeline[] = [];
    const sortedMonths = Array.from(monthMap.entries())
      .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
      .slice(-6);

    sortedMonths.forEach(([month, data]) => {
      result.push({
        month,
        created: data.created,
        completed: data.completed,
        budget: data.budget,
      });
    });

    return result;
  }
}
