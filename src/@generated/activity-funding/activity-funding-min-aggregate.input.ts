import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActivityFundingMinAggregateInput {

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

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    updated_by?: true;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_at?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_by?: true;
}
