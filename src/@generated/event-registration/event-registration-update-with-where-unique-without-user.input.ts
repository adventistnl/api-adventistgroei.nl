import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { Type } from 'class-transformer';
import { EventRegistrationUpdateWithoutUserInput } from './event-registration-update-without-user.input';

@InputType()
export class EventRegistrationUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventRegistrationWhereUniqueInput, {nullable:false})
    @Type(() => EventRegistrationWhereUniqueInput)
    where!: Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>;

    @Field(() => EventRegistrationUpdateWithoutUserInput, {nullable:false})
    @Type(() => EventRegistrationUpdateWithoutUserInput)
    data!: EventRegistrationUpdateWithoutUserInput;
}
