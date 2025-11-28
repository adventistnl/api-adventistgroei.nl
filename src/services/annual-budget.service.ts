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

    // Calcular totais baseados nos dados reais do budget da instituição
    const totalInstitutionBudget = (budgets[0].planned_budget as unknown as number) || 0

    const totalAllocated = (budgets[0].total_expenses as unknown as number) || 0

    const totalSpent = (budgets[0].total_expenses as unknown as number) || 0

    const budgetRemaining = totalInstitutionBudget - totalSpent;
    const budgetUtilization = totalInstitutionBudget > 0 ?
      (totalSpent / totalInstitutionBudget) * 100 : 0;

    // Para budgets da instituição, não há departments específicos
    // O activeDepartments será 0 pois são budgets da instituição principal
    return {
      totalInstitutionBudget,
      totalAllocated,
      totalSpent,
      budgetRemaining,
      budgetUtilization: Math.round(budgetUtilization * 100) / 100, // Arredondar para 2 casas
      activeDepartments: 0 // Budgets da instituição não têm departments associados
    };
  }

  async getDepartmentSpending(_year: number, _institutionId: string): Promise<DepartmentSpending[]> {
    // Para budgets da instituição, não há departments específicos
    // Retornar array vazio pois os budgets da instituição não têm departments associados
    return await Promise.resolve([]);
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
        amount: Number(budget.total_expenses) || 0
      }));

      return {
        date: monthDate,
        month,
        departments
      };
    });
  }

  async getBudgetDistribution(year: number, institutionId: string): Promise<BudgetDistribution> {
    // Buscar apenas budgets da instituição do ano especificado
    const budgets = await this.annualBudgetRepository.findMany({
      where: {
        year: { equals: year },
        institution_id: { equals: institutionId },
        entity_type: { equals: 'INSTITUTION' },
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
