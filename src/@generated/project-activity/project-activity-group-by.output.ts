import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ProjectActivityCountAggregate } from './project-activity-count-aggregate.output';
import { ProjectActivityAvgAggregate } from './project-activity-avg-aggregate.output';
import { ProjectActivitySumAggregate } from './project-activity-sum-aggregate.output';
import { ProjectActivityMinAggregate } from './project-activity-min-aggregate.output';
import { ProjectActivityMaxAggregate } from './project-activity-max-aggregate.output';

@ObjectType()
export class ProjectActivityGroupBy {

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

    @Field(() => ProjectActivityCountAggregate, {nullable:true})
    _count?: ProjectActivityCountAggregate;

    @Field(() => ProjectActivityAvgAggregate, {nullable:true})
    _avg?: ProjectActivityAvgAggregate;

    @Field(() => ProjectActivitySumAggregate, {nullable:true})
    _sum?: ProjectActivitySumAggregate;

    @Field(() => ProjectActivityMinAggregate, {nullable:true})
    _min?: ProjectActivityMinAggregate;

    @Field(() => ProjectActivityMaxAggregate, {nullable:true})
    _max?: ProjectActivityMaxAggregate;
}
