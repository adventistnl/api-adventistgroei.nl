import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnnualBudgetSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    year?: true;

    @Field(() => Boolean, {nullable:true})
    planned_budget?: true;

    @Field(() => Boolean, {nullable:true})
    total_expenses?: true;

    @Field(() => Boolean, {nullable:true})
    balance?: true;

    @Field(() => Boolean, {nullable:true})
    requested_amount?: true;

    @Field(() => Boolean, {nullable:true})
    approved_amount?: true;
}
