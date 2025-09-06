import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventRecipientCountAggregate } from './event-recipient-count-aggregate.output';
import { EventRecipientMinAggregate } from './event-recipient-min-aggregate.output';
import { EventRecipientMaxAggregate } from './event-recipient-max-aggregate.output';

@ObjectType()
export class AggregateEventRecipient {

    @Field(() => EventRecipientCountAggregate, {nullable:true})
    _count?: EventRecipientCountAggregate;

    @Field(() => EventRecipientMinAggregate, {nullable:true})
    _min?: EventRecipientMinAggregate;

    @Field(() => EventRecipientMaxAggregate, {nullable:true})
    _max?: EventRecipientMaxAggregate;
}
