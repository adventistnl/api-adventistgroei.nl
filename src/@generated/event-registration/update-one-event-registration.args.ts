import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRegistrationUpdateInput } from './event-registration-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';

@ArgsType()
export class UpdateOneEventRegistrationArgs {

    @Field(() => EventRegistrationUpdateInput, {nullable:false})
    @Type(() => EventRegistrationUpdateInput)
    data!: EventRegistrationUpdateInput;

    @Field(() => EventRegistrationWhereUniqueInput, {nullable:false})
    @Type(() => EventRegistrationWhereUniqueInput)
    where!: Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>;
}
