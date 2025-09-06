import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { Type } from 'class-transformer';
import { EventRegistrationUpdateWithoutEventInput } from './event-registration-update-without-event.input';

@InputType()
export class EventRegistrationUpdateWithWhereUniqueWithoutEventInput {

    @Field(() => EventRegistrationWhereUniqueInput, {nullable:false})
    @Type(() => EventRegistrationWhereUniqueInput)
    where!: Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>;

    @Field(() => EventRegistrationUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventRegistrationUpdateWithoutEventInput)
    data!: EventRegistrationUpdateWithoutEventInput;
}
