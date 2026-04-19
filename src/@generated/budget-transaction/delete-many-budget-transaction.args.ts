import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransactionWhereInput } from './budget-transaction-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBudgetTransactionArgs {

    @Field(() => BudgetTransactionWhereInput, {nullable:true})
    @Type(() => BudgetTransactionWhereInput)
    where?: BudgetTransactionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
