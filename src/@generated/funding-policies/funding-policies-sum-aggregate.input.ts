import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FundingPoliciesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    max_percent?: true;

    @Field(() => Boolean, {nullable:true})
    annual_cap?: true;

    @Field(() => Boolean, {nullable:true})
    year?: true;
}
