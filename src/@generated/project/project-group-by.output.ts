import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ProjectType } from '../prisma/project-type.enum';
import { ProjectStatus } from '../prisma/project-status.enum';
import { ProjectCountAggregate } from './project-count-aggregate.output';
import { ProjectAvgAggregate } from './project-avg-aggregate.output';
import { ProjectSumAggregate } from './project-sum-aggregate.output';
import { ProjectMinAggregate } from './project-min-aggregate.output';
import { ProjectMaxAggregate } from './project-max-aggregate.output';

@ObjectType()
export class ProjectGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:true})
    church_department_id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    budget!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    subsidized_budget!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    balance!: Decimal;

    @Field(() => String, {nullable:false})
    owner_id!: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => ProjectType, {nullable:false})
    type!: `${ProjectType}`;

    @Field(() => ProjectStatus, {nullable:false})
    status!: `${ProjectStatus}`;

    @Field(() => Boolean, {nullable:false})
    is_private!: boolean;

    @Field(() => Boolean, {nullable:false})
    required_volunteers!: boolean;

    @Field(() => Date, {nullable:false})
    start_at!: Date | string;

    @Field(() => Date, {nullable:false})
    end_at!: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:true})
    deadline?: Date | string;

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

    @Field(() => String, {nullable:true})
    event_id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => ProjectCountAggregate, {nullable:true})
    _count?: ProjectCountAggregate;

    @Field(() => ProjectAvgAggregate, {nullable:true})
    _avg?: ProjectAvgAggregate;

    @Field(() => ProjectSumAggregate, {nullable:true})
    _sum?: ProjectSumAggregate;

    @Field(() => ProjectMinAggregate, {nullable:true})
    _min?: ProjectMinAggregate;

    @Field(() => ProjectMaxAggregate, {nullable:true})
    _max?: ProjectMaxAggregate;
}
