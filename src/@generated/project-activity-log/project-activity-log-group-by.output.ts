import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectActivityLogAction } from '../prisma/project-activity-log-action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectActivityLogCountAggregate } from './project-activity-log-count-aggregate.output';
import { ProjectActivityLogMinAggregate } from './project-activity-log-min-aggregate.output';
import { ProjectActivityLogMaxAggregate } from './project-activity-log-max-aggregate.output';

@ObjectType()
export class ProjectActivityLogGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => ProjectActivityLogAction, {nullable:false})
    action!: `${ProjectActivityLogAction}`;

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

    @Field(() => ProjectActivityLogCountAggregate, {nullable:true})
    _count?: ProjectActivityLogCountAggregate;

    @Field(() => ProjectActivityLogMinAggregate, {nullable:true})
    _min?: ProjectActivityLogMinAggregate;

    @Field(() => ProjectActivityLogMaxAggregate, {nullable:true})
    _max?: ProjectActivityLogMaxAggregate;
}
