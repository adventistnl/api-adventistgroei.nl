import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationCreateWithoutEventInput } from './event-registration-create-without-event.input';
import { Type } from 'class-transformer';
import { EventRegistrationCreateOrConnectWithoutEventInput } from './event-registration-create-or-connect-without-event.input';
import { EventRegistrationUpsertWithWhereUniqueWithoutEventInput } from './event-registration-upsert-with-where-unique-without-event.input';
import { EventRegistrationCreateManyEventInputEnvelope } from './event-registration-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { EventRegistrationUpdateWithWhereUniqueWithoutEventInput } from './event-registration-update-with-where-unique-without-event.input';
import { EventRegistrationUpdateManyWithWhereWithoutEventInput } from './event-registration-update-many-with-where-without-event.input';
import { EventRegistrationScalarWhereInput } from './event-registration-scalar-where.input';

@InputType()
export class EventRegistrationUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [EventRegistrationCreateWithoutEventInput], {nullable:true})
    @Type(() => EventRegistrationCreateWithoutEventInput)
    create?: Array<EventRegistrationCreateWithoutEventInput>;

    @Field(() => [EventRegistrationCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventRegistrationCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventRegistrationCreateOrConnectWithoutEventInput>;

    @Field(() => [EventRegistrationUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventRegistrationUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<EventRegistrationUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => EventRegistrationCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventRegistrationCreateManyEventInputEnvelope)
    createMany?: EventRegistrationCreateManyEventInputEnvelope;

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

    @Field(() => [EventRegistrationUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventRegistrationUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<EventRegistrationUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [EventRegistrationUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => EventRegistrationUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<EventRegistrationUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [EventRegistrationScalarWhereInput], {nullable:true})
    @Type(() => EventRegistrationScalarWhereInput)
    deleteMany?: Array<EventRegistrationScalarWhereInput>;
}
