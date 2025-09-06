import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DirectMessageRecipientCountAggregate } from './direct-message-recipient-count-aggregate.output';
import { DirectMessageRecipientMinAggregate } from './direct-message-recipient-min-aggregate.output';
import { DirectMessageRecipientMaxAggregate } from './direct-message-recipient-max-aggregate.output';

@ObjectType()
export class AggregateDirectMessageRecipient {

    @Field(() => DirectMessageRecipientCountAggregate, {nullable:true})
    _count?: DirectMessageRecipientCountAggregate;

    @Field(() => DirectMessageRecipientMinAggregate, {nullable:true})
    _min?: DirectMessageRecipientMinAggregate;

    @Field(() => DirectMessageRecipientMaxAggregate, {nullable:true})
    _max?: DirectMessageRecipientMaxAggregate;
}
