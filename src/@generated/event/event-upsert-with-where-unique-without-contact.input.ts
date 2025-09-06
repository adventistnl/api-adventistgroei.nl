import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutContactInput } from './event-update-without-contact.input';
import { EventCreateWithoutContactInput } from './event-create-without-contact.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutContactInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateWithoutContactInput, {nullable:false})
    @Type(() => EventUpdateWithoutContactInput)
    update!: EventUpdateWithoutContactInput;

    @Field(() => EventCreateWithoutContactInput, {nullable:false})
    @Type(() => EventCreateWithoutContactInput)
    create!: EventCreateWithoutContactInput;
}
