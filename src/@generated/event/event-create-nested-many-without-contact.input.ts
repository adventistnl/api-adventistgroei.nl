import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutContactInput } from './event-create-without-contact.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutContactInput } from './event-create-or-connect-without-contact.input';
import { EventCreateManyContactInputEnvelope } from './event-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedManyWithoutContactInput {

    @Field(() => [EventCreateWithoutContactInput], {nullable:true})
    @Type(() => EventCreateWithoutContactInput)
    create?: Array<EventCreateWithoutContactInput>;

    @Field(() => [EventCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutContactInput>;

    @Field(() => EventCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyContactInputEnvelope)
    createMany?: EventCreateManyContactInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
