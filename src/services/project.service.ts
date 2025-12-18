import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repositories/project.repository';
import { Project } from '../@generated/project/project.model';
import { ProjectCreateDto, ProjectUpdateDto } from '../dto/project.dto';
import { PrismaService } from './prisma.service';
import { ProjectKPIs, ProjectsByDepartment, SubsidyStatusDistribution, ProjectsTimeline } from '../dto/project-analytics.dto';

@Injectable()
export class ProjectService {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly prisma: PrismaService
  ) {}

  async create(data: ProjectCreateDto, userId: string): Promise<Project> {
    return this.projectRepository.create(data, userId);
  }

  async update(id: string, data: ProjectUpdateDto, userId: string): Promise<Project> {
    return this.projectRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<Project> {
    return this.projectRepository.softDelete(id, userId);
  }

  async findById(id: string): Promise<Project | null> {
    return this.projectRepository.findById(id);
  }

  async findAll(institutionId?: string): Promise<Project[]> {
    return this.projectRepository.findAll(institutionId);
  }

  async getProjectsByChurch(churchId: string): Promise<Project[]> {
    return this.projectRepository.findByChurchId(churchId);
  }

  async getProjectKPIs(institutionId?: string): Promise<ProjectKPIs> {
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
        activities: true,
      },
    });

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

    const totalBudget = projects.reduce((sum, p) => sum + Number(p.budget), 0);

    // Count subsidy requests (projects with special projects)
    const specialProjects = await this.prisma.specialProjects.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          institution_id: institutionId,
        }),
      },
    });

    const totalSubsidyAmount = specialProjects.reduce((sum, sp) => sum + Number(sp.budget || 0), 0);

    return {
      totalProjects: projects.length,
      activeProjects: activeProjects.length,
      completedProjects: completedProjects.length,
      upcomingProjects: upcomingProjects.length,
      totalBudget,
      totalSubsidyRequests: specialProjects.length,
      totalSubsidyAmount,
      projectsWithVolunteers: projects.filter(p => p.required_volunteers).length,
      averageBudgetPerProject: projects.length > 0 ? totalBudget / projects.length : 0,
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
          annualBudget: Number(annualBudget?.planned_budget || 0),
        });
      }

      departmentMap.get(project.department_id)?.projects.push(project);
    }

    // Calculate metrics for each department
    const result: ProjectsByDepartment[] = [];
    departmentMap.forEach((value, key) => {
      const budgetUsed = value.projects.reduce((sum, p) => sum + Number(p.budget), 0);
      result.push({
        department: value.name,
        projects: value.projects.length,
        budget_used: budgetUsed,
        remaining_budget: value.annualBudget - budgetUsed,
        annual_budget: value.annualBudget,
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
      createdData.budget += Number(project.budget);

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
