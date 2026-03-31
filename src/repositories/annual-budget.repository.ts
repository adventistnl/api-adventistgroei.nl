import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AnnualBudget } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { AnnualBudgetEntityType } from 'src/@generated/prisma/annual-budget-entity-type.enum';
import { AnnualBudgetStatus } from 'src/@generated/prisma/annual-budget-status.enum';
import { AnnualBudgetPriority } from 'src/@generated/prisma/annual-budget-priority.enum';
import { AnnualBudgetCategory } from 'src/@generated/prisma/annual-budget-category.enum';
import { FindManyAnnualBudgetArgs } from 'src/@generated/annual-budget/find-many-annual-budget.args';
import { DecimalHelper } from 'src/common/helpers/decimal.helper';
import { BudgetTransactionType } from '@prisma/client';

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

      // Se for um orçamento de departamento de instituição, subtrair o allocated_amount da instituição
      if (existingBudget.entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT &&
          existingBudget.department?.institution_id) {

        const allocatedAmount = Number(existingBudget.allocated_amount || 0);
        await this.updateInstitutionAllocatedAmount(
          tx,
          existingBudget.department.institution_id,
          existingBudget.year,
          allocatedAmount,
          'SUBTRACT'
        );
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

    // Validar approved_amount se fornecido
    if (dto.approved_amount !== undefined && dto.approved_amount > Number(existingBudget.allocated_amount)) {
      throw new CustomGraphQLError(
        'Approved amount cannot be greater than allocated amount.',
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
      approved_amount: dto.approved_amount ?? Number(existingBudget.allocated_amount),
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

    // Calcular quanto já está alocado para outros departamentos
    const departmentBudgetsSum = await this.prisma.annualBudget.aggregate({
      where: {
        department: {
          institution_id: institutionId
        },
        year: year,
        entity_type: {
          in: [AnnualBudgetEntityType.INSTITUTION_DEPARTMENT, AnnualBudgetEntityType.CHURCH_DEPARTMENT]
        },
        is_deleted: false
      },
      _sum: {
        allocated_amount: true
      }
    });

    const currentlyAllocatedByDepts = Number(departmentBudgetsSum._sum.allocated_amount || 0);
    const plannedBudget = Number(institutionBudget.planned_budget);
    const institutionAllocated = Number(institutionBudget.allocated_amount || 0);

    // Disponível = planned_budget - institution_allocated_amount
    // (porque institution.allocated já inclui manual + expenses + todos os departments)
    const availableAmount = plannedBudget - institutionAllocated;

    if (requestedAmount > availableAmount) {
      throw new CustomGraphQLError(
        `Requested amount (${requestedAmount}) exceeds available institution budget (${availableAmount}). Institution total allocated: ${institutionAllocated}, Already allocated by departments: ${currentlyAllocatedByDepts}, Planned budget: ${plannedBudget}.`,
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

    // Calcular quanto já está alocado para outros departamentos (excluindo o budget atual)
    const departmentBudgetsSum = await this.prisma.annualBudget.aggregate({
      where: {
        department: {
          institution_id: institutionId
        },
        year: year,
        entity_type: {
          in: [AnnualBudgetEntityType.INSTITUTION_DEPARTMENT, AnnualBudgetEntityType.CHURCH_DEPARTMENT]
        },
        is_deleted: false,
        id: {
          not: excludeBudgetId // Excluir o próprio budget do cálculo
        }
      },
      _sum: {
        allocated_amount: true
      }
    });

    const currentlyAllocatedByOthers = Number(departmentBudgetsSum._sum.allocated_amount || 0);
    const plannedBudget = Number(institutionBudget.planned_budget);
    const institutionAllocated = Number(institutionBudget.allocated_amount || 0);

    // Disponível = planned_budget - institution_allocated_amount + allocated dos outros departments
    // (porque institution.allocated já inclui manual + expenses + todos os departments)
    const availableAmount = plannedBudget - institutionAllocated + currentlyAllocatedByOthers;

    if (additionalAmount > availableAmount) {
      throw new CustomGraphQLError(
        `Additional amount (${additionalAmount}) exceeds available institution budget (${availableAmount}). Institution total allocated: ${institutionAllocated}, Already allocated by other departments: ${currentlyAllocatedByOthers}, Planned budget: ${plannedBudget}.`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }
  }

  /**
   * Atualiza o valor alocado do orçamento da instituição somando/subtraindo a mudança nos departamentos
   */
  private async updateInstitutionAllocatedAmount(
    tx: any,
    institutionId: string,
    year: number,
    amountChange?: number,
    operation?: 'ADD' | 'SUBTRACT'
  ): Promise<void> {
    // Buscar o orçamento da instituição para o ano especificado
    const institutionBudget = await tx.annualBudget.findFirst({
      where: {
        institution_id: institutionId,
        year: year,
        entity_type: AnnualBudgetEntityType.INSTITUTION,
        is_deleted: false
      }
    });

    if (!institutionBudget) {
      this.logger.warn(`No institution budget found for institution ${institutionId} and year ${year}`);
      return;
    }

    // Se não foi passado amount, recalcular baseado na soma de todos os departamentos
    if (amountChange === undefined || operation === undefined) {
      const departmentBudgetsSum = await tx.annualBudget.aggregate({
        where: {
          department: {
            institution_id: institutionId
          },
          year: year,
          entity_type: {
            in: [AnnualBudgetEntityType.INSTITUTION_DEPARTMENT, AnnualBudgetEntityType.CHURCH_DEPARTMENT]
          },
          is_deleted: false
        },
        _sum: {
          allocated_amount: true
        }
      });

      const totalAllocatedFromDepts = Number(departmentBudgetsSum._sum.allocated_amount || 0);
      const currentAllocated = Number(institutionBudget.allocated_amount || 0);
      const plannedBudget = Number(institutionBudget.planned_budget);
      const totalExpenses = Number(institutionBudget.total_expenses || 0);

      // Calcular a parte manual atual: allocated_amount = manual + expenses + departments
      const currentManual = currentAllocated - totalExpenses - totalAllocatedFromDepts;

      // Recalcular allocated_amount = manual + expenses + departments
      const newAllocatedAmount = currentManual + totalExpenses + totalAllocatedFromDepts;

      // Calcular novo balance: planned_budget - allocated_amount
      const newBalance = plannedBudget - newAllocatedAmount;

      await tx.annualBudget.update({
        where: { id: institutionBudget.id },
        data: {
          allocated_amount: newAllocatedAmount,
          balance: newBalance,
          updated_at: new Date()
        }
      });

      this.logger.log(`Recalculated institution budget - allocated: ${currentAllocated} -> ${newAllocatedAmount}`);
      return;
    }

    // Aplicar a mudança (ADD ou SUBTRACT) ao valor existente
    const currentAllocated = Number(institutionBudget.allocated_amount || 0);
    const plannedBudget = Number(institutionBudget.planned_budget);

    const newAllocatedAmount = operation === 'ADD'
      ? currentAllocated + amountChange
      : currentAllocated - amountChange;

    // Calcular novo balance: planned_budget - allocated_amount
    const newBalance = plannedBudget - newAllocatedAmount;

    // Atualizar o allocated_amount e balance da instituição
    await tx.annualBudget.update({
      where: { id: institutionBudget.id },
      data: {
        allocated_amount: newAllocatedAmount,
        balance: newBalance,
        updated_at: new Date()
      }
    });

    this.logger.log(`Updated institution budget - allocated: ${currentAllocated} ${operation} ${amountChange} = ${newAllocatedAmount}`);
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

    // Calcular balance
    const planned = Number(dto.planned_budget);
    const expenses = Number(dto.total_expenses || 0);
    const allocated = Number(dto.allocated_amount || 0);
    const balance = planned - (expenses + allocated);

    return this.prisma.annualBudget.create({
      data: {
        year: dto.year,
        planned_budget: planned,
        total_expenses: expenses,
        allocated_amount: allocated,
        balance,
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
      }
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

    // Calcular novos valores baseado nas diferenças
    const currentPlanned = Number(existing.planned_budget);
    const currentExpenses = Number(existing.total_expenses);
    const currentAllocated = Number(existing.allocated_amount);

    const newPlanned = dto.planned_budget !== undefined ? Number(dto.planned_budget) : currentPlanned;
    const newExpenses = dto.total_expenses !== undefined ? Number(dto.total_expenses) : currentExpenses;
    const newAllocated = dto.allocated_amount !== undefined ? Number(dto.allocated_amount) : currentAllocated;

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

    return this.prisma.annualBudget.update({
      where: { id },
      data: updateData
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
    const expenses = Number(dto.total_expenses || 0);
    const allocated = Number(dto.allocated_amount || 0);

    // Validar disponibilidade
    const institutionPlanned = Number(institutionBudget.planned_budget);
    const institutionAllocated = Number(institutionBudget.allocated_amount);
    const institutionExpenses = Number(institutionBudget.total_expenses);
    const available = institutionPlanned - institutionAllocated - institutionExpenses;

    if (planned + expenses > available) {
      throw new CustomGraphQLError(
        `Department budget (${planned + expenses}) exceeds institution available (${available})`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    return this.prisma.$transaction(async (tx) => {
      // Criar department budget
      const balance = planned - (expenses + allocated);
      const departmentBudget = await tx.annualBudget.create({
        data: {
          year: dto.year,
          planned_budget: planned,
          total_expenses: expenses,
          allocated_amount: allocated,
          balance,
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
        }
      });

      // Atualizar institution budget
      const newInstitutionAllocated = institutionAllocated + planned;
      const newInstitutionExpenses = institutionExpenses + expenses;
      const newInstitutionBalance = institutionPlanned - (newInstitutionAllocated + newInstitutionExpenses);

      await tx.annualBudget.update({
        where: { id: institutionBudget.id },
        data: {
          allocated_amount: newInstitutionAllocated,
          total_expenses: newInstitutionExpenses,
          balance: newInstitutionBalance,
          updated_by: userId
        }
      });

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
    const currentExpenses = Number(existing.total_expenses);
    const currentAllocated = Number(existing.allocated_amount);

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
      const institutionPlanned = Number(institutionBudget.planned_budget);
      const institutionAllocated = Number(institutionBudget.allocated_amount);
      const institutionExpenses = Number(institutionBudget.total_expenses);

      // Saldo disponível ATUAL da instituição
      const available = institutionPlanned - institutionAllocated - institutionExpenses;

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

      // Atualizar institution budget com as diferenças
      const institutionAllocated = Number(institutionBudget.allocated_amount);
      const institutionExpenses = Number(institutionBudget.total_expenses);
      const institutionPlanned = Number(institutionBudget.planned_budget);

      const newInstitutionAllocated = institutionAllocated + plannedDiff;
      const newInstitutionExpenses = institutionExpenses + expensesDiff;
      const newInstitutionBalance = institutionPlanned - (newInstitutionAllocated + newInstitutionExpenses);

      await tx.annualBudget.update({
        where: { id: institutionBudget.id },
        data: {
          allocated_amount: newInstitutionAllocated,
          total_expenses: newInstitutionExpenses,
          balance: newInstitutionBalance,
          updated_by: userId
        }
      });

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
        throw new Error("Department not linked to institution");
    }

    const institutionBudget = await this.prisma.annualBudget.findFirst({
      where: {
        institution_id: deptBudget.department.institution_id,
        year: year,
        entity_type: AnnualBudgetEntityType.INSTITUTION,
        is_deleted: false
      }
    });

    if (!institutionBudget) {
        throw new CustomGraphQLError("Institution budget not found", ErrorCode.NOT_FOUND, 404);
    }

    // NOTE: is_locked check removed here because:
    // - is_locked = true means budget is finalized and READY for project allocations
    // - This method is called when creating projects/subsidies which NEED a locked budget
    // - The is_locked check should only block modifications to the budget definition itself,
    //   not the allocation of funds for projects

    await this.prisma.$transaction(async (tx) => {
      // Update Department using Decimal.js for precision
      const currentAllocated = new Decimal(deptBudget.allocated_amount);
      const currentExpenses = new Decimal(deptBudget.total_expenses);
      const currentPlanned = new Decimal(deptBudget.planned_budget);

      // Perform calculations using Decimal.js
      const newAllocated = currentAllocated.plus(deltaAllocated);
      const newExpenses = currentExpenses.plus(deltaSpent);
      const newBalance = currentPlanned.minus(newExpenses.plus(newAllocated));

      // Normalize values to prevent tiny floating point errors like -0.000000000001
      await tx.annualBudget.update({
        where: { id: deptBudget.id },
        data: {
          allocated_amount: DecimalHelper.normalizeZero(newAllocated),
          total_expenses: DecimalHelper.normalizeZero(newExpenses),
          balance: DecimalHelper.normalizeZero(newBalance),
          updated_by: userId
        }
      });

      // Create Ledger Transaction if context is provided
      if (transactionContext) {
        await tx.budgetTransaction.create({
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

      // Update Institution (Only Expenses propagate)
    if (deltaSpent !== 0) {
        const instExpenses = new Decimal(institutionBudget.total_expenses);
        const instPlanned = new Decimal(institutionBudget.planned_budget);
        const instAllocated = new Decimal(institutionBudget.allocated_amount);

        const newInstExpenses = instExpenses.plus(deltaSpent);
        const newInstBalance = instPlanned.minus(instAllocated);

       await tx.annualBudget.update({
         where: { id: institutionBudget.id },
         data: {
           total_expenses: newInstExpenses,
           balance: newInstBalance,
           updated_by: userId
         }
       });
    }
    });
  }
}
