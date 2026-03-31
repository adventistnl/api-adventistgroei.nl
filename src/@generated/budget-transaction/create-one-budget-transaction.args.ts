import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransactionCreateInput } from './budget-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBudgetTransactionArgs {

    @Field(() => BudgetTransactionCreateInput, {nullable:false})
    @Type(() => BudgetTransactionCreateInput)
    data!: BudgetTransactionCreateInput;
}
