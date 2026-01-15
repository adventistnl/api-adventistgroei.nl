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
          include: {
            activity_funding: true, // Include funding to calculate local contribution
          },
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
    // allocatedBudget is the sum of all activity budgets
    const allocatedBudget = project.activities.reduce<Decimal>(
      (sum, activity) => sum.plus(DecimalHelper.toDecimal(activity.budget_amount)),
      new Decimal(0),
    );

    // projectBudget should be the same as allocatedBudget based on our previous fix (ProjectServiceSync)
    // But for KPIs, relying on the sum of activities is safer/more accurate dynamically
    const projectBudget = allocatedBudget; 

    // Filter out rejected subsidies for both count and amount
    const activeSubsidyRequests = project.subsidies.filter(
      (s) => s.subsidy_status?.name?.toLowerCase() !== 'rejected'
    );

    const subsidyRequestsCount = activeSubsidyRequests.length;
    const approvedSubsidyRequestsCount = activeSubsidyRequests.filter(
      (s) => s.subsidy_status?.name?.toLowerCase() === 'approved'
    ).length;
    
    // totalSubsidyAmount is the sum of relevant subsidy requests
    const totalSubsidyAmount = DecimalHelper.sum(
      activeSubsidyRequests.map((s) => s.total_budget || 0)
    ).toNumber();

    // KPI: Subsidized Budget
    // This represents the total budget allocated for subsidies (from project.subsidized_budget)
    // The total amount already requested is available as totalSubsidyAmount
    const subsidizedBudget = DecimalHelper.toDecimal(project.subsidized_budget);

    // KPI: Local Contribution (mapped to 'balance')
    // User expectation: Total Budget - Subsidized Budget = What local entity pays
    // This assumes that anything NOT covered by subsidy is paid locally
    const localContribution = projectBudget.minus(subsidizedBudget);

    // Balance field in DTO is used for "Local Contribution" in frontend card
    const balance = localContribution;
    
    // Calculate Percentages (safe division)
    // budgetUtilization = (allocatedBudget / projectBudget) * 100 
    // Since allocated == projectBudget now, this is always 100% if > 0.
    const budgetUtilization = projectBudget.isPositive() 
      ? allocatedBudget.dividedBy(projectBudget).times(100).toNumber() 
      : 0;
      
    // subsidizedBudgetPercentage = (subsidizedBudget / projectBudget) * 100
    // Shows how much of the project relies on subsidies
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
      projectBudget: DecimalHelper.safeToNumber(projectBudget),
      allocatedBudget: DecimalHelper.safeToNumber(allocatedBudget),
      subsidizedBudget: DecimalHelper.safeToNumber(subsidizedBudget),
      balance: DecimalHelper.safeToNumber(balance), // Mapped to Local Contribution
      budgetUtilization: DecimalHelper.safeRound(budgetUtilization),
      subsidizedBudgetPercentage: DecimalHelper.safeRound(subsidizedBudgetPercentage),
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
