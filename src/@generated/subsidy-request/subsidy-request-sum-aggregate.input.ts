import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubsidyRequestSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    total_budget?: true;

    @Field(() => Boolean, {nullable:true})
    approved_amount?: true;
}
