import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCountAggregate } from './project-activity-assignee-count-aggregate.output';
import { ProjectActivityAssigneeMinAggregate } from './project-activity-assignee-min-aggregate.output';
import { ProjectActivityAssigneeMaxAggregate } from './project-activity-assignee-max-aggregate.output';

@ObjectType()
export class AggregateProjectActivityAssignee {

    @Field(() => ProjectActivityAssigneeCountAggregate, {nullable:true})
    _count?: ProjectActivityAssigneeCountAggregate;

    @Field(() => ProjectActivityAssigneeMinAggregate, {nullable:true})
    _min?: ProjectActivityAssigneeMinAggregate;

    @Field(() => ProjectActivityAssigneeMaxAggregate, {nullable:true})
    _max?: ProjectActivityAssigneeMaxAggregate;
}
