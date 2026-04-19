import { Injectable } from '@nestjs/common';
import { AnnualBudget } from '@prisma/client';
import { FindManyAnnualBudgetArgs } from 'src/@generated/annual-budget/find-many-annual-budget.args';
import { BudgetKPIs, DepartmentSpending, SpendingOverTime, BudgetDistribution, EntityDistribution } from 'src/dto/budget-analytics.dto';
import { LedgerHistoryEntry, LedgerHistoryFilterInput, LedgerHistoryPaginatedResponse } from 'src/dto/annual_budget.dto';
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

  async getComputedFinancials(budgetIds: string[]): Promise<Record<string, { planned: number, allocated: number, expenses: number, balance: number }>> {
    return this.annualBudgetRepository.getComputedFinancials(budgetIds);
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

    // Calcular totais baseados nos dados reais do budget da instituição dinamicamente (Ledger-based)
    const financialsMap = await this.annualBudgetRepository.getComputedFinancials([budgets[0].id]);
    const budgetFin = financialsMap[budgets[0].id] || { planned: 0, allocated: 0, expenses: 0, balance: 0 };

    const totalInstitutionBudget = budgetFin.planned;
    const totalAllocated = budgetFin.allocated;
    const totalSpent = budgetFin.expenses;
    const budgetRemaining = budgetFin.balance;

    // budgetUtilization = % do budget que foi utilizado (alocado + gasto)
    const utilizationRaw = totalInstitutionBudget > 0 
      ? ((totalAllocated + totalSpent) / totalInstitutionBudget) * 100
      : 0;

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
      totalInstitutionBudget: totalInstitutionBudget,
      totalAllocated: totalAllocated,
      totalSpent: totalSpent,
      budgetRemaining: budgetRemaining,
      budgetUtilization: DecimalHelper.round(new Decimal(utilizationRaw), 2).toNumber(),
      activeDepartments
    };
  }

  async getDepartmentSpending(year: number, institutionId: string): Promise<DepartmentSpending[]> {
    // Buscar todos os budgets dos departamentos da instituição para o ano especificado
    const departmentBudgets = await this.annualBudgetRepository.findManyWithRelations({
      where: {
        year: { equals: year },
        entity_type: { equals: 'INSTITUTION_DEPARTMENT' },
        is_deleted: { equals: false },
        department: {
          is: {
            institution_id: { equals: institutionId }
          }
        }
      }
    });

    const budgetIds = departmentBudgets.map(b => b.id);
    const financialsMap = await this.annualBudgetRepository.getComputedFinancials(budgetIds);

    // Mapear para o formato esperado
    return departmentBudgets
      .filter(budget => budget.department)
      .map(budget => {
        const fin = financialsMap[budget.id] || { planned: 0, allocated: 0, expenses: 0, balance: 0 };
        return {
          name: budget.department?.name || 'Unknown Department',
          planned: fin.planned,
          approved: DecimalHelper.toDecimal(budget.approved_amount).toNumber(), // approved usually doesn't have a ledger, it's a fixed snapshot
          reserved: fin.allocated,
          spent: fin.expenses, 
          available: fin.balance, 
          institution: institutionId
        };
      });
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
        entity_type: { equals: 'INSTITUTION_DEPARTMENT' },
        is_deleted: { equals: false },
        department: {
          is: {
            institution_id: { equals: institutionId }
          }
        }
      }
    });

    // Filtrar apenas budgets com department válido
    const validBudgets = departmentBudgets.filter(budget => budget.department);

    // Buscar todas as transações de despesas atreladas a esses orçamentos
    const budgetIds = validBudgets.map(b => b.id);
    let transactions: any[] = [];
    
    if (budgetIds.length > 0) {
       transactions = await this.annualBudgetRepository.getBudgetTransactions(budgetIds);
    }

    // Agrupar despesas por mês (0 a 11) e por budget_id
    const monthlyData: Record<number, Record<string, number>> = {};
    for (let i = 0; i < 12; i++) monthlyData[i] = {};

    for (const tx of transactions) {
      const txYear = tx.created_at.getFullYear();
      if (txYear !== year) continue; // Garante que a transação ocorreu no ano referenciado do gráfico
      
      const monthIdx = tx.created_at.getMonth();
      const bId = tx.annual_budget_id;
      const expense = DecimalHelper.toDecimal(tx.delta_expenses).toNumber();
      
      monthlyData[monthIdx][bId] = (monthlyData[monthIdx][bId] || 0) + expense;
    }

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // Criar estrutura de dados mensal
    return months.map((month, index) => {
      const isFuture = (year > currentYear) || (year === currentYear && index > currentMonth);
      const monthDate = `${year}-${String(index + 1).padStart(2, '0')}-01`;
      
      const departments = validBudgets.map(budget => {
        const monthAmount = monthlyData[index][budget.id] || 0;
        
        return {
          departmentId: budget.department_id || '',
          departmentName: budget.department?.name || 'Unknown Department',
          amount: isFuture ? 0 : monthAmount
        };
      });

      return {
        date: monthDate,
        month,
        departments
      };
    });
  }

  async getBudgetDistribution(year: number, institutionId: string): Promise<BudgetDistribution> {
    // Buscar budget da instituição
    const institutionBudgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        institution_id: { equals: institutionId },
        entity_type: { equals: 'INSTITUTION' },
        is_deleted: { equals: false }
      }
    });

    if (institutionBudgets.length === 0) {
      return { total: 0, spent: 0, allocated: 0, available: 0, percentageUsed: 0 };
    }

    const financialsMap = await this.annualBudgetRepository.getComputedFinancials([institutionBudgets[0].id]);
    const fin = financialsMap[institutionBudgets[0].id] || { planned: 0, allocated: 0, expenses: 0, balance: 0 };

    const percentageUsed = fin.planned > 0 
      ? ((fin.expenses + fin.allocated) / fin.planned) * 100 
      : 0;

    return {
      total: fin.planned,
      spent: fin.expenses,
      allocated: fin.allocated,
      available: Decimal.max(0, fin.balance).toNumber(),
      percentageUsed: DecimalHelper.round(new Decimal(percentageUsed), 2).toNumber()
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

    // COLETAR os valores agregados dos departamentos processados pelo Ledger
    const budgetIds = departmentBudgets.map(b => b.id);
    const financialsMap = await this.annualBudgetRepository.getComputedFinancials(budgetIds);

    let totalPlanned = 0;
    let totalAllocated = 0;
    let totalSpent = 0;
    let totalAvailable = 0;

    for (const budget of departmentBudgets) {
      const fin = financialsMap[budget.id] || { planned: 0, allocated: 0, expenses: 0, balance: 0 };
      totalPlanned += fin.planned;
      totalAllocated += fin.allocated;
      totalSpent += fin.expenses;
      totalAvailable += fin.balance;
    }

    // Total de departamentos = TODOS os departamentos INSTITUCIONAIS (não de igrejas)
    const totalDepartments = institutionalDepartments.length;

    // Departamentos com budget = apenas os que têm budget no ano atual
    const departmentsWithBudget = departmentBudgets.filter(
      budget => DecimalHelper.toDecimal(budget.planned_budget).gt(0)
    ).length;

    return {
      totalPlanned,
      totalAllocated,
      totalSpent,
      totalAvailable,
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
  async getLedgerHistory(filters: LedgerHistoryFilterInput): Promise<LedgerHistoryPaginatedResponse> {
    return this.annualBudgetRepository.getLedgerHistory(filters);
  }
}
