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

    return this.prisma.annualBudget.create({
      data: {
        ...budgetData,
        entity_type,
        created_by: userId,
        updated_by: userId,
        requested_by: userId,
        total_expenses: budgetData.total_expenses || 0,
        balance: budgetData.planned_budget - (budgetData.total_expenses || 0),
        ...(entity_type === AnnualBudgetEntityType.INSTITUTION && { institution: { connect: { id: entity_id } } }),
        ...(entity_type === AnnualBudgetEntityType.CHURCH && { church: { connect: { id: entity_id } } }),
        ...((entity_type === AnnualBudgetEntityType.INSTITUTION_DEPARTMENT ||
            entity_type === AnnualBudgetEntityType.CHURCH_DEPARTMENT) && { department: { connect: { id: entity_id } } }),
      }
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
    const updateData: Partial<AnnualBudgetUpdateDto & { updated_by: string; balance?: number }> = {
      ...dto,
      updated_by: userId,
    };

    // Recalcular balance se planned_budget ou total_expenses foram alterados
    if (dto.planned_budget !== undefined || dto.total_expenses !== undefined) {
      const newPlannedBudget = dto.planned_budget !== undefined ? Number(dto.planned_budget) : Number(existingBudget.planned_budget);
      const newTotalExpenses = dto.total_expenses !== undefined ? Number(dto.total_expenses) : Number(existingBudget.total_expenses);

      updateData.balance = newPlannedBudget - newTotalExpenses;
    }

    return this.prisma.annualBudget.update({
      where: { id },
      data: updateData,
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

    // Soft delete: marcar como deletado
    await this.prisma.annualBudget.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });

    return {
      success: true,
      message: 'Annual budget deleted successfully.',
    };
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
    if (dto.approved_amount !== undefined && dto.approved_amount > Number(existingBudget.requested_amount)) {
      throw new CustomGraphQLError(
        'Approved amount cannot be greater than requested amount.',
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
      approved_amount: dto.approved_amount ?? Number(existingBudget.requested_amount),
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
    // Verificar se o orçamento existe
    const existingBudget = await this.prisma.annualBudget.findUnique({
      where: { id },
    });

    if (!existingBudget) {
      throw new NotFoundException(`Annual budget with ID '${id}' not found.`);
    }

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

    // Se estiver bloqueando um budget da instituição, bloquear também todos os budgets dos departamentos
    if (newLockState && existingBudget.entity_type === AnnualBudgetEntityType.INSTITUTION && existingBudget.institution_id) {
      // Buscar todos os budgets dos departamentos desta instituição que não estão deletados
      const departmentBudgets = await this.prisma.annualBudget.findMany({
        where: {
          institution_id: existingBudget.institution_id,
          entity_type: AnnualBudgetEntityType.INSTITUTION_DEPARTMENT,
          is_deleted: false,
        },
      });

      // Bloquear todos os budgets dos departamentos
      if (departmentBudgets.length > 0) {
        await this.prisma.annualBudget.updateMany({
          where: {
            id: {
              in: departmentBudgets.map(budget => budget.id),
            },
          },
          data: {
            is_locked: true,
            updated_by: userId,
          },
        });

        this.logger.log(`Bloqueados ${departmentBudgets.length} budgets de departamentos da instituição ${existingBudget.institution_id}`);
      }
    }

    const updatedBudget = await this.prisma.annualBudget.update({
      where: { id },
      data: {
        is_locked: newLockState,
        updated_by: userId,
      },
    });

    return {
      id: updatedBudget.id,
      is_locked: updatedBudget.is_locked,
      updated_at: updatedBudget.updated_at,
    };
  }

}
