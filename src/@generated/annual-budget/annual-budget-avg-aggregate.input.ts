import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnnualBudgetAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    year?: true;

    @Field(() => Boolean, {nullable:true})
    planned_budget?: true;

    @Field(() => Boolean, {nullable:true})
    approved_amount?: true;
}
