import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutEvent_recipientsInput } from './event-create-without-event-recipients.input';

@InputType()
export class EventCreateOrConnectWithoutEvent_recipientsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => EventCreateWithoutEvent_recipientsInput)
    create!: EventCreateWithoutEvent_recipientsInput;
}
