import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AnnualBudgetCreateDto, AnnualBudgetUpdateDto } from 'src/dto/annual_budget.dto';
import { AnnualBudget } from '@prisma/client';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { AnnualBudgetEntityType } from 'src/@generated/prisma/annual-budget-entity-type.enum';
import { AnnualBudgetStatus } from 'src/@generated/prisma/annual-budget-status.enum';
import { FindManyAnnualBudgetArgs } from 'src/@generated/annual-budget/find-many-annual-budget.args';

@Injectable()
export class AnnualBudgetRepository {
  private readonly logger = new Logger(AnnualBudgetRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: AnnualBudgetCreateDto, userId: string): Promise<AnnualBudget> {
    const { entity_id, entity_type, ...budgetData } = dto;

    // Verificar se o registro relacionado existe e se já há um orçamento para o mesmo ano
    const entityExists = await this.checkEntityExists(dto);
    if (!entityExists) {
      throw new NotFoundException(
        `No record found for entity type '${entity_type}' with ID '${entity_id}', or budget already exists for year '${dto.year}'.`
      );
    }

    // Para budgets de departamento, buscar o institution_id do department
    let institutionId: string | undefined;
    if (entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT || entity_type === AnnualBudgetEntityType.CHURCH_DEPARTMENT) {
      const department = await this.prisma.department.findUnique({
        where: { id: entity_id },
        select: { institution_id: true, church_id: true }
      });
      if (department) {
        institutionId = department.institution_id;
      }
    }

    // Construir dados do orçamento
    const budgetCreateData: any = {
      ...budgetData,
      entity_type,
      created_by: userId,
      updated_by: userId,
      requested_by: userId,
      total_expenses: budgetData.total_expenses || 0,
      balance: budgetData.planned_budget - (budgetData.total_expenses || 0),
    };

    // Para departamentos, o allocated_amount deve ser igual ao planned_budget
    if (entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT || 
        entity_type === AnnualBudgetEntityType.CHURCH_DEPARTMENT) {
      budgetCreateData.allocated_amount = budgetData.planned_budget;
    }

    // Adicionar conexões baseadas no tipo de entidade
    if (entity_type === AnnualBudgetEntityType.INSTITUTION) {
      budgetCreateData.institution = { connect: { id: entity_id } };
    } else if (entity_type === AnnualBudgetEntityType.CHURCH) {
      budgetCreateData.church = { connect: { id: entity_id } };
    } else if (entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT) {
      budgetCreateData.department = { connect: { id: entity_id } };
      // Para budgets de departamento, também conectar a instituição
      if (institutionId) {
        budgetCreateData.institution = { connect: { id: institutionId } };
      }
    } else if (entity_type === AnnualBudgetEntityType.CHURCH_DEPARTMENT) {
      budgetCreateData.department = { connect: { id: entity_id } };
    }

    // Usar transação para garantir consistência dos dados
    return this.prisma.$transaction(async (tx) => {
      // Criar o orçamento do departamento
      const createdBudget = await tx.annualBudget.create({
        data: budgetCreateData,
      });

      // Se for um orçamento de departamento de instituição, atualizar o orçamento da instituição
      if (entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT && institutionId) {
        await this.updateInstitutionAllocatedAmount(tx, institutionId, dto.year);
      }

      return createdBudget;
    });
  }

  private async checkEntityExists(
    data: AnnualBudgetCreateDto,
  ): Promise<boolean> {
    const entityCheckActions: Record<AnnualBudgetEntityType, () => Promise<boolean>> = {
      [AnnualBudgetEntityType.INSTITUTION]: async () => {
        const exists = await this.prisma.institution.findUnique({ where: { id: data.entity_id } });
        if (!exists) return false;
        const budgetExists = await this.prisma.annualBudget.findFirst({
          where: {  institution_id: data.entity_id, year: data.year },
        });
        if (budgetExists) {
          throw new CustomGraphQLError(
            `An annual budget already exists for this institution.`,
            ErrorCode.CONFLICT,
            409
          );
        }
        return true;
      },
      [AnnualBudgetEntityType.CHURCH]: async () => {
        const exists = await this.prisma.church.findUnique({ where: { id: data.entity_id } });
        if (!exists) return false;
        const budgetExists = await this.prisma.annualBudget.findFirst({
          where: { church_id: data.entity_id, year: data.year },
        });
        if (budgetExists) {
          throw new CustomGraphQLError(
            `An annual budget already exists for this church.`,
            ErrorCode.CONFLICT,
            409
          );
        }
        return true;
      },
      [AnnualBudgetEntityType.INSTITUTION_DEPARTMENT]: async () => {
        const exists = await this.prisma.department.findUnique({ where: { id: data.entity_id } });
        if (!exists) return false;
        const budgetExists = await this.prisma.annualBudget.findFirst({
          where: { department_id: data.entity_id, year: data.year },
        });
        if (budgetExists) {
          throw new CustomGraphQLError(
            `An annual budget already exists for this department.`,
            ErrorCode.CONFLICT,
            409
          );
        }
        return true;
      },
      [AnnualBudgetEntityType.CHURCH_DEPARTMENT]: async () => {
        const exists = await this.prisma.department.findUnique({ where: { id: data.entity_id } });
        if (!exists) return false;
        const budgetExists = await this.prisma.annualBudget.findFirst({
          where: { department_id: data.entity_id, year: data.year },
        });
        if (budgetExists) {
          throw new CustomGraphQLError(
            `An annual budget already exists for this department.`,
            ErrorCode.CONFLICT,
            409
          );
        }
        return true;
      },
    };

    const checkAction = entityCheckActions[data.entity_type];

    if (!checkAction) {
      this.logger.warn(`No check action defined for entity type '${data.entity_type}'.`);
      return false;
    }

    return checkAction();
  }

