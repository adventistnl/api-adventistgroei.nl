import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransactionUpdateWithoutAnnual_budgetInput } from './budget-transaction-update-without-annual-budget.input';

@InputType()
export class BudgetTransactionUpdateWithWhereUniqueWithoutAnnual_budgetInput {

    @Field(() => BudgetTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransactionUpdateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => BudgetTransactionUpdateWithoutAnnual_budgetInput)
    data!: BudgetTransactionUpdateWithoutAnnual_budgetInput;
}
