import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransactionCreateInput } from './budget-transaction-create.input';
import { BudgetTransactionUpdateInput } from './budget-transaction-update.input';

@ArgsType()
export class UpsertOneBudgetTransactionArgs {

    @Field(() => BudgetTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransactionCreateInput, {nullable:false})
    @Type(() => BudgetTransactionCreateInput)
    create!: BudgetTransactionCreateInput;

    @Field(() => BudgetTransactionUpdateInput, {nullable:false})
    @Type(() => BudgetTransactionUpdateInput)
    update!: BudgetTransactionUpdateInput;
}
