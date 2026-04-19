import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BudgetTransactionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    delta_allocated?: true;

    @Field(() => Boolean, {nullable:true})
    delta_expenses?: true;
}
