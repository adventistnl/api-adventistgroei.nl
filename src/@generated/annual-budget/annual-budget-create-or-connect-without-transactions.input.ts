import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutTransactionsInput } from './annual-budget-create-without-transactions.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutTransactionsInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutTransactionsInput)
    create!: AnnualBudgetCreateWithoutTransactionsInput;
}
