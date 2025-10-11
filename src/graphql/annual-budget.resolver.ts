import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AnnualBudget } from 'src/@generated/annual-budget/annual-budget.model';
import { AnnualBudgetCreateDto } from 'src/dto/annual_budget.dto';
import { Permission } from 'src/middlewares';
import { AnnualBudgetService } from 'src/services/annual-budget.service';

@Resolver(() => AnnualBudget)
export class AnnualBudgetResolver {
  constructor(private readonly annualBudgetService: AnnualBudgetService) {}

  @Mutation(() => AnnualBudget)
  @Permission()
  async createAnnualBudget(
    @Args('data') data: AnnualBudgetCreateDto,
    @Context() context: { userId: string },
  ): Promise<AnnualBudget> {
    return this.annualBudgetService.create(data, context.userId);
  }

}
