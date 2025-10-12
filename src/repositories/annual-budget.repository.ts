import { Injectable, NotFoundException, ConflictException, Logger } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AnnualBudgetCreateDto } from 'src/dto/annual_budget.dto';
import { AnnualBudget } from '@prisma/client';
import { EntityType } from 'src/@generated/prisma/entity-type.enum';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';

type GeneratedEntityType = Exclude<EntityType, EntityType.REGION | EntityType.USER>
@Injectable()
export class AnnualBudgetRepository {
  private readonly logger = new Logger(AnnualBudgetRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: AnnualBudgetCreateDto, userId: string): Promise<AnnualBudget> {
    const { entity_type, entity_id, year, ...budgetData } = dto;

    // Verificar se o registro relacionado existe e se já há um orçamento para o mesmo ano
    this.logger.debug(`Checking existence of entity type '${entity_type}' with ID '${entity_id}' and year '${year}'`);
    const entityExists = await this.checkEntityExists(entity_type as GeneratedEntityType, entity_id, year);
    if (!entityExists) {
      this.logger.error(`Entity type '${entity_type}' with ID '${entity_id}' not found or budget already exists for year '${year}'.`);
      throw new NotFoundException(
        `No record found for entity type '${entity_type}' with ID '${entity_id}', or budget already exists for year '${year}'.`
      );
    }

    const data = {
      ...budgetData,
      year,
      total_expenses: 0,
      balance: 0,
      created_by: userId,
      updated_by: userId,
    };

    if (entity_type === EntityType.INSTITUTION) {
      data['institution_id'] = entity_id;
    } else if (entity_type === EntityType.CHURCH) {
      data['church_id'] = entity_id;
    } else if (
      entity_type === EntityType.INSTITUTION_DEPARTMENT ||
      entity_type === EntityType.CHURCH_DEPARTMENT
    ) {
      data['department_id'] = entity_id;
    }

    this.logger.debug(`Creating annual budget with data: ${JSON.stringify(data)}`);

    return this.prisma.annualBudget.create({ data });
  }

  private async checkEntityExists(
    entityType: GeneratedEntityType,
    entityId: string,
    year: number
  ): Promise<boolean> {
    const entityCheckActions: Record<GeneratedEntityType, () => Promise<boolean>> = {
      [EntityType.INSTITUTION]: async () => {
        const exists = await this.prisma.institution.findUnique({ where: { id: entityId } });
        if (!exists) return false;
        const budgetExists = await this.prisma.annualBudget.findFirst({
          where: { institution_id: entityId, year },
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
      [EntityType.CHURCH]: async () => {
        const exists = await this.prisma.church.findUnique({ where: { id: entityId } });
        if (!exists) return false;
        const budgetExists = await this.prisma.annualBudget.findFirst({
          where: { church_id: entityId, year },
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
      [EntityType.INSTITUTION_DEPARTMENT]: async () => {
        const exists = await this.prisma.department.findUnique({ where: { id: entityId } });
        if (!exists) return false;
        const budgetExists = await this.prisma.annualBudget.findFirst({
          where: { department_id: entityId, year },
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
      [EntityType.CHURCH_DEPARTMENT]: async () => {
        const exists = await this.prisma.department.findUnique({ where: { id: entityId } });
        if (!exists) return false;
        const budgetExists = await this.prisma.annualBudget.findFirst({
          where: { department_id: entityId, year },
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

    const checkAction = entityCheckActions[entityType];

    if (!checkAction) {
      this.logger.warn(`No check action defined for entity type '${entityType}'.`);
      return false;
    }

    return checkAction();
  }

  async findManyByFilters(filters: Partial<Record<keyof AnnualBudget, any>>): Promise<AnnualBudget[]> {
    const allowedKeys: (keyof AnnualBudget)[] = [
      'year',
      'church_id',
      'institution_id',
      'region_id',
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

}
