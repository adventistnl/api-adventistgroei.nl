import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransactionUpdateManyMutationInput } from './budget-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BudgetTransactionWhereInput } from './budget-transaction-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBudgetTransactionArgs {

    @Field(() => BudgetTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => BudgetTransactionUpdateManyMutationInput)
    data!: BudgetTransactionUpdateManyMutationInput;

    @Field(() => BudgetTransactionWhereInput, {nullable:true})
    @Type(() => BudgetTransactionWhereInput)
    where?: BudgetTransactionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
