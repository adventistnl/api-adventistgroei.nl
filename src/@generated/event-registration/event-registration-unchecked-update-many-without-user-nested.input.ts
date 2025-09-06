import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationCreateWithoutUserInput } from './event-registration-create-without-user.input';
import { Type } from 'class-transformer';
import { EventRegistrationCreateOrConnectWithoutUserInput } from './event-registration-create-or-connect-without-user.input';
import { EventRegistrationUpsertWithWhereUniqueWithoutUserInput } from './event-registration-upsert-with-where-unique-without-user.input';
import { EventRegistrationCreateManyUserInputEnvelope } from './event-registration-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { EventRegistrationUpdateWithWhereUniqueWithoutUserInput } from './event-registration-update-with-where-unique-without-user.input';
import { EventRegistrationUpdateManyWithWhereWithoutUserInput } from './event-registration-update-many-with-where-without-user.input';
import { EventRegistrationScalarWhereInput } from './event-registration-scalar-where.input';

@InputType()
export class EventRegistrationUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [EventRegistrationCreateWithoutUserInput], {nullable:true})
    @Type(() => EventRegistrationCreateWithoutUserInput)
    create?: Array<EventRegistrationCreateWithoutUserInput>;

    @Field(() => [EventRegistrationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventRegistrationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventRegistrationCreateOrConnectWithoutUserInput>;

    @Field(() => [EventRegistrationUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventRegistrationUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<EventRegistrationUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventRegistrationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventRegistrationCreateManyUserInputEnvelope)
    createMany?: EventRegistrationCreateManyUserInputEnvelope;

    @Field(() => [EventRegistrationWhereUniqueInput], {nullable:true})
    @Type(() => EventRegistrationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>>;

    @Field(() => [EventRegistrationWhereUniqueInput], {nullable:true})
    @Type(() => EventRegistrationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>>;

    @Field(() => [EventRegistrationWhereUniqueInput], {nullable:true})
    @Type(() => EventRegistrationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>>;

    @Field(() => [EventRegistrationWhereUniqueInput], {nullable:true})
    @Type(() => EventRegistrationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>>;

    @Field(() => [EventRegistrationUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventRegistrationUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<EventRegistrationUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventRegistrationUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => EventRegistrationUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<EventRegistrationUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventRegistrationScalarWhereInput], {nullable:true})
    @Type(() => EventRegistrationScalarWhereInput)
    deleteMany?: Array<EventRegistrationScalarWhereInput>;
}
