import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationCreateWithoutEventInput } from './event-registration-create-without-event.input';
import { Type } from 'class-transformer';
import { EventRegistrationCreateOrConnectWithoutEventInput } from './event-registration-create-or-connect-without-event.input';
import { EventRegistrationCreateManyEventInputEnvelope } from './event-registration-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';

@InputType()
export class EventRegistrationUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [EventRegistrationCreateWithoutEventInput], {nullable:true})
    @Type(() => EventRegistrationCreateWithoutEventInput)
    create?: Array<EventRegistrationCreateWithoutEventInput>;

    @Field(() => [EventRegistrationCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventRegistrationCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventRegistrationCreateOrConnectWithoutEventInput>;

    @Field(() => EventRegistrationCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventRegistrationCreateManyEventInputEnvelope)
    createMany?: EventRegistrationCreateManyEventInputEnvelope;

    @Field(() => [EventRegistrationWhereUniqueInput], {nullable:true})
    @Type(() => EventRegistrationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>>;
}
