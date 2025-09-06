import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { Type } from 'class-transformer';
import { EventRegistrationCreateWithoutEventInput } from './event-registration-create-without-event.input';

@InputType()
export class EventRegistrationCreateOrConnectWithoutEventInput {

    @Field(() => EventRegistrationWhereUniqueInput, {nullable:false})
    @Type(() => EventRegistrationWhereUniqueInput)
    where!: Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>;

    @Field(() => EventRegistrationCreateWithoutEventInput, {nullable:false})
    @Type(() => EventRegistrationCreateWithoutEventInput)
    create!: EventRegistrationCreateWithoutEventInput;
}
