import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRecipientCreateManyEventInput } from './event-recipient-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class EventRecipientCreateManyEventInputEnvelope {

    @Field(() => [EventRecipientCreateManyEventInput], {nullable:false})
    @Type(() => EventRecipientCreateManyEventInput)
    data!: Array<EventRecipientCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
