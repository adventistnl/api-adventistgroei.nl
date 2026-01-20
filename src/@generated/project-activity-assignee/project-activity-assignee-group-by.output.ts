import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCountAggregate } from './project-activity-assignee-count-aggregate.output';
import { ProjectActivityAssigneeMinAggregate } from './project-activity-assignee-min-aggregate.output';
import { ProjectActivityAssigneeMaxAggregate } from './project-activity-assignee-max-aggregate.output';

@ObjectType()
export class ProjectActivityAssigneeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => ProjectActivityAssigneeCountAggregate, {nullable:true})
    _count?: ProjectActivityAssigneeCountAggregate;

    @Field(() => ProjectActivityAssigneeMinAggregate, {nullable:true})
    _min?: ProjectActivityAssigneeMinAggregate;

    @Field(() => ProjectActivityAssigneeMaxAggregate, {nullable:true})
    _max?: ProjectActivityAssigneeMaxAggregate;
}
