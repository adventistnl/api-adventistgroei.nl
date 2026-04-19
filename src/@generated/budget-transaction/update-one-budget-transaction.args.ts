import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransactionUpdateInput } from './budget-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';

@ArgsType()
export class UpdateOneBudgetTransactionArgs {

    @Field(() => BudgetTransactionUpdateInput, {nullable:false})
    @Type(() => BudgetTransactionUpdateInput)
    data!: BudgetTransactionUpdateInput;

    @Field(() => BudgetTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>;
}
