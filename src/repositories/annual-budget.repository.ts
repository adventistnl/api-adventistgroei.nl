import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AnnualBudget } from '@prisma/client';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { AnnualBudgetEntityType } from 'src/@generated/prisma/annual-budget-entity-type.enum';
import { AnnualBudgetStatus } from 'src/@generated/prisma/annual-budget-status.enum';
import { AnnualBudgetPriority } from 'src/@generated/prisma/annual-budget-priority.enum';
import { AnnualBudgetCategory } from 'src/@generated/prisma/annual-budget-category.enum';
import { FindManyAnnualBudgetArgs } from 'src/@generated/annual-budget/find-many-annual-budget.args';
import { BudgetTransactionType } from '@prisma/client';
import { LedgerHistoryEntry, LedgerHistoryFilterInput, LedgerHistoryPaginatedResponse } from 'src/dto/annual_budget.dto';

@Injectable()
export class AnnualBudgetRepository {
  private readonly logger = new Logger(AnnualBudgetRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async findManyByFilters(filters: Partial<Record<keyof AnnualBudget, any>>): Promise<AnnualBudget[]> {
    const allowedKeys: (keyof AnnualBudget)[] = [
      'year',
      'church_id',
      'institution_id',
      'department_id',
    ]
    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof AnnualBudget)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }
    return this.prisma.annualBudget.findMany({
      where: {
        ...filters,
      },
    });
  }

  async findMany(args: FindManyAnnualBudgetArgs): Promise<AnnualBudget[]> {
    return this.prisma.annualBudget.findMany(args);
  }

  async findById(id: string): Promise<AnnualBudget | null> {
    return this.prisma.annualBudget.findUnique({
      where: { id },
    });
  }

  async executeRawQuery(query: string, params: any[] = []): Promise<any> {
    return this.prisma.$queryRawUnsafe(query, ...params);
  }

  async getBudgetTransactions(budgetIds: string[]): Promise<any[]> {
    if (budgetIds.length === 0) return [];
    return this.prisma.budgetTransaction.findMany({
      where: {
        annual_budget_id: { in: budgetIds }
      },
      select: {
        annual_budget_id: true,
        delta_expenses: true,
        created_at: true
      }
    });
  }

  async findManyWithRelations(args: FindManyAnnualBudgetArgs): Promise<any[]> {
    return this.prisma.annualBudget.findMany({
      ...args,
      include: {
        department: true,
        institution: true,
        church: true
      }
    });
  }

  async delete(id: string, userId: string): Promise<{ success: boolean; message: string }> {
    // Verificar se o orçamento existe
    const existingBudget = await this.prisma.annualBudget.findUnique({
      where: { id },
      include: {
        department: {
          select: { institution_id: true }
        }
      }
    });

    if (!existingBudget) {
      throw new NotFoundException(`Annual budget with ID '${id}' not found.`);
    }

    // Verificar se o orçamento pode ser excluído (apenas DRAFT ou REJECTED)
    if (existingBudget.status !== AnnualBudgetStatus.DRAFT && existingBudget.status !== AnnualBudgetStatus.REJECTED) {
      throw new CustomGraphQLError(
        'Cannot delete an annual budget that is not in DRAFT or REJECTED status.',
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Usar transação para garantir consistência dos dados
    return this.prisma.$transaction(async (tx) => {
      // Soft delete: marcar como deletado
      await tx.annualBudget.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Se for um orçamento de departamento de instituição, não há mais campos legados para limpar.
      // O ledger (BudgetTransaction) é a fonte de verdade — nenhuma ação adicional aqui.
      if (existingBudget.entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT &&
          existingBudget.department?.institution_id) {
        // Nothing to do — allocated_amount was a legacy computed column, now removed.
      }

      return {
        success: true,
        message: 'Annual budget deleted successfully.',
      };
    });
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
    // Verificar se o orçamento existe
    const existingBudget = await this.prisma.annualBudget.findUnique({
      where: { id },
    });

    if (!existingBudget) {
      throw new NotFoundException(`Annual budget with ID '${id}' not found.`);
    }

    // Verificar se o orçamento pode ser aprovado (apenas SUBMITTED)
    if (existingBudget.status !== AnnualBudgetStatus.SUBMITTED) {
      throw new CustomGraphQLError(
        'Cannot approve an annual budget that is not in SUBMITTED status.',
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // approved_amount validation: if provided, assume it is already validated upstream
    // (allocated_amount column was removed; approved_amount can be any value <= planned_budget)
    if (dto.approved_amount !== undefined && dto.approved_amount > Number(existingBudget.planned_budget)) {
      throw new CustomGraphQLError(
        'Approved amount cannot be greater than planned budget.',
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Preparar dados para aprovação
    const updateData: Partial<{
      status: AnnualBudgetStatus;
      approved_amount: number;
      approval_date: Date;
      approved_by: string;
      updated_by: string;
      notes?: string;
    }> = {
      status: AnnualBudgetStatus.APPROVED,
      approved_amount: dto.approved_amount ?? Number(existingBudget.planned_budget),
      approval_date: new Date(),
      approved_by: userId,
      updated_by: userId,
    };

    // Adicionar notas se fornecidas
    if (dto.notes) {
      updateData.notes = dto.notes;
    }

    const updatedBudget = await this.prisma.annualBudget.update({
      where: { id },
      data: updateData,
    });

    return {
      id: updatedBudget.id,
      status: updatedBudget.status,
      approved_amount: updatedBudget.approved_amount ? Number(updatedBudget.approved_amount) : null,
      approval_date: updatedBudget.approval_date,
      approved_by: updatedBudget.approved_by,
      notes: updatedBudget.notes,
      updated_at: updatedBudget.updated_at,
    };
  }

  async reject(id: string, reason: string, userId: string): Promise<{
    id: string;
    status: string;
    review_date: Date;
    reviewed_by: string;
    notes: string | null;
    updated_at: Date;
  }> {
    // Verificar se o orçamento existe
    const existingBudget = await this.prisma.annualBudget.findUnique({
      where: { id },
    });

    if (!existingBudget) {
      throw new NotFoundException(`Annual budget with ID '${id}' not found.`);
    }

    // Verificar se o orçamento pode ser rejeitado (apenas SUBMITTED)
    if (existingBudget.status !== AnnualBudgetStatus.SUBMITTED) {
      throw new CustomGraphQLError(
        'Cannot reject an annual budget that is not in SUBMITTED status.',
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Preparar dados para rejeição
    const updateData: Partial<{
      status: AnnualBudgetStatus;
      review_date: Date;
      reviewed_by: string;
      updated_by: string;
      notes?: string;
    }> = {
      status: AnnualBudgetStatus.REJECTED,
      review_date: new Date(),
      reviewed_by: userId,
      updated_by: userId,
      notes: reason,
    };

    const updatedBudget = await this.prisma.annualBudget.update({
      where: { id },
      data: updateData,
    });

    return {
      id: updatedBudget.id,
      status: updatedBudget.status,
      review_date: updatedBudget.review_date!,
      reviewed_by: updatedBudget.reviewed_by!,
      notes: updatedBudget.notes,
      updated_at: updatedBudget.updated_at,
    };
  }

  async requestRevision(id: string, revisionNotes: string, userId: string): Promise<{
    id: string;
    status: string;
    review_date: Date;
    reviewed_by: string;
    notes: string | null;
    updated_at: Date;
  }> {
    // Verificar se o orçamento existe
    const existingBudget = await this.prisma.annualBudget.findUnique({
      where: { id },
    });

    if (!existingBudget) {
      throw new NotFoundException(`Annual budget with ID '${id}' not found.`);
    }

    // Verificar se o orçamento pode solicitar revisão (apenas REJECTED)
    if (existingBudget.status !== AnnualBudgetStatus.REJECTED) {
      throw new CustomGraphQLError(
        'Cannot request revision for an annual budget that is not in REJECTED status.',
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Verificar se o usuário é o criador original
    if (existingBudget.created_by !== userId) {
      throw new CustomGraphQLError(
        'Only the original creator can request revision for a rejected budget.',
        ErrorCode.UNAUTHORIZED,
        403
      );
    }

    // Preparar dados para solicitação de revisão
    const updateData: Partial<{
      status: AnnualBudgetStatus;
      review_date: Date;
      reviewed_by: string;
      updated_by: string;
      notes?: string;
    }> = {
      status: AnnualBudgetStatus.REVISION_REQUESTED,
      review_date: new Date(),
      reviewed_by: userId,
      updated_by: userId,
      notes: revisionNotes,
    };

    const updatedBudget = await this.prisma.annualBudget.update({
      where: { id },
      data: updateData,
    });

    return {
      id: updatedBudget.id,
      status: updatedBudget.status,
      review_date: updatedBudget.review_date!,
      reviewed_by: updatedBudget.reviewed_by!,
      notes: updatedBudget.notes,
      updated_at: updatedBudget.updated_at,
    };
  }

  async toggleLock(id: string, userId: string): Promise<{
    id: string;
    is_locked: boolean;
    updated_at: Date;
  }> {
    return this.prisma.$transaction(async (tx) => {
      // Verificar se o orçamento existe
      const existingBudget = await tx.annualBudget.findUnique({
        where: { id },
        include: {
          institution: true,
          department: {
            include: {
              institution: true
            }
          }
        }
      });

      if (!existingBudget) {
        throw new NotFoundException(`Annual budget with ID '${id}' not found.`);
      }

      this.logger.log(`Processing toggle lock for budget ${id}, type: ${existingBudget.entity_type}, current lock: ${existingBudget.is_locked}`);

      // Regras de negócio para toggle lock
      let newLockState = !existingBudget.is_locked;

      if (existingBudget.status === AnnualBudgetStatus.APPROVED && existingBudget.is_locked) {
        throw new CustomGraphQLError(
          'Cannot unlock an approved budget.',
          ErrorCode.BAD_REQUEST,
          400
        );
      }

      if (existingBudget.status === AnnualBudgetStatus.SUBMITTED && existingBudget.is_locked) {
        throw new CustomGraphQLError(
          'Cannot unlock a submitted budget.',
          ErrorCode.BAD_REQUEST,
          400
        );
      }

      // Atualizar o orçamento atual
      const updatedBudget = await tx.annualBudget.update({
        where: { id },
        data: {
          is_locked: newLockState,
          updated_by: userId,
        },
      });

      // LÓGICA DE LOCK EM CASCATA:
      // - INSTITUTION lock: Tranca a instituição E todos os departamentos filhos (cascata)
      // - DEPARTMENT lock: Tranca apenas o departamento específico (independente)
      if (existingBudget.entity_type === AnnualBudgetEntityType.INSTITUTION && 
          newLockState === true && 
          existingBudget.institution_id) {
        
        this.logger.log(`Institution budget ${id} is being locked - will also lock department budgets for institution ${existingBudget.institution_id}`);
        
        // Buscar todos os departamentos da instituição
        const departments = await tx.department.findMany({
          where: {
            institution_id: existingBudget.institution_id
          },
          select: { id: true, name: true }
        });

        this.logger.log(`Found ${departments.length} departments for institution ${existingBudget.institution_id}: ${departments.map(d => d.name).join(', ')}`);

        // Trancar todos os orçamentos dos departamentos filhos para o mesmo ano
        if (departments.length > 0) {
          const departmentIds = departments.map(dept => dept.id);
          
          this.logger.log(`Looking for department budgets with department_ids: ${departmentIds.join(', ')} for year ${existingBudget.year}`);
          
          const updatedDepartmentBudgets = await tx.annualBudget.updateMany({
            where: {
              department_id: { in: departmentIds },
              year: existingBudget.year,
              is_deleted: false,
              entity_type: AnnualBudgetEntityType.INSTITUTION_DEPARTMENT
            },
            data: {
              is_locked: true,
              updated_by: userId,
            }
          });

          this.logger.log(`Institution budget ${id} locked - successfully locked ${updatedDepartmentBudgets.count} department budgets out of ${departments.length} departments`);
        } else {
          this.logger.log(`No departments found for institution ${existingBudget.institution_id}`);
        }
      } else if (existingBudget.entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT) {
        this.logger.log(`Department budget ${id} lock state changed - department locks are INDEPENDENT and do not affect other entities`);
        // Departamentos têm lock independente - não afetam instituição nem outros departamentos
      }

      this.logger.log(`Budget ${id} lock state changed to: ${newLockState}`);

      return {
        id: updatedBudget.id,
        is_locked: updatedBudget.is_locked,
        updated_at: updatedBudget.updated_at,
      };
    });
  }

  /**
   * Valida se o orçamento do departamento não excede o disponível da instituição
   */
  private async validateDepartmentBudgetAllocation(
    institutionId: string,
    year: number,
    requestedAmount: number
  ): Promise<void> {
    // Buscar o orçamento da instituição para o ano especificado
    const institutionBudget = await this.prisma.annualBudget.findFirst({
      where: {
        institution_id: institutionId,
        year: year,
        entity_type: AnnualBudgetEntityType.INSTITUTION,
        is_deleted: false
      }
    });

    if (!institutionBudget) {
      throw new CustomGraphQLError(
        `No institution budget found for year ${year}. Please create an institution budget first.`,
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Compute institution financials from ledger
    const institutionFinancials = await this.getComputedFinancials([institutionBudget.id]);
    const instFin = institutionFinancials[institutionBudget.id] || { planned: Number(institutionBudget.planned_budget), allocated: 0, expenses: 0, balance: 0 };
    const availableAmount = instFin.balance;

    if (requestedAmount > availableAmount) {
      throw new CustomGraphQLError(
        `Requested amount (${requestedAmount}) exceeds available institution budget (${availableAmount}).`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }
  }

  /**
   * Valida se o aumento do orçamento do departamento não excede o disponível da instituição (para updates)
   */
  private async validateDepartmentBudgetAllocationForUpdate(
    institutionId: string,
    year: number,
    additionalAmount: number,
    excludeBudgetId: string
  ): Promise<void> {
    // Buscar o orçamento da instituição para o ano especificado
    const institutionBudget = await this.prisma.annualBudget.findFirst({
      where: {
        institution_id: institutionId,
        year: year,
        entity_type: AnnualBudgetEntityType.INSTITUTION,
        is_deleted: false
      }
    });

    if (!institutionBudget) {
      throw new CustomGraphQLError(
        `No institution budget found for year ${year}. Please create an institution budget first.`,
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Compute institution financials from ledger
    const institutionFinancials = await this.getComputedFinancials([institutionBudget.id]);
    const instFin = institutionFinancials[institutionBudget.id] || { planned: Number(institutionBudget.planned_budget), allocated: 0, expenses: 0, balance: 0 };
    const availableAmount = instFin.balance;

    if (additionalAmount > availableAmount) {
      throw new CustomGraphQLError(
        `Additional amount (${additionalAmount}) exceeds available institution budget (${availableAmount}).`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }
  }

  /**
   * Atualiza o valor alocado do orçamento da instituição somando/subtraindo a mudança nos departamentos
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private async updateInstitutionAllocatedAmount(
    _tx: any,
    _institutionId: string,
    _year: number,
    _amountChange?: number,
    _operation?: 'ADD' | 'SUBTRACT'
  ): Promise<void> {
    // No-op: allocated_amount and balance columns were removed from AnnualBudget.
    // Financials are now computed on-the-fly via getComputedFinancials() from BudgetTransaction.
  }

  /**
   * Método público para recalcular os valores alocados de todas as instituições
   */
  async recalculateAllInstitutionAllocatedAmounts(): Promise<{ updated: number; message: string }> {
    let updatedCount = 0;

    return this.prisma.$transaction(async (tx) => {
      // Buscar todas as instituições que têm orçamentos
      const institutionBudgets = await tx.annualBudget.findMany({
        where: {
          entity_type: AnnualBudgetEntityType.INSTITUTION,
          is_deleted: false
        },
        select: {
          institution_id: true,
          year: true
        },
        distinct: ['institution_id', 'year']
      });

      // Recalcular cada combinação de instituição/ano
      for (const budget of institutionBudgets) {
        if (budget.institution_id) {
          await this.updateInstitutionAllocatedAmount(tx, budget.institution_id, budget.year);
          updatedCount++;
        }
      }

      return {
        updated: updatedCount,
        message: `Successfully recalculated allocated amounts for ${updatedCount} institution budgets.`
      };
    });
  }

  // ============================================
  // INSTITUTION BUDGET SPECIFIC METHODS
  // ============================================

  async createInstitutionBudget(
    dto: any, // InstitutionBudgetCreateDto
    userId: string
  ): Promise<AnnualBudget> {
    // Se o frontend enviar institution_id vazio, tentamos resgatar da sessão do usuário
    if (!dto.institution_id || dto.institution_id.trim() === '') {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: { institution_id: true }
      });
      if (user?.institution_id) {
        dto.institution_id = user.institution_id;
      } else {
        throw new CustomGraphQLError(
          'Institution ID is required and cannot be empty.',
          ErrorCode.BAD_REQUEST,
          400
        );
      }
    }

    // Verificar se já existe budget para esta institution/ano
    const existing = await this.prisma.annualBudget.findFirst({
      where: {
        institution_id: dto.institution_id,
        year: dto.year,
        entity_type: AnnualBudgetEntityType.INSTITUTION,
        is_deleted: false
      }
    });

    if (existing) {
      throw new CustomGraphQLError(
        `Institution budget for year ${dto.year} already exists`,
        ErrorCode.CONFLICT,
        409
      );
    }

    const planned = Number(dto.planned_budget);

    return this.prisma.$transaction(async (tx) => {
      const budget = await tx.annualBudget.create({
        data: {
          year: dto.year,
          planned_budget: planned,
          description: dto.description,
          justification: dto.justification,
          priority: dto.priority || AnnualBudgetPriority.MEDIUM,
          category: dto.category || AnnualBudgetCategory.OPERATIONAL,
          notes: dto.notes,
          entity_type: AnnualBudgetEntityType.INSTITUTION,
          institution: { connect: { id: dto.institution_id } },
          created_by: userId,
          updated_by: userId,
          requested_by: userId,
          submitted_date: new Date(),
        } as any
      });

      if (planned > 0) {
        await tx.budgetTransfer.create({
          data: {
            to_budget_id: budget.id,
            amount: planned,
            type: 'INITIAL_FUNDING',
            description: dto.description || 'System: Initial Institution Funding',
            created_by: userId
          }
        });
      }

      return budget;
    });
  }

  async updateInstitutionBudget(
    id: string,
    dto: any, // InstitutionBudgetUpdateDto
    userId: string
  ): Promise<AnnualBudget> {
    // Buscar budget existente
    const existing = await this.prisma.annualBudget.findUnique({
      where: { id }
    });

    if (!existing) {
      throw new CustomGraphQLError(
        `Annual budget with ID '${id}' not found`,
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Verificar se está locked
    if (existing.is_locked) {
      throw new CustomGraphQLError(
        `Cannot update locked budget`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Verificar se é institution budget
    if (existing.entity_type !== AnnualBudgetEntityType.INSTITUTION) {
      throw new CustomGraphQLError(
        `Budget ${id} is not an institution budget`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // These fields are now computed from BudgetTransaction; only planned_budget is editable here
    const currentPlanned = Number(existing.planned_budget);
    const newPlanned = dto.planned_budget !== undefined ? Number(dto.planned_budget) : currentPlanned;

    const updateData: any = {
      updated_by: userId,
    };

    if (dto.planned_budget !== undefined) updateData.planned_budget = newPlanned;
    if (dto.description !== undefined) updateData.description = dto.description;
    if (dto.justification !== undefined) updateData.justification = dto.justification;
    if (dto.priority !== undefined) updateData.priority = dto.priority;
    if (dto.category !== undefined) updateData.category = dto.category;
    if (dto.notes !== undefined) updateData.notes = dto.notes;
    if (dto.documents !== undefined) updateData.documents = dto.documents;

    return this.prisma.$transaction(async (tx) => {
      const budget = await tx.annualBudget.update({
        where: { id },
        data: updateData
      });

      if (dto.planned_budget !== undefined && newPlanned !== currentPlanned) {
        const delta = newPlanned - currentPlanned;
        if (delta > 0) {
          await tx.budgetTransfer.create({
            data: {
              to_budget_id: id,
              amount: delta,
              type: 'INITIAL_FUNDING',
              description: 'System: Institution Funding Increased',
              created_by: userId
            }
          });
        } else if (delta < 0) {
          await tx.budgetTransfer.create({
            data: {
              from_budget_id: id,
              amount: Math.abs(delta),
              type: 'REDUCTION',
              description: 'System: Institution Funding Reduced',
              created_by: userId
            }
          });
        }
      }

      // Manual adjustments for expenses/allocated via BudgetTransaction
      const expensesDelta = dto.total_expenses !== undefined ? (Number(dto.total_expenses) - 0) : 0;
      const allocatedDelta = dto.allocated_amount !== undefined ? (Number(dto.allocated_amount) - 0) : 0;
      if (expensesDelta !== 0 || allocatedDelta !== 0) {
        await tx.budgetTransaction.create({
          data: {
            annual_budget_id: id,
            type: 'MANUAL_ADJUSTMENT',
            delta_expenses: expensesDelta,
            delta_allocated: allocatedDelta,
            description: dto.description || 'System: Manual Expenses/Allocations Adjustment',
            created_by: userId
          }
        });
      }

      return budget;
    });
  }

  // ============================================
  // DEPARTMENT BUDGET SPECIFIC METHODS
  // ============================================

  async createDepartmentBudget(
    dto: any, // DepartmentBudgetCreateDto
    userId: string
  ): Promise<AnnualBudget> {
    // Buscar department para pegar institution_id
    const department = await this.prisma.department.findUnique({
      where: { id: dto.department_id },
      select: { institution_id: true }
    });

    if (!department || !department.institution_id) {
      throw new CustomGraphQLError(
        `Department not found or not linked to institution`,
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Buscar institution budget
    const institutionBudget = await this.prisma.annualBudget.findFirst({
      where: {
        institution_id: department.institution_id,
        year: dto.year,
        entity_type: AnnualBudgetEntityType.INSTITUTION,
        is_deleted: false
      }
    });

    if (!institutionBudget) {
      throw new CustomGraphQLError(
        `Institution budget for year ${dto.year} not found. Create institution budget first.`,
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Verificar se institution budget está locked
    if (institutionBudget.is_locked) {
      throw new CustomGraphQLError(
        `Cannot create department budget when institution budget is locked`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    const planned = Number(dto.planned_budget);

    // Validate institution availability using computed ledger financials
    const institutionFinancials = await this.getComputedFinancials([institutionBudget.id]);
    const instFin = institutionFinancials[institutionBudget.id] || { allocated: 0, expenses: 0, balance: 0 };
    const available = instFin.balance;

    if (planned > available) {
      throw new CustomGraphQLError(
        `Department budget (${planned}) exceeds institution available (${available})`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    return this.prisma.$transaction(async (tx) => {
      // Criar department budget
      const departmentBudget = await tx.annualBudget.create({
        data: {
          year: dto.year,
          planned_budget: planned,
          description: dto.description,
          justification: dto.justification,
          priority: dto.priority || AnnualBudgetPriority.MEDIUM,
          category: dto.category || AnnualBudgetCategory.OPERATIONAL,
          notes: dto.notes,
          entity_type: AnnualBudgetEntityType.INSTITUTION_DEPARTMENT,
          department: { connect: { id: dto.department_id } },
          institution: { connect: { id: department.institution_id } },
          created_by: userId,
          updated_by: userId,
          requested_by: userId,
          submitted_date: new Date(),
        } as any
      });

      if (planned > 0) {
        await tx.budgetTransfer.create({
          data: {
            from_budget_id: institutionBudget.id,
            to_budget_id: departmentBudget.id,
            amount: planned,
            type: 'DISTRIBUTION',
            description: dto.description || 'System: Department Budget Distribution',
            created_by: userId
          }
        });
      }

      return departmentBudget;
    });
  }

  async updateDepartmentBudget(
    id: string,
    dto: any, // DepartmentBudgetUpdateDto
    userId: string
  ): Promise<AnnualBudget> {
    // Buscar budget existente
    const existing = await this.prisma.annualBudget.findUnique({
      where: { id },
      include: { department: true }
    });

    if (!existing) {
      throw new CustomGraphQLError(
        `Annual budget with ID '${id}' not found`,
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Verificar se está locked
    if (existing.is_locked) {
      throw new CustomGraphQLError(
        `Cannot update locked budget`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Verificar se é department budget
    if (existing.entity_type !== AnnualBudgetEntityType.INSTITUTION_DEPARTMENT) {
      throw new CustomGraphQLError(
        `Budget ${id} is not a department budget`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    if (!existing.department?.institution_id) {
      throw new CustomGraphQLError(
        `Department budget not linked to institution`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Buscar institution budget
    const institutionBudget = await this.prisma.annualBudget.findFirst({
      where: {
        institution_id: existing.department.institution_id,
        year: existing.year,
        entity_type: AnnualBudgetEntityType.INSTITUTION,
        is_deleted: false
      }
    });

    if (!institutionBudget) {
      throw new CustomGraphQLError(
        `Institution budget not found`,
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Verificar se institution budget está locked
    if (institutionBudget.is_locked) {
      throw new CustomGraphQLError(
        `Cannot update department budget when institution budget is locked`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    const currentPlanned = Number(existing.planned_budget);
    // total_expenses and allocated_amount are now ledger-computed; read from BudgetTransaction
    const computedExisting = await this.getComputedFinancials([existing.id]);
    const existingFin = computedExisting[existing.id] || { allocated: 0, expenses: 0 };
    const currentExpenses = existingFin.expenses;
    const currentAllocated = existingFin.allocated;

    const newPlanned = dto.planned_budget !== undefined ? Number(dto.planned_budget) : currentPlanned;
    const newExpenses = dto.total_expenses !== undefined ? Number(dto.total_expenses) : currentExpenses;
    const newAllocated = dto.allocated_amount !== undefined ? Number(dto.allocated_amount) : currentAllocated;

    // Calcular diferenças
    const plannedDiff = newPlanned - currentPlanned;
    const expensesDiff = newExpenses - currentExpenses;

    // VALIDAÇÃO: Verificar se aumento pode ser acomodado pelo saldo da instituição
    // Só precisa validar se houver AUMENTO (diff positivo)
    const totalIncrease = Math.max(0, plannedDiff) + Math.max(0, expensesDiff);

    if (totalIncrease > 0) {
      const institutionComputedFin = await this.getComputedFinancials([institutionBudget.id]);
      const instFin = institutionComputedFin[institutionBudget.id] || { allocated: 0, expenses: 0 };
      const institutionPlanned = Number(institutionBudget.planned_budget);

      // Saldo disponível ATUAL da instituição
      const available = institutionPlanned - instFin.allocated - instFin.expenses;

      if (totalIncrease > available) {
        throw new CustomGraphQLError(
          `Department budget update (${totalIncrease.toFixed(2)}) exceeds institution available (${available.toFixed(2)})`,
          ErrorCode.BAD_REQUEST,
          400
        );
      }
    }

    return this.prisma.$transaction(async (tx) => {
      // Atualizar department budget
      const newBalance = newPlanned - (newExpenses + newAllocated);
      const updateData: any = {
        updated_by: userId,
        balance: newBalance,
      };

      if (dto.planned_budget !== undefined) updateData.planned_budget = newPlanned;
      if (dto.total_expenses !== undefined) updateData.total_expenses = newExpenses;
      if (dto.allocated_amount !== undefined) updateData.allocated_amount = newAllocated;
      if (dto.description !== undefined) updateData.description = dto.description;
      if (dto.justification !== undefined) updateData.justification = dto.justification;
      if (dto.priority !== undefined) updateData.priority = dto.priority;
      if (dto.category !== undefined) updateData.category = dto.category;
      if (dto.notes !== undefined) updateData.notes = dto.notes;
      if (dto.documents !== undefined) updateData.documents = dto.documents;

      const updated = await tx.annualBudget.update({
        where: { id },
        data: updateData
      });

      if (dto.planned_budget !== undefined && plannedDiff !== 0) {
        if (plannedDiff > 0) {
          await tx.budgetTransfer.create({
            data: {
              from_budget_id: institutionBudget.id,
              to_budget_id: id,
              amount: plannedDiff,
              type: 'DISTRIBUTION',
              description: 'System: Department Budget Increased',
              created_by: userId
            }
          });
        } else if (plannedDiff < 0) {
          await tx.budgetTransfer.create({
            data: {
              from_budget_id: id,
              to_budget_id: institutionBudget.id,
              amount: Math.abs(plannedDiff),
              type: 'REDUCTION',
              description: 'System: Department Funding Reduced',
              created_by: userId
            }
          });
        }
      }

      const allocatedDiff = newAllocated - currentAllocated;
      if (expensesDiff !== 0 || allocatedDiff !== 0) {
        await tx.budgetTransaction.create({
          data: {
            annual_budget_id: id,
            type: 'MANUAL_ADJUSTMENT',
            delta_expenses: expensesDiff,
            delta_allocated: allocatedDiff,
            description: dto.description || 'System: Manual Department Expenses/Allocations Adjustment',
            created_by: userId
          }
        });
      }

      return updated;
    });
  }

  async updateBudgetFinancials(
    departmentId: string,
    year: number,
    deltaAllocated: number,
    deltaSpent: number,
    userId: string,
    transactionContext?: {
      type: BudgetTransactionType;
      description?: string;
      project_id?: string;
      subsidy_request_id?: string;
    }
  ): Promise<void> {
    const deptBudget = await this.prisma.annualBudget.findFirst({
      where: {
        department_id: departmentId,
        year: year,
        entity_type: AnnualBudgetEntityType.INSTITUTION_DEPARTMENT,
        is_deleted: false
      },
      include: { department: true }
    });

    if (!deptBudget) {
      throw new CustomGraphQLError(
        `Annual budget for department not found for year ${year}`,
        ErrorCode.NOT_FOUND,
        404
      );
    }

    if (!deptBudget.department?.institution_id) {
      throw new Error('Department not linked to institution');
    }

    // Only create the ledger record — no direct column mutation.
    // allocated_amount, total_expenses and balance are now derived
    // on-the-fly via getComputedFinancials() from BudgetTransaction rows.
    if (transactionContext) {
      await this.prisma.budgetTransaction.create({
        data: {
          annual_budget_id: deptBudget.id,
          type: transactionContext.type,
          delta_allocated: deltaAllocated,
          delta_expenses: deltaSpent,
          description: transactionContext.description || 'System transaction',
          project_id: transactionContext.project_id,
          subsidy_request_id: transactionContext.subsidy_request_id,
          created_by: userId,
        }
      });
    }
  }

  async getComputedFinancials(budgetIds: string[]): Promise<Record<string, { planned: number; allocated: number; expenses: number; balance: number }>> {
    if (budgetIds.length === 0) return {};

    const queryStr = `
      SELECT 
        ab.id as budget_id,
        ab.planned_budget,
        ab.entity_type,
        COALESCE(SUM(CASE WHEN bt.type::text = 'DISTRIBUTION' OR bt.type::text = 'INITIAL_FUNDING' OR bt.type::text = 'REALLOCATION' THEN bt.amount ELSE 0 END) FILTER (WHERE bt.to_budget_id = ab.id), 0) -
        COALESCE(SUM(CASE WHEN bt.type::text = 'REDUCTION' OR bt.type::text = 'REALLOCATION' THEN bt.amount ELSE 0 END) FILTER (WHERE bt.from_budget_id = ab.id), 0) as derived_target,
        COALESCE(SUM(CASE WHEN bt.type::text = 'DISTRIBUTION' THEN bt.amount ELSE 0 END) FILTER (WHERE bt.from_budget_id = ab.id), 0) as distributed_out,
        (
          SELECT COALESCE(SUM(bxt.delta_allocated), 0) FROM "BudgetTransaction" bxt WHERE bxt.annual_budget_id = ab.id
        ) as total_reserved,
        (
          SELECT COALESCE(SUM(bxt.delta_allocated), 0) 
          FROM "BudgetTransaction" bxt 
          JOIN "AnnualBudget" child ON bxt.annual_budget_id = child.id
          WHERE child.institution_id = ab.institution_id AND child.entity_type::text = 'INSTITUTION_DEPARTMENT'
        ) as sum_child_reserved,
        (
          SELECT COALESCE(SUM(bxt.delta_expenses), 0) FROM "BudgetTransaction" bxt WHERE bxt.annual_budget_id = ab.id
        ) as total_expenses,
        (
          SELECT COALESCE(SUM(bxt.delta_expenses), 0) 
          FROM "BudgetTransaction" bxt 
          JOIN "AnnualBudget" child ON bxt.annual_budget_id = child.id
          WHERE child.institution_id = ab.institution_id AND child.entity_type::text = 'INSTITUTION_DEPARTMENT'
        ) as sum_child_expenses
      FROM "AnnualBudget" ab
      LEFT JOIN "BudgetTransfer" bt ON bt.to_budget_id = ab.id OR bt.from_budget_id = ab.id
      WHERE ab.id IN (${budgetIds.map(id => `'${id}'`).join(',')})
      GROUP BY ab.id, ab.entity_type, ab.planned_budget, ab.institution_id
    `;

    const transactionsData = await this.prisma.$queryRawUnsafe<any[]>(queryStr);

    const result: Record<string, { planned: number; allocated: number; expenses: number; balance: number }> = {};
    for (const row of transactionsData) {
      const isInst = row.entity_type === 'INSTITUTION';
      const planned = isInst ? Number(row.planned_budget) : Number(row.derived_target);
      // Transfers (Institution → Department) are ALLOCATIONS, not spending.
      // allocated = project reservations within this budget + money distributed to departments (institution only)
      // expenses  = only real project spending (delta_expenses from BudgetTransaction)
      const allocated = isInst
        ? Number(row.total_reserved) + Number(row.distributed_out)
        : Number(row.total_reserved);
      const expenses = Number(row.total_expenses);
      const balance = planned - allocated - expenses;

      result[row.budget_id] = {
        planned,
        allocated,
        expenses,
        balance
      };
    }
    
    return result;
  }

  async getLedgerHistory(filters: LedgerHistoryFilterInput): Promise<LedgerHistoryPaginatedResponse> {
    const { 
      year, institutionId, departmentId, churchId, regionId, 
      startDate, endDate, search, type,
      page = 1, limit = 50 
    } = filters;

    // 1. Find relevant budgets based on filters
    const whereBudget: any = { year, is_deleted: false };
    if (institutionId) whereBudget.institution_id = institutionId;
    if (departmentId) whereBudget.department_id = departmentId;
    if (churchId) whereBudget.church_id = churchId;
    if (regionId) whereBudget.region_id = regionId;

    const relevantBudgets = await this.prisma.annualBudget.findMany({
      where: whereBudget,
      select: { id: true },
    });

    const budgetIds = relevantBudgets.map((b) => b.id);
    if (budgetIds.length === 0) {
      return { 
        items: [], 
        totalCount: 0, 
        pageInfo: { totalPages: 0, hasNextPage: false, hasPreviousPage: false } 
      };
    }

    const dateFilter: any = {};
    if (startDate) dateFilter.gte = startDate;
    if (endDate) dateFilter.lte = endDate;

    const searchFilter = search ? { description: { contains: search, mode: 'insensitive' as const } } : {};

    // 2. Fetch Metadata (IDs and Dates only) for both tables in parallel
    const [txMeta, trMeta] = await Promise.all([
      // Transactions Metadata
      (type === 'all' || type === 'TRANSACTION' || !type) 
        ? this.prisma.budgetTransaction.findMany({
            where: { 
              annual_budget_id: { in: budgetIds },
              ...(startDate || endDate ? { created_at: dateFilter } : {}),
              ...searchFilter
            },
            select: { id: true, created_at: true },
          })
        : Promise.resolve([] as { id: string, created_at: Date }[]),
      // Transfers Metadata
      (type === 'all' || type === 'TRANSFER' || !type)
        ? this.prisma.budgetTransfer.findMany({
            where: {
              OR: [
                { from_budget_id: { in: budgetIds } },
                { to_budget_id: { in: budgetIds } },
              ],
              ...(startDate || endDate ? { created_at: dateFilter } : {}),
              ...searchFilter
            },
            select: { id: true, created_at: true, from_budget_id: true, to_budget_id: true },
          })
        : Promise.resolve([] as { id: string, created_at: Date, from_budget_id: string | null, to_budget_id: string | null }[])
    ]);

    // 3. Process and Paginate Metadata in Memory
    const allMeta: { id: string; date: Date; category: 'TRANSACTION' | 'TRANSFER'; subId?: string }[] = [];
    
    (txMeta as any[]).forEach(m => allMeta.push({ id: m.id, date: m.created_at, category: 'TRANSACTION' }));
    
    (trMeta as any[]).forEach(m => {
      const isFrom = budgetIds.includes(m.from_budget_id || '');
      const isTo = budgetIds.includes(m.to_budget_id || '');
      
      if (isFrom) allMeta.push({ id: m.id, date: m.created_at, category: 'TRANSFER', subId: 'out' });
      if (isTo) allMeta.push({ id: m.id, date: m.created_at, category: 'TRANSFER', subId: 'in' });
    });

    // Sort by date descending
    allMeta.sort((a, b) => b.date.getTime() - a.date.getTime());

    const totalCount = allMeta.length;
    const totalPages = Math.ceil(totalCount / limit);
    const startIndex = (page - 1) * limit;
    const pageSlice = allMeta.slice(startIndex, startIndex + limit);

    if (pageSlice.length === 0) {
      return { 
        items: [], 
        totalCount, 
        pageInfo: { totalPages, hasNextPage: false, hasPreviousPage: page > 1 } 
      };
    }

    // 4. Hydrate only the slice items
    const txIdsToHydrate = pageSlice.filter(m => m.category === 'TRANSACTION').map(m => m.id);
    const trIdsToHydrate = pageSlice.filter(m => m.category === 'TRANSFER').map(m => m.id);

    const [fullTxs, fullTrs] = await Promise.all([
      txIdsToHydrate.length > 0 
        ? this.prisma.budgetTransaction.findMany({
            where: { id: { in: txIdsToHydrate } },
            include: {
              annual_budget: {
                include: {
                  department: { select: { name: true } },
                  institution: { select: { name: true } },
                  church: { select: { name: true } },
                },
              },
              project: { select: { title: true } },
              subsidy_request: { select: { id: true } },
            }
          })
        : Promise.resolve([] as any[]),
      trIdsToHydrate.length > 0
        ? this.prisma.budgetTransfer.findMany({
            where: { id: { in: trIdsToHydrate } },
            include: {
              from_budget: {
                include: {
                  department: { select: { name: true } },
                  institution: { select: { name: true } },
                  church: { select: { name: true } },
                },
              },
              to_budget: {
                include: {
                  department: { select: { name: true } },
                  institution: { select: { name: true } },
                  church: { select: { name: true } },
                },
              },
            }
          })
        : Promise.resolve([] as any[])
    ]);

    // Fetch user emails for hydrated items only
    const creatorIds = new Set([
      ...(fullTxs as any[]).map(tx => tx.created_by),
      ...(fullTrs as any[]).map(tr => tr.created_by)
    ]);

    const users = creatorIds.size > 0 
      ? await this.prisma.user.findMany({
          where: { id: { in: Array.from(creatorIds) } },
          select: { id: true, email: true }
        })
      : [];

    const userMap = new Map(users.map(u => [u.id, u.email]));

    // 5. Final Assembly (Map in the order of the pageSlice)
    const txMapData = new Map((fullTxs as any[]).map(tx => [tx.id, tx]));
    const trMapData = new Map((fullTrs as any[]).map(tr => [tr.id, tr]));

    const TRANSFER_OUT_LABELS: Record<string, string> = {
      DISTRIBUTION:    'Distribuição para Departamento',
      INITIAL_FUNDING: 'Financiamento Inicial (saída)',
      REALLOCATION:    'Realocação de Verba (saída)',
      REDUCTION:       'Redução de Orçamento',
    };

    const TRANSFER_IN_LABELS: Record<string, string> = {
      DISTRIBUTION:    'Recebimento de Distribuição',
      INITIAL_FUNDING: 'Financiamento Inicial',
      REALLOCATION:    'Realocação de Verba (entrada)',
      REDUCTION:       'Redução Recebida',
    };

    const items: LedgerHistoryEntry[] = pageSlice.map(meta => {
      if (meta.category === 'TRANSACTION') {
        const tx = txMapData.get(meta.id) as any;
        const hasExpense = Number(tx.delta_expenses) !== 0;
        const entryType = hasExpense ? 'EXPENSE' : 'ALLOCATION';
        const entryAmount = hasExpense
          ? -Math.abs(Number(tx.delta_expenses))
          : -Math.abs(Number(tx.delta_allocated));
        const entryLabel = hasExpense ? 'Despesa de Projeto' : 'Reserva Orçamentária';
        const impactType = hasExpense ? 'EXPENSE' : 'ALLOCATION';

        const entityName =
          tx.annual_budget.department?.name ||
          tx.annual_budget.institution?.name ||
          tx.annual_budget.church?.name;

        const relatedEntity = tx.project
          ? `Projeto: ${tx.project.title}`
          : tx.subsidy_request
          ? `Subsídio: ${tx.subsidy_request.id}`
          : undefined;

        return {
          id: tx.id,
          date: tx.created_at,
          description: tx.description,
          amount: entryAmount,
          type: entryType,
          impactType,
          label: entryLabel,
          category: 'TRANSACTION',
          entityName,
          relatedEntity,
          createdBy: userMap.get(tx.created_by) || tx.created_by,
        };
      } else {
        const tr = trMapData.get(meta.id) as any;
        if (meta.subId === 'out') {
          const toName =
            tr.to_budget?.department?.name ||
            tr.to_budget?.institution?.name ||
            tr.to_budget?.church?.name;
          return {
            id: `${tr.id}_out`,
            date: tr.created_at,
            description: tr.description,
            amount: -Number(tr.amount),
            type: `${tr.type}_OUT`,
            impactType: 'ALLOCATION',
            label: TRANSFER_OUT_LABELS[tr.type] || `Transferência (saída): ${tr.type}`,
            category: 'TRANSFER',
            entityName:
              tr.from_budget?.department?.name ||
              tr.from_budget?.institution?.name ||
              tr.from_budget?.church?.name,
            relatedEntity: toName ? `Destino: ${toName}` : undefined,
            createdBy: userMap.get(tr.created_by) || tr.created_by,
          };
        } else {
          const fromName =
            tr.from_budget?.department?.name ||
            tr.from_budget?.institution?.name ||
            tr.from_budget?.church?.name;
          return {
            id: `${tr.id}_in`,
            date: tr.created_at,
            description: tr.description,
            amount: Number(tr.amount),
            type: `${tr.type}_IN`,
            impactType: tr.type === 'INITIAL_FUNDING' ? 'FUNDING' : 'RECEIVED',
            label: TRANSFER_IN_LABELS[tr.type] || `Transferência (entrada): ${tr.type}`,
            category: 'TRANSFER',
            entityName:
              tr.to_budget?.department?.name ||
              tr.to_budget?.institution?.name ||
              tr.to_budget?.church?.name,
            relatedEntity: fromName ? `Origem: ${fromName}` : undefined,
            createdBy: userMap.get(tr.created_by) || tr.created_by,
          };
        }
      }
    });

    return {
      items,
      totalCount,
      pageInfo: {
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  }
}
