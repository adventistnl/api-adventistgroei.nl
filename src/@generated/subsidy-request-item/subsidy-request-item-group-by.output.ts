import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { SubsidyRequestItemCountAggregate } from './subsidy-request-item-count-aggregate.output';
import { SubsidyRequestItemAvgAggregate } from './subsidy-request-item-avg-aggregate.output';
import { SubsidyRequestItemSumAggregate } from './subsidy-request-item-sum-aggregate.output';
import { SubsidyRequestItemMinAggregate } from './subsidy-request-item-min-aggregate.output';
import { SubsidyRequestItemMaxAggregate } from './subsidy-request-item-max-aggregate.output';

@ObjectType()
export class SubsidyRequestItemGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subsidy_request_id!: string;

    @Field(() => String, {nullable:false})
    project_activity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    requested_amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    approved_amount!: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => SubsidyRequestItemCountAggregate, {nullable:true})
    _count?: SubsidyRequestItemCountAggregate;

    @Field(() => SubsidyRequestItemAvgAggregate, {nullable:true})
    _avg?: SubsidyRequestItemAvgAggregate;

    @Field(() => SubsidyRequestItemSumAggregate, {nullable:true})
    _sum?: SubsidyRequestItemSumAggregate;

    @Field(() => SubsidyRequestItemMinAggregate, {nullable:true})
    _min?: SubsidyRequestItemMinAggregate;

    @Field(() => SubsidyRequestItemMaxAggregate, {nullable:true})
    _max?: SubsidyRequestItemMaxAggregate;
}
