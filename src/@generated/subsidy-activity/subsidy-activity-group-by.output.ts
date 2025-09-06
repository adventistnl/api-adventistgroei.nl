import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { SubsidyActivityCountAggregate } from './subsidy-activity-count-aggregate.output';
import { SubsidyActivityAvgAggregate } from './subsidy-activity-avg-aggregate.output';
import { SubsidyActivitySumAggregate } from './subsidy-activity-sum-aggregate.output';
import { SubsidyActivityMinAggregate } from './subsidy-activity-min-aggregate.output';
import { SubsidyActivityMaxAggregate } from './subsidy-activity-max-aggregate.output';

@ObjectType()
export class SubsidyActivityGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subsidy_request_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    budget_amount!: Decimal;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => SubsidyActivityCountAggregate, {nullable:true})
    _count?: SubsidyActivityCountAggregate;

    @Field(() => SubsidyActivityAvgAggregate, {nullable:true})
    _avg?: SubsidyActivityAvgAggregate;

    @Field(() => SubsidyActivitySumAggregate, {nullable:true})
    _sum?: SubsidyActivitySumAggregate;

    @Field(() => SubsidyActivityMinAggregate, {nullable:true})
    _min?: SubsidyActivityMinAggregate;

    @Field(() => SubsidyActivityMaxAggregate, {nullable:true})
    _max?: SubsidyActivityMaxAggregate;
}
