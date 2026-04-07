import { Resolver, Query, Mutation, Args, Context, ResolveField, Parent, Float, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { AnnualBudget } from 'src/@generated/annual-budget/annual-budget.model';
import { FindManyAnnualBudgetArgs } from 'src/@generated/annual-budget/find-many-annual-budget.args';
import { DeleteBudgetResponse, ApproveAnnualBudgetDto, ApproveBudgetResponse, RejectAnnualBudgetDto, RejectBudgetResponse, RequestRevisionAnnualBudgetDto, RequestRevisionBudgetResponse, ToggleLockBudgetResponse, RecalculateAllocatedAmountsResponse, InstitutionBudgetCreateDto, InstitutionBudgetUpdateDto, DepartmentBudgetCreateDto, DepartmentBudgetUpdateDto } from 'src/dto/annual_budget.dto';
import { BudgetKPIs, DepartmentSpending, SpendingOverTime, BudgetDistribution, EntityDistribution, InstitutionalDepartmentsKPIs } from 'src/dto/budget-analytics.dto';
import { Permission } from 'src/middlewares';
import { AnnualBudgetService } from 'src/services/annual-budget.service';
import { InstitutionRepository } from 'src/repositories/institution.repository';
import { ChurchRepository } from 'src/repositories/church.repository';
import { DepartmentRepository } from 'src/repositories/department.repository';
import { Institution } from 'src/@generated/institution/institution.model';
import { Church } from 'src/@generated/church/church.model';
import { Department } from 'src/@generated/department/department.model';

@Resolver(() => AnnualBudget)
@UseGuards(PermissionsGuard)
export class AnnualBudgetResolver {
  constructor(
    private readonly annualBudgetService: AnnualBudgetService,
    private readonly institutionRepository: InstitutionRepository,
    private readonly churchRepository: ChurchRepository,
    private readonly departmentRepository: DepartmentRepository,
  ) {}

  @Query(() => [AnnualBudget])
  @Permission()
  async annualBudgets(@Args() args: FindManyAnnualBudgetArgs): Promise<AnnualBudget[]> {
    return await this.annualBudgetService.findMany(args);
  }

  @Query(() => AnnualBudget, { nullable: true })
  @Permission()
  async annualBudget(@Args('id') id: string): Promise<AnnualBudget | null> {
    return await this.annualBudgetService.findById(id);
  }

  @Query(() => BudgetKPIs)
  @Permission()
  async budgetKPIs(
    @Args('year', { type: () => Int }) year: number,
    @Args('institutionId') institutionId: string
  ): Promise<BudgetKPIs> {
    return await this.annualBudgetService.getBudgetKPIs(year, institutionId);
  }

  @Query(() => [DepartmentSpending])
  @Permission()
  async departmentSpending(
    @Args('year', { type: () => Int }) year: number,
    @Args('institutionId') institutionId: string
  ): Promise<DepartmentSpending[]> {
    return await this.annualBudgetService.getDepartmentSpending(year, institutionId);
  }

  @Query(() => [SpendingOverTime])
  @Permission()
  async spendingOverTime(
    @Args('year', { type: () => Int }) year: number,
    @Args('institutionId') institutionId: string
  ): Promise<SpendingOverTime[]> {
    return await this.annualBudgetService.getSpendingOverTime(year, institutionId);
  }

  @Query(() => [EntityDistribution])
  @Permission()
  async entityDistribution(@Args('year', { type: () => Int }) year: number): Promise<EntityDistribution[]> {
    return await this.annualBudgetService.getEntityDistribution(year);
  }

  @Query(() => BudgetDistribution)
  @Permission()
  async budgetDistribution(
    @Args('year', { type: () => Int }) year: number,
    @Args('institutionId') institutionId: string
  ): Promise<BudgetDistribution> {
    return await this.annualBudgetService.getBudgetDistribution(year, institutionId);
  }

  @Query(() => InstitutionalDepartmentsKPIs)
  @Permission()
  async institutionalDepartmentsKPIs(
    @Args('year', { type: () => Int }) year: number,
    @Args('institutionId') institutionId: string
  ): Promise<InstitutionalDepartmentsKPIs> {
    return await this.annualBudgetService.getInstitutionalDepartmentsKPIs(year, institutionId);
  }

  @ResolveField(() => Institution, { nullable: true })
  async institution(@Parent() annualBudget: AnnualBudget): Promise<Institution | null> {
    if (!annualBudget.institution_id) {
      return null;
    }
    return await this.institutionRepository.findById(annualBudget.institution_id);
  }

  @ResolveField(() => Church, { nullable: true })
  async church(@Parent() annualBudget: AnnualBudget): Promise<Church | null> {
    if (!annualBudget.church_id) {
      return null;
    }
    return await this.churchRepository.findById(annualBudget.church_id);
  }

  @ResolveField(() => Department, { nullable: true })
  async department(@Parent() annualBudget: AnnualBudget): Promise<Department | null> {
    if (!annualBudget.department_id) {
      return null;
    }
    return await this.departmentRepository.findById(annualBudget.department_id);
  }

  @ResolveField(() => Float)
  approvedAmount(@Parent() annualBudget: AnnualBudget): number {
    return Number(annualBudget.approved_amount || 0);
  }

  @ResolveField(() => Float)
  async spentAmount(@Parent() annualBudget: AnnualBudget): Promise<number> {
    const financials = await this.annualBudgetService.getComputedFinancials([annualBudget.id]);
    const fin = financials[annualBudget.id] || { expenses: 0 };
    return fin.expenses;
  }

  @ResolveField(() => Float)
  async usagePercentage(@Parent() annualBudget: AnnualBudget): Promise<number> {
    const financials = await this.annualBudgetService.getComputedFinancials([annualBudget.id]);
    const fin = financials[annualBudget.id] || { expenses: 0 };
    
    const approvedAmount = Number(annualBudget.planned_budget || 0);
    const spentAmount = fin.expenses;
    return approvedAmount > 0 ? Math.round((spentAmount / approvedAmount) * 100) : 0;
  }

  @ResolveField(() => Float)
  async remainingAmount(@Parent() annualBudget: AnnualBudget): Promise<number> {
    const financials = await this.annualBudgetService.getComputedFinancials([annualBudget.id]);
    const fin = financials[annualBudget.id] || { balance: 0 };
    // The balance is technically exact remaining according to our ledger logic.
    // If we want exact raw budget - expenses calculation:
    // return Math.max(0, Context's total budget - expenses)
    // But since the frontend uses this for "available balance" explicitly:
    return fin.balance;
  }

  @Mutation(() => DeleteBudgetResponse)
  @Permission()
  async deleteAnnualBudget(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<DeleteBudgetResponse> {
    return this.annualBudgetService.delete(id, context.userId);
  }

  @Mutation(() => ApproveBudgetResponse)
  @Permission()
  async approveAnnualBudget(
    @Args('id') id: string,
    @Args('data') data: ApproveAnnualBudgetDto,
    @Context() context: { userId: string },
  ): Promise<ApproveBudgetResponse> {
    return this.annualBudgetService.approve(id, data, context.userId);
  }

  @Mutation(() => RejectBudgetResponse)
  @Permission()
  async rejectAnnualBudget(
    @Args('id') id: string,
    @Args('data') data: RejectAnnualBudgetDto,
    @Context() context: { userId: string },
  ): Promise<RejectBudgetResponse> {
    return this.annualBudgetService.reject(id, data.reason, context.userId);
  }

  @Mutation(() => RequestRevisionBudgetResponse)
  @Permission()
  async requestRevisionAnnualBudget(
    @Args('id') id: string,
    @Args('data') data: RequestRevisionAnnualBudgetDto,
    @Context() context: { userId: string },
  ): Promise<RequestRevisionBudgetResponse> {
    return this.annualBudgetService.requestRevision(id, data.revision_notes, context.userId);
  }

  @Mutation(() => ToggleLockBudgetResponse)
  @Permission()
  async toggleBudgetLock(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<ToggleLockBudgetResponse> {
    return this.annualBudgetService.toggleLock(id, context.userId);
  }

  @Mutation(() => RecalculateAllocatedAmountsResponse)
  @Permission()
  async recalculateInstitutionAllocatedAmounts(): Promise<RecalculateAllocatedAmountsResponse> {
    return this.annualBudgetService.recalculateAllAllocatedAmounts();
  }

  // ============================================
  // INSTITUTION BUDGET SPECIFIC MUTATIONS
  // ============================================

  @Mutation(() => AnnualBudget)
  @Permission()
  async createInstitutionBudget(
    @Args('data') data: InstitutionBudgetCreateDto,
    @Context() context: { userId: string }
  ): Promise<AnnualBudget> {
    return this.annualBudgetService.createInstitutionBudget(data, context.userId);
  }

  @Mutation(() => AnnualBudget)
  @Permission()
  async updateInstitutionBudget(
    @Args('id') id: string,
    @Args('data') data: InstitutionBudgetUpdateDto,
    @Context() context: { userId: string }
  ): Promise<AnnualBudget> {
    return this.annualBudgetService.updateInstitutionBudget(id, data, context.userId);
  }

  // ============================================
  // DEPARTMENT BUDGET SPECIFIC MUTATIONS
  // ============================================

  @Mutation(() => AnnualBudget)
  @Permission()
  async createDepartmentBudget(
    @Args('data') data: DepartmentBudgetCreateDto,
    @Context() context: { userId: string }
  ): Promise<AnnualBudget> {
    return this.annualBudgetService.createDepartmentBudget(data, context.userId);
  }

  @Mutation(() => AnnualBudget)
  @Permission()
  async updateDepartmentBudget(
    @Args('id') id: string,
    @Args('data') data: DepartmentBudgetUpdateDto,
    @Context() context: { userId: string }
  ): Promise<AnnualBudget> {
    return this.annualBudgetService.updateDepartmentBudget(id, data, context.userId);
  }

}
