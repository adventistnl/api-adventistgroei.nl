import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransactionCreateManyInput } from './budget-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBudgetTransactionArgs {

    @Field(() => [BudgetTransactionCreateManyInput], {nullable:false})
    @Type(() => BudgetTransactionCreateManyInput)
    data!: Array<BudgetTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
