import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventRegistrationCountAggregate } from './event-registration-count-aggregate.output';
import { EventRegistrationMinAggregate } from './event-registration-min-aggregate.output';
import { EventRegistrationMaxAggregate } from './event-registration-max-aggregate.output';

@ObjectType()
export class AggregateEventRegistration {

    @Field(() => EventRegistrationCountAggregate, {nullable:true})
    _count?: EventRegistrationCountAggregate;

    @Field(() => EventRegistrationMinAggregate, {nullable:true})
    _min?: EventRegistrationMinAggregate;

    @Field(() => EventRegistrationMaxAggregate, {nullable:true})
    _max?: EventRegistrationMaxAggregate;
}
