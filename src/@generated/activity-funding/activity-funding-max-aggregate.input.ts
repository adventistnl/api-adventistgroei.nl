import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActivityFundingMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    activity_id?: true;

    @Field(() => Boolean, {nullable:true})
    entity_contribution_amount?: true;

    @Field(() => Boolean, {nullable:true})
    entity_contribution_percent?: true;

    @Field(() => Boolean, {nullable:true})
    entity_type?: true;

    @Field(() => Boolean, {nullable:true})
    entity_id?: true;

    @Field(() => Boolean, {nullable:true})
    validated?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;
}
