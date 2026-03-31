import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionWhereInput } from './budget-transaction-where.input';
import { Type } from 'class-transformer';

@InputType()
export class BudgetTransactionListRelationFilter {

    @Field(() => BudgetTransactionWhereInput, {nullable:true})
    @Type(() => BudgetTransactionWhereInput)
    every?: BudgetTransactionWhereInput;

    @Field(() => BudgetTransactionWhereInput, {nullable:true})
    @Type(() => BudgetTransactionWhereInput)
    some?: BudgetTransactionWhereInput;

    @Field(() => BudgetTransactionWhereInput, {nullable:true})
    @Type(() => BudgetTransactionWhereInput)
    none?: BudgetTransactionWhereInput;
}
