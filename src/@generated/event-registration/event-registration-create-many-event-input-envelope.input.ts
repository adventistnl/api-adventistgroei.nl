import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationCreateManyEventInput } from './event-registration-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class EventRegistrationCreateManyEventInputEnvelope {

    @Field(() => [EventRegistrationCreateManyEventInput], {nullable:false})
    @Type(() => EventRegistrationCreateManyEventInput)
    data!: Array<EventRegistrationCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
