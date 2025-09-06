import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutEvent_registrationsInput } from './event-create-without-event-registrations.input';

@InputType()
export class EventCreateOrConnectWithoutEvent_registrationsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => EventCreateWithoutEvent_registrationsInput)
    create!: EventCreateWithoutEvent_registrationsInput;
}
