import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssignmentCountAggregate } from './assignment-count-aggregate.output';
import { AssignmentMinAggregate } from './assignment-min-aggregate.output';
import { AssignmentMaxAggregate } from './assignment-max-aggregate.output';

@ObjectType()
export class AggregateAssignment {

    @Field(() => AssignmentCountAggregate, {nullable:true})
    _count?: AssignmentCountAggregate;

    @Field(() => AssignmentMinAggregate, {nullable:true})
    _min?: AssignmentMinAggregate;

    @Field(() => AssignmentMaxAggregate, {nullable:true})
    _max?: AssignmentMaxAggregate;
}
