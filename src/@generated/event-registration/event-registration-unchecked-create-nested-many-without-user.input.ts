import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationCreateWithoutUserInput } from './event-registration-create-without-user.input';
import { Type } from 'class-transformer';
import { EventRegistrationCreateOrConnectWithoutUserInput } from './event-registration-create-or-connect-without-user.input';
import { EventRegistrationCreateManyUserInputEnvelope } from './event-registration-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';

@InputType()
export class EventRegistrationUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [EventRegistrationCreateWithoutUserInput], {nullable:true})
    @Type(() => EventRegistrationCreateWithoutUserInput)
    create?: Array<EventRegistrationCreateWithoutUserInput>;

    @Field(() => [EventRegistrationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventRegistrationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventRegistrationCreateOrConnectWithoutUserInput>;

    @Field(() => EventRegistrationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventRegistrationCreateManyUserInputEnvelope)
    createMany?: EventRegistrationCreateManyUserInputEnvelope;

    @Field(() => [EventRegistrationWhereUniqueInput], {nullable:true})
    @Type(() => EventRegistrationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>>;
}
