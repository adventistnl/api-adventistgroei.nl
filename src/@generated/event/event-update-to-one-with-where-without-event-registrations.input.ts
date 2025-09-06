import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutEvent_registrationsInput } from './event-update-without-event-registrations.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutEvent_registrationsInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => EventUpdateWithoutEvent_registrationsInput)
    data!: EventUpdateWithoutEvent_registrationsInput;
}
