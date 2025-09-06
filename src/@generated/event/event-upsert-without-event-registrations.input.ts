import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutEvent_registrationsInput } from './event-update-without-event-registrations.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutEvent_registrationsInput } from './event-create-without-event-registrations.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutEvent_registrationsInput {

    @Field(() => EventUpdateWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => EventUpdateWithoutEvent_registrationsInput)
    update!: EventUpdateWithoutEvent_registrationsInput;

    @Field(() => EventCreateWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => EventCreateWithoutEvent_registrationsInput)
    create!: EventCreateWithoutEvent_registrationsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
