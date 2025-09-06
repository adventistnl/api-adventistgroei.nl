import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRecipientCreateManyUserInput } from './event-recipient-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class EventRecipientCreateManyUserInputEnvelope {

    @Field(() => [EventRecipientCreateManyUserInput], {nullable:false})
    @Type(() => EventRecipientCreateManyUserInput)
    data!: Array<EventRecipientCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
