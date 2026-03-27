import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectHistoryType } from '../prisma/project-history-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectHistoryCountAggregate } from './project-history-count-aggregate.output';
import { ProjectHistoryMinAggregate } from './project-history-min-aggregate.output';
import { ProjectHistoryMaxAggregate } from './project-history-max-aggregate.output';

@ObjectType()
export class ProjectHistoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => ProjectHistoryType, {nullable:false})
    type!: `${ProjectHistoryType}`;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    field_name?: string;

    @Field(() => String, {nullable:true})
    old_value?: string;

    @Field(() => String, {nullable:true})
    new_value?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => ProjectHistoryCountAggregate, {nullable:true})
    _count?: ProjectHistoryCountAggregate;

    @Field(() => ProjectHistoryMinAggregate, {nullable:true})
    _min?: ProjectHistoryMinAggregate;

    @Field(() => ProjectHistoryMaxAggregate, {nullable:true})
    _max?: ProjectHistoryMaxAggregate;
}
