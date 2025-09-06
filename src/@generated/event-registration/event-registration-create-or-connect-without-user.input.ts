import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { Type } from 'class-transformer';
import { EventRegistrationCreateWithoutUserInput } from './event-registration-create-without-user.input';

@InputType()
export class EventRegistrationCreateOrConnectWithoutUserInput {

    @Field(() => EventRegistrationWhereUniqueInput, {nullable:false})
    @Type(() => EventRegistrationWhereUniqueInput)
    where!: Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>;

    @Field(() => EventRegistrationCreateWithoutUserInput, {nullable:false})
    @Type(() => EventRegistrationCreateWithoutUserInput)
    create!: EventRegistrationCreateWithoutUserInput;
}
