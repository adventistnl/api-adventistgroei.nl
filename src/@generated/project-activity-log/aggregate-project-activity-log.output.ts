import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectActivityLogCountAggregate } from './project-activity-log-count-aggregate.output';
import { ProjectActivityLogMinAggregate } from './project-activity-log-min-aggregate.output';
import { ProjectActivityLogMaxAggregate } from './project-activity-log-max-aggregate.output';

@ObjectType()
export class AggregateProjectActivityLog {

    @Field(() => ProjectActivityLogCountAggregate, {nullable:true})
    _count?: ProjectActivityLogCountAggregate;

    @Field(() => ProjectActivityLogMinAggregate, {nullable:true})
    _min?: ProjectActivityLogMinAggregate;

    @Field(() => ProjectActivityLogMaxAggregate, {nullable:true})
    _max?: ProjectActivityLogMaxAggregate;
}
