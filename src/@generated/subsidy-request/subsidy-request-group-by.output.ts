import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { SubsidyRequestPriority } from '../prisma/subsidy-request-priority.enum';
import { SubsidyRequestCountAggregate } from './subsidy-request-count-aggregate.output';
import { SubsidyRequestAvgAggregate } from './subsidy-request-avg-aggregate.output';
import { SubsidyRequestSumAggregate } from './subsidy-request-sum-aggregate.output';
import { SubsidyRequestMinAggregate } from './subsidy-request-min-aggregate.output';
import { SubsidyRequestMaxAggregate } from './subsidy-request-max-aggregate.output';

@ObjectType()
export class SubsidyRequestGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    total_budget!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    approved_amount!: Decimal;

    @Field(() => String, {nullable:true})
    rejection_reason?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:true})
    approved_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => String, {nullable:true})
    approved_by?: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    requester_id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => SubsidyRequestPriority, {nullable:false})
    priority!: `${SubsidyRequestPriority}`;

    @Field(() => String, {nullable:false})
    subsidy_statuses_id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => Boolean, {nullable:false})
    is_for_advance!: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    advance_amount?: Decimal;

    @Field(() => SubsidyRequestCountAggregate, {nullable:true})
    _count?: SubsidyRequestCountAggregate;

    @Field(() => SubsidyRequestAvgAggregate, {nullable:true})
    _avg?: SubsidyRequestAvgAggregate;

    @Field(() => SubsidyRequestSumAggregate, {nullable:true})
    _sum?: SubsidyRequestSumAggregate;

    @Field(() => SubsidyRequestMinAggregate, {nullable:true})
    _min?: SubsidyRequestMinAggregate;

    @Field(() => SubsidyRequestMaxAggregate, {nullable:true})
    _max?: SubsidyRequestMaxAggregate;
}
