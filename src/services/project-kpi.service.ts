import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { ProjectKPIsDto } from '../dto/project-kpi.dto'

@Injectable()
export class ProjectKPIService {
  constructor(private readonly prisma: PrismaService) {}

  async calculateProjectKPIs(projectId: string): Promise<ProjectKPIsDto> {
    // Fetch project with all related data in a single query
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
      include: {
        activities: {
          where: { is_deleted: false },
          select: {
            id: true,
            status: true,
            budget_amount: true,
            is_subsidized: true,
          },
        },
        subsidies: {
          where: { is_deleted: false },
          select: { id: true },
        },
      },
    })

    if (!project) {
      throw new Error(`Project with ID ${projectId} not found`)
    }

    // Calculate Activities KPIs
    const totalActivities = project.activities.length
    const completedActivities = project.activities.filter(
      (a) => a.status === 'COMPLETED',
    ).length
    const inProgressActivities = project.activities.filter(
      (a) => a.status === 'IN_PROGRESS',
    ).length
    const completionRate =
      totalActivities > 0
        ? Math.round((completedActivities / totalActivities) * 100)
        : 0

    // Calculate Budget KPIs
    const projectBudget = Number(project.budget || 0)
    const allocatedBudget = project.activities.reduce(
      (sum, activity) => sum + Number(activity.budget_amount || 0),
      0,
    )
    const budgetUtilization =
      projectBudget > 0
        ? Math.round((allocatedBudget / projectBudget) * 100)
        : 0

    // Calculate Subsidy KPIs
    const subsidizedActivities = project.activities.filter(
      (a) => a.is_subsidized,
    ).length
    const subsidyRate =
      totalActivities > 0
        ? Math.round((subsidizedActivities / totalActivities) * 100)
        : 0
    const subsidyRequestsCount = project.subsidies.length

    // Calculate Timeline KPIs
    const now = new Date()
    const endDate = new Date(project.end_at)
    const daysRemaining = Math.ceil(
      (endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    )

    // Determine project status
    const startDate = new Date(project.start_at)
    let projectStatus = 'upcoming'
    if (startDate <= now && endDate >= now) {
      projectStatus = 'active'
    } else if (endDate < now) {
      projectStatus = 'completed'
    }

    return {
      totalActivities,
      completedActivities,
      inProgressActivities,
      completionRate,
      projectBudget,
      allocatedBudget,
      budgetUtilization,
      subsidizedActivities,
      subsidyRate,
      subsidyRequestsCount,
      daysRemaining,
      endDate,
      projectStatus,
    }
  }
}
