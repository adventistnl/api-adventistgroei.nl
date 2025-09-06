import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubsidyStatusCountAggregate } from './subsidy-status-count-aggregate.output';
import { SubsidyStatusAvgAggregate } from './subsidy-status-avg-aggregate.output';
import { SubsidyStatusSumAggregate } from './subsidy-status-sum-aggregate.output';
import { SubsidyStatusMinAggregate } from './subsidy-status-min-aggregate.output';
import { SubsidyStatusMaxAggregate } from './subsidy-status-max-aggregate.output';

@ObjectType()
export class SubsidyStatusGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    assigned_to!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

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

    @Field(() => SubsidyStatusCountAggregate, {nullable:true})
    _count?: SubsidyStatusCountAggregate;

    @Field(() => SubsidyStatusAvgAggregate, {nullable:true})
    _avg?: SubsidyStatusAvgAggregate;

    @Field(() => SubsidyStatusSumAggregate, {nullable:true})
    _sum?: SubsidyStatusSumAggregate;

    @Field(() => SubsidyStatusMinAggregate, {nullable:true})
    _min?: SubsidyStatusMinAggregate;

    @Field(() => SubsidyStatusMaxAggregate, {nullable:true})
    _max?: SubsidyStatusMaxAggregate;
}
