import { Injectable } from '@nestjs/common';
import { AnnualBudget } from '@prisma/client';
import { FindManyAnnualBudgetArgs } from 'src/@generated/annual-budget/find-many-annual-budget.args';
import { BudgetKPIs, DepartmentSpending, SpendingOverTime, BudgetDistribution, EntityDistribution } from 'src/dto/budget-analytics.dto';
import { AnnualBudgetRepository } from 'src/repositories/annual-budget.repository';
import { DepartmentRepository } from 'src/repositories/department.repository';
import { DecimalHelper } from 'src/common/helpers/decimal.helper'; // New import
import { Decimal } from '@prisma/client/runtime/library'; // New import


@Injectable()
export class AnnualBudgetService {
  constructor(
    private readonly annualBudgetRepository: AnnualBudgetRepository,
    private readonly departmentRepository: DepartmentRepository
  ) {}

  async delete(id: string, userId: string): Promise<{ success: boolean; message: string }> {
    return this.annualBudgetRepository.delete(id, userId);
  }

  async approve(id: string, dto: { approved_amount?: number; notes?: string }, userId: string): Promise<{
    id: string;
    status: string;
    approved_amount: number | null;
    approval_date: Date | null;
    approved_by: string | null;
    notes: string | null;
    updated_at: Date;
  }> {
    return this.annualBudgetRepository.approve(id, dto, userId);
  }

  async reject(id: string, reason: string, userId: string): Promise<{
    id: string;
    status: string;
    review_date: Date;
    reviewed_by: string;
    notes: string | null;
    updated_at: Date;
  }> {
    return this.annualBudgetRepository.reject(id, reason, userId);
  }

  async requestRevision(id: string, revisionNotes: string, userId: string): Promise<{
    id: string;
    status: string;
    review_date: Date;
    reviewed_by: string;
    notes: string | null;
    updated_at: Date;
  }> {
    return this.annualBudgetRepository.requestRevision(id, revisionNotes, userId);
  }

  async toggleLock(id: string, userId: string): Promise<{
    id: string;
    is_locked: boolean;
    updated_at: Date;
  }> {
    return this.annualBudgetRepository.toggleLock(id, userId);
  }

  async findMany(args: FindManyAnnualBudgetArgs): Promise<AnnualBudget[]> {
    return this.annualBudgetRepository.findMany(args);
  }

  async findById(id: string): Promise<AnnualBudget | null> {
    return this.annualBudgetRepository.findById(id);
  }

