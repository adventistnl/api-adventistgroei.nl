import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AvailabilityCountAggregate } from './availability-count-aggregate.output';
import { AvailabilityMinAggregate } from './availability-min-aggregate.output';
import { AvailabilityMaxAggregate } from './availability-max-aggregate.output';

@ObjectType()
export class AggregateAvailability {

    @Field(() => AvailabilityCountAggregate, {nullable:true})
    _count?: AvailabilityCountAggregate;

    @Field(() => AvailabilityMinAggregate, {nullable:true})
    _min?: AvailabilityMinAggregate;

    @Field(() => AvailabilityMaxAggregate, {nullable:true})
    _max?: AvailabilityMaxAggregate;
}
