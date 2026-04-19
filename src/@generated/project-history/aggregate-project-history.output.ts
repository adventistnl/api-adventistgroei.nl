import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectHistoryCountAggregate } from './project-history-count-aggregate.output';
import { ProjectHistoryMinAggregate } from './project-history-min-aggregate.output';
import { ProjectHistoryMaxAggregate } from './project-history-max-aggregate.output';

@ObjectType()
export class AggregateProjectHistory {

    @Field(() => ProjectHistoryCountAggregate, {nullable:true})
    _count?: ProjectHistoryCountAggregate;

    @Field(() => ProjectHistoryMinAggregate, {nullable:true})
    _min?: ProjectHistoryMinAggregate;

    @Field(() => ProjectHistoryMaxAggregate, {nullable:true})
    _max?: ProjectHistoryMaxAggregate;
}
