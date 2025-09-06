import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneEventRegistrationArgs {

    @Field(() => EventRegistrationWhereUniqueInput, {nullable:false})
    @Type(() => EventRegistrationWhereUniqueInput)
    where!: Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>;
}
