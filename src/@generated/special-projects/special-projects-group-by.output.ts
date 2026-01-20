import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { SpecialProjectsCountAggregate } from './special-projects-count-aggregate.output';
import { SpecialProjectsAvgAggregate } from './special-projects-avg-aggregate.output';
import { SpecialProjectsSumAggregate } from './special-projects-sum-aggregate.output';
import { SpecialProjectsMinAggregate } from './special-projects-min-aggregate.output';
import { SpecialProjectsMaxAggregate } from './special-projects-max-aggregate.output';

@ObjectType()
export class SpecialProjectsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    project_id?: string;

    @Field(() => String, {nullable:true})
    justification_note?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    budget?: Decimal;

    @Field(() => String, {nullable:false})
    subsidy_status_id!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:true})
    location_church_plant?: string;

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

    @Field(() => SpecialProjectsCountAggregate, {nullable:true})
    _count?: SpecialProjectsCountAggregate;

    @Field(() => SpecialProjectsAvgAggregate, {nullable:true})
    _avg?: SpecialProjectsAvgAggregate;

    @Field(() => SpecialProjectsSumAggregate, {nullable:true})
    _sum?: SpecialProjectsSumAggregate;

    @Field(() => SpecialProjectsMinAggregate, {nullable:true})
    _min?: SpecialProjectsMinAggregate;

    @Field(() => SpecialProjectsMaxAggregate, {nullable:true})
    _max?: SpecialProjectsMaxAggregate;
}
