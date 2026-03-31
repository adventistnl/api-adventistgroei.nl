import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateWithoutAnnual_budgetInput } from './budget-transaction-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { BudgetTransactionCreateOrConnectWithoutAnnual_budgetInput } from './budget-transaction-create-or-connect-without-annual-budget.input';
import { BudgetTransactionCreateManyAnnual_budgetInputEnvelope } from './budget-transaction-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';

@InputType()
export class BudgetTransactionCreateNestedManyWithoutAnnual_budgetInput {

    @Field(() => [BudgetTransactionCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => BudgetTransactionCreateWithoutAnnual_budgetInput)
    create?: Array<BudgetTransactionCreateWithoutAnnual_budgetInput>;

    @Field(() => [BudgetTransactionCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => BudgetTransactionCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<BudgetTransactionCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => BudgetTransactionCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => BudgetTransactionCreateManyAnnual_budgetInputEnvelope)
    createMany?: BudgetTransactionCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [BudgetTransactionWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>>;
}
