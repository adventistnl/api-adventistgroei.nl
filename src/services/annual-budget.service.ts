import { Injectable } from '@nestjs/common';
import { AnnualBudget } from '@prisma/client';
import { AnnualBudgetCreateDto } from 'src/dto/annual_budget.dto';
import { AnnualBudgetRepository } from 'src/repositories/annual-budget.repository';

@Injectable()
export class AnnualBudgetService {
  constructor(private readonly annualBudgetRepository: AnnualBudgetRepository) {}

  async create(data: AnnualBudgetCreateDto, userId: string): Promise<AnnualBudget> {
    return this.annualBudgetRepository.create(data, userId);
  }

}
