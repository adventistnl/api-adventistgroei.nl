import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutEvent_registrationsInput } from './event-create-without-event-registrations.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutEvent_registrationsInput } from './event-create-or-connect-without-event-registrations.input';
import { EventUpsertWithoutEvent_registrationsInput } from './event-upsert-without-event-registrations.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutEvent_registrationsInput } from './event-update-to-one-with-where-without-event-registrations.input';

@InputType()
export class EventUpdateOneRequiredWithoutEvent_registrationsNestedInput {

    @Field(() => EventCreateWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => EventCreateWithoutEvent_registrationsInput)
    create?: EventCreateWithoutEvent_registrationsInput;

    @Field(() => EventCreateOrConnectWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutEvent_registrationsInput)
    connectOrCreate?: EventCreateOrConnectWithoutEvent_registrationsInput;

    @Field(() => EventUpsertWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => EventUpsertWithoutEvent_registrationsInput)
    upsert?: EventUpsertWithoutEvent_registrationsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutEvent_registrationsInput)
    update?: EventUpdateToOneWithWhereWithoutEvent_registrationsInput;
}
