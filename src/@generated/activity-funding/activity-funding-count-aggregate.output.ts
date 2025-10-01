import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActivityFundingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    activity_id!: number;

    @Field(() => Int, {nullable:false})
    entity_type!: number;

    @Field(() => Int, {nullable:false})
    entity_id!: number;

    @Field(() => Int, {nullable:false})
    contribution_amount!: number;

    @Field(() => Int, {nullable:false})
    contribution_percent!: number;

    @Field(() => Int, {nullable:false})
    validated!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
