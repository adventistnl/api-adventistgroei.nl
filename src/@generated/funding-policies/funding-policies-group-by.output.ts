import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Int } from '@nestjs/graphql';
import { FundingPoliciesCountAggregate } from './funding-policies-count-aggregate.output';
import { FundingPoliciesAvgAggregate } from './funding-policies-avg-aggregate.output';
import { FundingPoliciesSumAggregate } from './funding-policies-sum-aggregate.output';
import { FundingPoliciesMinAggregate } from './funding-policies-min-aggregate.output';
import { FundingPoliciesMaxAggregate } from './funding-policies-max-aggregate.output';

@ObjectType()
export class FundingPoliciesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => EntityType, {nullable:false})
    entity_type!: `${EntityType}`;

    @Field(() => String, {nullable:false})
    entity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    max_percent!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    annual_cap!: Decimal;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => FundingPoliciesCountAggregate, {nullable:true})
    _count?: FundingPoliciesCountAggregate;

    @Field(() => FundingPoliciesAvgAggregate, {nullable:true})
    _avg?: FundingPoliciesAvgAggregate;

    @Field(() => FundingPoliciesSumAggregate, {nullable:true})
    _sum?: FundingPoliciesSumAggregate;

    @Field(() => FundingPoliciesMinAggregate, {nullable:true})
    _min?: FundingPoliciesMinAggregate;

    @Field(() => FundingPoliciesMaxAggregate, {nullable:true})
    _max?: FundingPoliciesMaxAggregate;
}
