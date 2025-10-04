import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Float } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { ActivityFundingCountAggregate } from './activity-funding-count-aggregate.output';
import { ActivityFundingAvgAggregate } from './activity-funding-avg-aggregate.output';
import { ActivityFundingSumAggregate } from './activity-funding-sum-aggregate.output';
import { ActivityFundingMinAggregate } from './activity-funding-min-aggregate.output';
import { ActivityFundingMaxAggregate } from './activity-funding-max-aggregate.output';

@ObjectType()
export class ActivityFundingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    entity_contribution_amount!: Decimal;

    @Field(() => Float, {nullable:false})
    entity_contribution_percent!: number;

    @Field(() => EntityType, {nullable:false})
    entity_type!: `${EntityType}`;

    @Field(() => String, {nullable:false})
    entity_id!: string;

    @Field(() => Boolean, {nullable:false})
    validated!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => ActivityFundingCountAggregate, {nullable:true})
    _count?: ActivityFundingCountAggregate;

    @Field(() => ActivityFundingAvgAggregate, {nullable:true})
    _avg?: ActivityFundingAvgAggregate;

    @Field(() => ActivityFundingSumAggregate, {nullable:true})
    _sum?: ActivityFundingSumAggregate;

    @Field(() => ActivityFundingMinAggregate, {nullable:true})
    _min?: ActivityFundingMinAggregate;

    @Field(() => ActivityFundingMaxAggregate, {nullable:true})
    _max?: ActivityFundingMaxAggregate;
}
