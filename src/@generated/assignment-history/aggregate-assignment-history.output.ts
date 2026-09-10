import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssignmentHistoryCountAggregate } from './assignment-history-count-aggregate.output';
import { AssignmentHistoryMinAggregate } from './assignment-history-min-aggregate.output';
import { AssignmentHistoryMaxAggregate } from './assignment-history-max-aggregate.output';

@ObjectType()
export class AggregateAssignmentHistory {

    @Field(() => AssignmentHistoryCountAggregate, {nullable:true})
    _count?: AssignmentHistoryCountAggregate;

    @Field(() => AssignmentHistoryMinAggregate, {nullable:true})
    _min?: AssignmentHistoryMinAggregate;

    @Field(() => AssignmentHistoryMaxAggregate, {nullable:true})
    _max?: AssignmentHistoryMaxAggregate;
}
