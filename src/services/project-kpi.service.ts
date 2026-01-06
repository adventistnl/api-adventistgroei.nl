import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProjectKPIsDto } from '../dto/project-kpi.dto';
import { DecimalHelper } from 'src/common/helpers/decimal.helper';
import { Decimal } from '@prisma/client/runtime/library';

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
        },
        subsidies: {
          where: { is_deleted: false },
          include: { subsidy_status: true },
        },
      },
    });

    if (!project) {
      throw new Error(`Project with ID ${projectId} not found`);
    }

    // Calculate Activities KPIs
    const totalActivities = project.activities.length;
    const completedActivities = project.activities.filter(
      (a) => a.status === 'COMPLETED',
    ).length;
    const inProgressActivities = project.activities.filter(
      (a) => a.status === 'IN_PROGRESS',
    ).length;
    const completionRate =
      totalActivities > 0
        ? Math.round((completedActivities / totalActivities) * 100)
        : 0;

    // Calculate Budget KPIs
    const projectBudget = DecimalHelper.toDecimal(project.budget);
    const subsidizedBudget = DecimalHelper.toDecimal(project.subsidized_budget);
    const balance = DecimalHelper.toDecimal(project.balance);
    
    // Sum allocated budget from activities
    const allocatedBudget = project.activities.reduce<Decimal>(
      (sum, activity) => sum.plus(DecimalHelper.toDecimal(activity.budget_amount)),
      new Decimal(0),
    );

    // Calculate Percentages (safe division)
    // budgetUtilization = (allocatedBudget / projectBudget) * 100
    const budgetUtilization = projectBudget.isPositive() 
      ? allocatedBudget.dividedBy(projectBudget).times(100).toNumber() 
      : 0;
      
    // subsidizedBudgetPercentage = (subsidizedBudget / projectBudget) * 100
    const subsidizedBudgetPercentage = projectBudget.isPositive()
      ? subsidizedBudget.dividedBy(projectBudget).times(100).toNumber()
      : 0;

    // Calculate Subsidy KPIs
    const subsidizedActivities = project.activities.filter(
      (a) => a.is_subsidized,
    ).length;
    const subsidyRate =
      totalActivities > 0
        ? Math.round((subsidizedActivities / totalActivities) * 100)
        : 0;
    
    // Filter out rejected subsidies for both count and amount
    const activeSubsidyRequests = project.subsidies.filter(
      (s) => s.subsidy_status?.name?.toLowerCase() !== 'rejected'
    );

    const subsidyRequestsCount = activeSubsidyRequests.length;
    const approvedSubsidyRequestsCount = activeSubsidyRequests.filter(
      (s) => s.subsidy_status?.name?.toLowerCase() === 'approved'
    ).length;
    const rejectedSubsidyRequestsCount = project.subsidies.filter(
      (s) => s.subsidy_status?.name?.toLowerCase() === 'rejected'
    ).length;
    
    const totalSubsidyAmount = DecimalHelper.sum(
      activeSubsidyRequests.map((s) => s.total_budget || 0)
    ).toNumber();

    // Calculate Timeline KPIs
    const now = new Date();
    const endDate = new Date(project.end_at);
    const daysRemaining = Math.ceil(
      (endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    );

    // Determine project status
    const startDate = new Date(project.start_at);
    let projectStatus = 'upcoming';
    if (startDate <= now && endDate >= now) {
      projectStatus = 'active';
    } else if (endDate < now) {
      projectStatus = 'completed';
    }

    return {
      totalActivities,
      completedActivities,
      inProgressActivities,
      completionRate,
      projectBudget: projectBudget.toNumber(),
      allocatedBudget: allocatedBudget.toNumber(),
      subsidizedBudget: subsidizedBudget.toNumber(),
      balance: balance.toNumber(),
      budgetUtilization: Math.round(budgetUtilization),
      subsidizedBudgetPercentage: Math.round(subsidizedBudgetPercentage),
      subsidizedActivities,
      subsidyRate,
      subsidyRequestsCount,
      approvedSubsidyRequestsCount,
      totalSubsidyAmount,
      daysRemaining,
      endDate,
      projectStatus,
    };
  }
}