  async getBudgetKPIs(year: number, institutionId: string): Promise<BudgetKPIs> {
    // Buscar apenas os budgets da instituição do ano especificado
    const budgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        institution_id: { equals: institutionId },
        entity_type: { equals: 'INSTITUTION' },
        is_deleted: { equals: false }
      }
    });

    if (!budgets || budgets.length === 0) {
      return {
        totalInstitutionBudget: 0,
        totalAllocated: 0,
        totalSpent: 0,
        budgetRemaining: 0,
        budgetUtilization: 0,
        activeDepartments: 0
      };
    }

    // Calcular totais baseados nos dados reais do budget da instituição
    const totalInstitutionBudget = DecimalHelper.toDecimal(budgets[0].planned_budget);
    const totalAllocated = DecimalHelper.toDecimal(budgets[0].allocated_amount);
    const totalSpent = DecimalHelper.toDecimal(budgets[0].total_expenses);

    // budgetRemaining = saldo restante do orçamento da instituição
    const budgetRemaining = DecimalHelper.toDecimal(budgets[0].balance);

    // budgetUtilization = % do budget que foi utilizado (alocado + gasto)
    // = ((allocated_amount + total_expenses) / planned_budget) * 100
    const utilizationRaw = totalInstitutionBudget.isPositive() 
      ? totalAllocated.plus(totalSpent).dividedBy(totalInstitutionBudget).times(100)
      : new Decimal(0);

    // Contar quantos departamentos têm budget ativo para este ano
    const departmentBudgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        institution_id: { equals: institutionId },
        entity_type: { equals: 'INSTITUTION_DEPARTMENT' },
        is_deleted: { equals: false }
      }
    });
    const activeDepartments = departmentBudgets.length;

    return {
      totalInstitutionBudget: totalInstitutionBudget.toNumber(),
      totalAllocated: totalAllocated.toNumber(),
      totalSpent: totalSpent.toNumber(),
      budgetRemaining: budgetRemaining.toNumber(),
      budgetUtilization: DecimalHelper.round(utilizationRaw, 2).toNumber(),
      activeDepartments
    };
  }

  async getDepartmentSpending(year: number, institutionId: string): Promise<DepartmentSpending[]> {
    // Buscar todos os budgets dos departamentos da instituição para o ano especificado
    const departmentBudgets = await this.annualBudgetRepository.findManyWithRelations({
      where: {
        year: { equals: year },
        institution_id: { equals: institutionId },
        entity_type: { equals: 'INSTITUTION_DEPARTMENT' },
        is_deleted: { equals: false }
      }
    });

    // Mapear para o formato esperado
    return departmentBudgets
      .filter(budget => budget.department)
      .map(budget => ({
        name: budget.department?.name || 'Unknown Department',
        planned: DecimalHelper.toDecimal(budget.planned_budget).toNumber(),
        approved: DecimalHelper.toDecimal(budget.approved_amount).toNumber(),
        reserved: DecimalHelper.toDecimal(budget.allocated_amount).toNumber(), // Reserved = Allocated (not yet spent)
        spent: DecimalHelper.toDecimal(budget.total_expenses).toNumber(), // Spent = Total expenses (already used)
        available: DecimalHelper.toDecimal(budget.balance).toNumber(), // Available = Balance (not allocated)
        institution: institutionId
      }));
  }

  async getSpendingOverTime(year: number, institutionId: string): Promise<SpendingOverTime[]> {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Buscar todos os budgets dos departamentos da instituição para o ano especificado
    const departmentBudgets = await this.annualBudgetRepository.findManyWithRelations({
      where: {
        year: { equals: year },
        institution_id: { equals: institutionId },
        entity_type: { equals: 'INSTITUTION_DEPARTMENT' },
        is_deleted: { equals: false }
      }
    });

    // Filtrar apenas budgets com department válido
    const validBudgets = departmentBudgets.filter(budget => budget.department);

    // Criar estrutura de dados mensal
    return months.map((month, index) => {
      const monthDate = `${year}-${String(index + 1).padStart(2, '0')}-01`;
      
      // Para cada departamento, usar o valor atual de total_expenses
      // Como não temos histórico mensal, mostramos o valor atual em cada mês
      const departments = validBudgets.map(budget => ({
        departmentId: budget.department_id || '',
        departmentName: budget.department?.name || 'Unknown Department',
        amount: DecimalHelper.toDecimal(budget.total_expenses).toNumber()
      }));

      return {
        date: monthDate,
        month,
        departments
      };
    });
  }

  async getBudgetDistribution(year: number, institutionId: string): Promise<BudgetDistribution> {
    // Buscar budget da instituição - COLETAR todos os dados diretamente (não calcular)
    const institutionBudgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        institution_id: { equals: institutionId },
        entity_type: { equals: 'INSTITUTION' },
        is_deleted: { equals: false }
      }
    });

    // COLETAR todos os valores diretamente do budget da instituição
    const total = DecimalHelper.sum(institutionBudgets.map(b => b.planned_budget));
    const spent = DecimalHelper.sum(institutionBudgets.map(b => b.total_expenses));
    const allocated = DecimalHelper.sum(institutionBudgets.map(b => b.allocated_amount));
    const available = DecimalHelper.sum(institutionBudgets.map(b => b.balance));

    const percentageUsed = total.isPositive() 
      ? spent.plus(allocated).dividedBy(total).times(100) 
      : new Decimal(0);

    return {
      total: total.toNumber(),
      spent: spent.toNumber(),
      allocated: allocated.toNumber(),
      available: Decimal.max(0, available).toNumber(), // Garante que não seja negativo
      percentageUsed: DecimalHelper.round(percentageUsed, 2).toNumber()
    };
  }

  async getEntityDistribution(year: number): Promise<EntityDistribution[]> {
    // Buscar todos os budgets aprovados do ano
    const budgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        status: { equals: 'APPROVED' },
        is_deleted: { equals: false }
      }
    });

    // Filtrar apenas budgets com approved_amount válido
    const approvedBudgets = budgets.filter(
      budget => budget.approved_amount !== null && DecimalHelper.toDecimal(budget.approved_amount).gt(0)
    );

    // Agrupar por entity_type e somar os valores
    const groupedByType = approvedBudgets.reduce((acc, budget) => {
      const type = budget.entity_type as string;
      if (!acc[type]) {
        acc[type] = { total: new Decimal(0), count: 0 };
      }
      acc[type].total = acc[type].total.plus(DecimalHelper.toDecimal(budget.approved_amount));
      acc[type].count += 1;
      return acc;
    }, {} as Record<string, { total: Decimal; count: number }>);

    // Calcular o total alocado para percentuais
    const totalAllocated = Object.values(groupedByType).reduce((sum, group) => sum.plus(group.total), new Decimal(0));

    // Converter para o formato de resposta
    const entities: EntityDistribution[] = Object.entries(groupedByType).map(([type, { total, count }]) => ({
      name: type.charAt(0).toUpperCase() + type.slice(1),
      amount: total.toNumber(),
      percentage: totalAllocated.isPositive() 
        ? total.dividedBy(totalAllocated).times(100).round().toNumber() 
        : 0,
      count
    }));

    // Ordenar por valor decrescente
    return entities.sort((a, b) => b.amount - a.amount);
  }

  async getInstitutionalDepartmentsKPIs(year: number, institutionId: string) {
    // Buscar TODOS os departamentos da instituição (não deletados)
    const allDepartments = await this.departmentRepository.findByInstitution(institutionId);

    // Filtrar apenas departamentos INSTITUCIONAIS (church_id === null)
    const institutionalDepartments = allDepartments.filter(dept => dept.church_id === null);

    // Buscar budgets dos departamentos para o ano especificado
    const departmentBudgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        institution_id: { equals: institutionId },
        entity_type: { equals: 'INSTITUTION_DEPARTMENT' },
        is_deleted: { equals: false }
      }
    });

    // COLETAR os valores agregados dos departamentos
    const totalPlanned = DecimalHelper.sum(departmentBudgets.map(b => b.planned_budget));
    const totalAllocated = DecimalHelper.sum(departmentBudgets.map(b => b.allocated_amount));
    const totalSpent = DecimalHelper.sum(departmentBudgets.map(b => b.total_expenses));
    const totalAvailable = DecimalHelper.sum(departmentBudgets.map(b => b.balance));

    // Total de departamentos = TODOS os departamentos INSTITUCIONAIS (não de igrejas)
    const totalDepartments = institutionalDepartments.length;

    // Departamentos com budget = apenas os que têm budget no ano atual
    const departmentsWithBudget = departmentBudgets.filter(
      budget => DecimalHelper.toDecimal(budget.planned_budget).gt(0)
    ).length;

    return {
      totalPlanned: totalPlanned.toNumber(),
      totalAllocated: totalAllocated.toNumber(),
      totalSpent: totalSpent.toNumber(),
      totalAvailable: totalAvailable.toNumber(),
      totalDepartments,
      departmentsWithBudget
    };
  }

  async recalculateAllAllocatedAmounts(): Promise<{ updated: number; message: string }> {
    return this.annualBudgetRepository.recalculateAllInstitutionAllocatedAmounts();
  }

  // ============================================
  // INSTITUTION BUDGET SPECIFIC METHODS
  // ============================================

  async createInstitutionBudget(data: any, userId: string): Promise<AnnualBudget> {
    return this.annualBudgetRepository.createInstitutionBudget(data, userId);
  }

  async updateInstitutionBudget(id: string, data: any, userId: string): Promise<AnnualBudget> {
    return this.annualBudgetRepository.updateInstitutionBudget(id, data, userId);
  }

  // ============================================
  // DEPARTMENT BUDGET SPECIFIC METHODS
  // ============================================

  async createDepartmentBudget(data: any, userId: string): Promise<AnnualBudget> {
    return this.annualBudgetRepository.createDepartmentBudget(data, userId);
  }

  async updateDepartmentBudget(id: string, data: any, userId: string): Promise<AnnualBudget> {
    return this.annualBudgetRepository.updateDepartmentBudget(id, data, userId);
  }

  async updateBudgetFinancials(
    departmentId: string,
    year: number,
    deltaAllocated: number,
    deltaSpent: number,
    userId: string,
    transactionContext?: {
      type: 'ALLOCATION_RESERVED' | 'ALLOCATION_RELEASED' | 'EXPENSE_APPROVED' | 'REFUND_TOTAL' | 'REFUND_PARTIAL' | 'MANUAL_ADJUSTMENT' | 'INITIAL_BALANCE';
      description?: string;
      project_id?: string;
      subsidy_request_id?: string;
    }
  ): Promise<void> {
    return this.annualBudgetRepository.updateBudgetFinancials(
      departmentId,
      year,
      deltaAllocated,
      deltaSpent,
      userId,
      transactionContext as any
    );
  }
}
