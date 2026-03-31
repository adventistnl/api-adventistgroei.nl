import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransactionUpdateWithoutAnnual_budgetInput } from './budget-transaction-update-without-annual-budget.input';
import { BudgetTransactionCreateWithoutAnnual_budgetInput } from './budget-transaction-create-without-annual-budget.input';

@InputType()
export class BudgetTransactionUpsertWithWhereUniqueWithoutAnnual_budgetInput {

    @Field(() => BudgetTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransactionUpdateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => BudgetTransactionUpdateWithoutAnnual_budgetInput)
    update!: BudgetTransactionUpdateWithoutAnnual_budgetInput;

    @Field(() => BudgetTransactionCreateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => BudgetTransactionCreateWithoutAnnual_budgetInput)
    create!: BudgetTransactionCreateWithoutAnnual_budgetInput;
}
