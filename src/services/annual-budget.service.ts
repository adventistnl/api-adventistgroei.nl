import { Injectable } from '@nestjs/common';
import { AnnualBudget } from '@prisma/client';
import { FindManyAnnualBudgetArgs } from 'src/@generated/annual-budget/find-many-annual-budget.args';
import { AnnualBudgetCreateDto, AnnualBudgetUpdateDto } from 'src/dto/annual_budget.dto';
import { BudgetKPIs, DepartmentSpending, SpendingOverTime, BudgetDistribution, EntityDistribution } from 'src/dto/budget-analytics.dto';
import { AnnualBudgetRepository } from 'src/repositories/annual-budget.repository';

@Injectable()
export class AnnualBudgetService {
  constructor(private readonly annualBudgetRepository: AnnualBudgetRepository) {}

  async create(data: AnnualBudgetCreateDto, userId: string): Promise<AnnualBudget> {
    return this.annualBudgetRepository.create(data, userId);
  }

  async update(id: string, data: AnnualBudgetUpdateDto, userId: string): Promise<AnnualBudget> {
    return this.annualBudgetRepository.update(id, data, userId);
  }

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

  async getBudgetKPIs(year: number): Promise<BudgetKPIs> {
    // Buscar todos os budgets do ano
    const budgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        is_deleted: { equals: false }
      }
    });

    // Calcular totais baseados nos dados reais
    const totalInstitutionBudget = budgets.reduce((sum, budget) =>
      sum + Number(budget.planned_budget), 0
    );

    const totalAllocated = budgets.reduce((sum, budget) =>
      sum + Number(budget.total_expenses), 0);

    const totalSpent = budgets.reduce((sum, budget) =>
      sum + Number(budget.total_expenses), 0
    );

    const budgetRemaining = totalInstitutionBudget - totalSpent;
    const budgetUtilization = totalInstitutionBudget > 0 ?
      (totalSpent / totalInstitutionBudget) * 100 : 0;

    // Contar departments únicos
    const departmentIds = new Set(
      budgets
        .filter(budget => budget.department_id)
        .map(budget => budget.department_id)
    );

    return {
      totalInstitutionBudget,
      totalAllocated,
      totalSpent,
      budgetRemaining,
      budgetUtilization: Math.round(budgetUtilization * 100) / 100, // Arredondar para 2 casas
      activeDepartments: departmentIds.size
    };
  }

  async getDepartmentSpending(year: number): Promise<DepartmentSpending[]> {
    // TODO: Implementar cálculo real baseado em dados de departments e transações
    // Por enquanto retorna dados mockados baseados nos budgets existentes
    // Em uma implementação completa, isso seria calculado a partir dos dados reais
    const budgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        is_deleted: { equals: false }
      }
    });

    // TODO: Substituir por consulta real aos departments do banco de dados
    // Simular dados baseados nos budgets encontrados
    const departments = ['Finance', 'Operations', 'HR', 'IT', 'Marketing'];
    const result: DepartmentSpending[] = [];

    departments.forEach((deptName, index) => {
      const baseBudget = budgets.length > 0 ?
        Number(budgets[index % budgets.length].planned_budget) / departments.length : 10000;

      result.push({
        name: deptName,
        planned: Math.round(baseBudget),
        approved: Math.round(baseBudget * 0.9),
        reserved: Math.round(baseBudget * 0.1),
        institution: 'Main Institution'
      });
    });

    return result.sort((a, b) => b.planned - a.planned);
  }

  getSpendingOverTime(year: number): SpendingOverTime[] {
    // TODO: Implementar consulta real a dados históricos mensais de transações
    // Como não temos dados históricos mensais, vamos simular baseado nos budgets
    // e criar uma distribuição mensal aproximada
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // TODO: Substituir por valores reais calculados a partir de transações mensais
    // Valores base para simulação (em um sistema real, isso viria de transações mensais)
    const baseValues = {
      finance: 8000,
      operations: 12000,
      hr: 5000,
      it: 4000,
      marketing: 6000
    };

    return months.map((month, index) => {
      // TODO: Remover variação aleatória e usar dados reais
      // Adicionar variação mensal (+/- 20%)
      const variation = 0.8 + Math.random() * 0.4; // 0.8 to 1.2

      return {
        date: `${year}-${String(index + 1).padStart(2, '0')}-01`,
        month,
        finance: Math.round(baseValues.finance * variation),
        operations: Math.round(baseValues.operations * variation),
        hr: Math.round(baseValues.hr * variation),
        it: Math.round(baseValues.it * variation),
        marketing: Math.round(baseValues.marketing * variation)
      };
    });
  }

  async getBudgetDistribution(year: number): Promise<BudgetDistribution> {
    // Buscar todos os budgets do ano
    const budgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        is_deleted: { equals: false }
      }
    });

    const total = budgets.reduce((sum, budget) =>
      sum + Number(budget.planned_budget), 0
    );

    // Calcular valores alocados (utilizados) - baseado no total_expenses
    const allocated = budgets.reduce((sum, budget) =>
      sum + Number(budget.total_expenses), 0
    );

    const remaining = total - allocated;
    const percentageUsed = total > 0 ? (allocated / total) * 100 : 0;

    return {
      total,
      allocated,
      remaining: Math.max(0, remaining), // Garante que não seja negativo
      percentageUsed: Math.round(percentageUsed * 100) / 100
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
      budget => budget.approved_amount !== null && Number(budget.approved_amount) > 0
    );

    // Agrupar por entity_type e somar os valores
    const groupedByType = approvedBudgets.reduce((acc, budget) => {
      const type = budget.entity_type as string;
      if (!acc[type]) {
        acc[type] = { total: 0, count: 0 };
      }
      acc[type].total += Number(budget.approved_amount);
      acc[type].count += 1;
      return acc;
    }, {} as Record<string, { total: number; count: number }>);

    // Calcular o total alocado para percentuais
    const totalAllocated = Object.values(groupedByType).reduce((sum, group) => sum + group.total, 0);

    // Converter para o formato de resposta
    const entities: EntityDistribution[] = Object.entries(groupedByType).map(([type, { total, count }]) => ({
      name: type.charAt(0).toUpperCase() + type.slice(1),
      amount: total,
      percentage: totalAllocated > 0 ? Math.round((total / totalAllocated) * 100) : 0,
      count
    }));

    // Ordenar por valor decrescente
    return entities.sort((a, b) => b.amount - a.amount);
  }
}
