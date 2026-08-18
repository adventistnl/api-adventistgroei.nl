import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssignmentRequestCountAggregate } from './assignment-request-count-aggregate.output';
import { AssignmentRequestMinAggregate } from './assignment-request-min-aggregate.output';
import { AssignmentRequestMaxAggregate } from './assignment-request-max-aggregate.output';

@ObjectType()
export class AggregateAssignmentRequest {

    @Field(() => AssignmentRequestCountAggregate, {nullable:true})
    _count?: AssignmentRequestCountAggregate;

    @Field(() => AssignmentRequestMinAggregate, {nullable:true})
    _min?: AssignmentRequestMinAggregate;

    @Field(() => AssignmentRequestMaxAggregate, {nullable:true})
    _max?: AssignmentRequestMaxAggregate;
}
