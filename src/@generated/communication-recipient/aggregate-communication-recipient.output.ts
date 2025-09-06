import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommunicationRecipientCountAggregate } from './communication-recipient-count-aggregate.output';
import { CommunicationRecipientMinAggregate } from './communication-recipient-min-aggregate.output';
import { CommunicationRecipientMaxAggregate } from './communication-recipient-max-aggregate.output';

@ObjectType()
export class AggregateCommunicationRecipient {

    @Field(() => CommunicationRecipientCountAggregate, {nullable:true})
    _count?: CommunicationRecipientCountAggregate;

    @Field(() => CommunicationRecipientMinAggregate, {nullable:true})
    _min?: CommunicationRecipientMinAggregate;

    @Field(() => CommunicationRecipientMaxAggregate, {nullable:true})
    _max?: CommunicationRecipientMaxAggregate;
}
