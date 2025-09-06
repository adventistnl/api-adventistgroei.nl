import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutContactInput } from './event-create-without-contact.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutContactInput } from './event-create-or-connect-without-contact.input';
import { EventUpsertWithWhereUniqueWithoutContactInput } from './event-upsert-with-where-unique-without-contact.input';
import { EventCreateManyContactInputEnvelope } from './event-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutContactInput } from './event-update-with-where-unique-without-contact.input';
import { EventUpdateManyWithWhereWithoutContactInput } from './event-update-many-with-where-without-contact.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUncheckedUpdateManyWithoutContactNestedInput {

    @Field(() => [EventCreateWithoutContactInput], {nullable:true})
    @Type(() => EventCreateWithoutContactInput)
    create?: Array<EventCreateWithoutContactInput>;

    @Field(() => [EventCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutContactInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutContactInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutContactInput>;

    @Field(() => EventCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyContactInputEnvelope)
    createMany?: EventCreateManyContactInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutContactInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutContactInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutContactInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutContactInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutContactInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}
