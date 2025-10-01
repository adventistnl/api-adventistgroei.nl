import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FundingPoliciesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    entity_type?: true;

    @Field(() => Boolean, {nullable:true})
    entity_id?: true;

    @Field(() => Boolean, {nullable:true})
    max_percent?: true;

    @Field(() => Boolean, {nullable:true})
    annual_cap?: true;

    @Field(() => Boolean, {nullable:true})
    year?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
