import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AnnualBudgetCreateDto } from 'src/dto/annual_budget.dto';
import { AnnualBudget } from '@prisma/client';
import { EntityType } from 'src/@generated/prisma/entity-type.enum';

@Injectable()
export class AnnualBudgetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: AnnualBudgetCreateDto, userId: string): Promise<AnnualBudget> {
    const { entity_type, entity_id, ...budgetData } = dto;
    const data = { 
      ...budgetData,
      institution: { connect: { id: entity_id } },
      total_expenses: 0,
      balance: 0,
      created_by: userId,
      updated_by: userId,
    }
    switch (entity_type) {
      case EntityType.INSTITUTION:
        return this.prisma.annualBudget.create({
          data: { ...data, institution: { connect: { id: entity_id } } },
        });
      case EntityType.REGION:
        return this.prisma.annualBudget.create({
          data: { ...data, region: { connect: { id: entity_id } } },
        });
      case EntityType.CHURCH:
        return this.prisma.annualBudget.create({
          data: { ...data, church: { connect: { id: entity_id } } },
        });
      case EntityType.INSTITUTION_DEPARTMENT:
        return this.prisma.annualBudget.create({
          data: { ...data, institution: { connect: { id: entity_id } } },
        });
      default:
        throw new Error('Invalid entity type');
    }
  }
}
