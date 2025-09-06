import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutContactInput } from './event-create-without-contact.input';

@InputType()
export class EventCreateOrConnectWithoutContactInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutContactInput, {nullable:false})
    @Type(() => EventCreateWithoutContactInput)
    create!: EventCreateWithoutContactInput;
}