  async update(id: string, dto: AnnualBudgetUpdateDto, userId: string): Promise<AnnualBudget> {
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

    // Verificar se o orçamento pode ser editado (não está bloqueado ou aprovado)
    if (existingBudget.is_locked) {
      throw new CustomGraphQLError(
        'Cannot update a locked annual budget.',
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    if (existingBudget.status !== AnnualBudgetStatus.DRAFT) {
      throw new CustomGraphQLError(
        'Cannot update an annual budget that is not in DRAFT status.',
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Preparar dados para atualização
    const updateData: Partial<AnnualBudgetUpdateDto & { updated_by: string; balance?: number; allocated_amount?: number }> = {
      ...dto,
      updated_by: userId,
    };

    // Recalcular balance se planned_budget ou total_expenses foram alterados
    if (dto.planned_budget !== undefined || dto.total_expenses !== undefined) {
      const newPlannedBudget = dto.planned_budget !== undefined ? Number(dto.planned_budget) : Number(existingBudget.planned_budget);
      const newTotalExpenses = dto.total_expenses !== undefined ? Number(dto.total_expenses) : Number(existingBudget.total_expenses);

      updateData.balance = newPlannedBudget - newTotalExpenses;
    }

    // Para orçamentos de departamento, atualizar allocated_amount quando planned_budget muda
    if (existingBudget.entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT && 
        dto.planned_budget !== undefined) {
      updateData.allocated_amount = Number(dto.planned_budget);
    }

    // Usar transação para garantir consistência dos dados
    return this.prisma.$transaction(async (tx) => {
      // Atualizar o orçamento
      const updatedBudget = await tx.annualBudget.update({
        where: { id },
        data: updateData,
      });

      // Se for um orçamento de departamento de instituição e o allocated_amount mudou, recalcular orçamento da instituição
      if (existingBudget.entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT && 
          existingBudget.department?.institution_id &&
          dto.planned_budget !== undefined) {
        
        await this.updateInstitutionAllocatedAmount(
          tx, 
          existingBudget.department.institution_id, 
          existingBudget.year
        );
      }

      return updatedBudget;
    });
  }

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

      // Se for um orçamento de departamento de instituição, recalcular o total alocado da instituição
      if (existingBudget.entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT && 
          existingBudget.department?.institution_id) {
        
        await this.updateInstitutionAllocatedAmount(
          tx, 
          existingBudget.department.institution_id, 
          existingBudget.year
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
   * Atualiza o valor alocado do orçamento da instituição recalculando a soma de todos os departamentos
   */
  private async updateInstitutionAllocatedAmount(
    tx: any, 
    institutionId: string, 
    year: number, 
    amount?: number, 
    operation?: 'ADD' | 'SUBTRACT'
  ): Promise<void> {
    // Recalcular o total alocado baseado na soma atual de todos os departamentos da instituição
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

    const totalAllocatedAmount = Number(departmentBudgetsSum._sum.allocated_amount || 0);

    // Buscar o orçamento da instituição para o ano especificado
    const institutionBudget = await tx.annualBudget.findFirst({
      where: {
        institution_id: institutionId,
        year: year,
        entity_type: AnnualBudgetEntityType.INSTITUTION,
        is_deleted: false
      }
    });

    if (institutionBudget) {
      const currentAllocated = Number(institutionBudget.allocated_amount || 0);

      // Atualizar o allocated_amount da instituição com o total calculado
      await tx.annualBudget.update({
        where: { id: institutionBudget.id },
        data: {
          allocated_amount: totalAllocatedAmount,
          updated_at: new Date()
        }
      });

      this.logger.log(`Updated institution budget allocated amount: ${currentAllocated} -> ${totalAllocatedAmount} (recalculated from departments)`);
    } else {
      this.logger.warn(`No institution budget found for institution ${institutionId} and year ${year}`);
    }
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

}
