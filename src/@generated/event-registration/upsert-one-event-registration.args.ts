import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { Type } from 'class-transformer';
import { EventRegistrationCreateInput } from './event-registration-create.input';
import { EventRegistrationUpdateInput } from './event-registration-update.input';

@ArgsType()
export class UpsertOneEventRegistrationArgs {

    @Field(() => EventRegistrationWhereUniqueInput, {nullable:false})
    @Type(() => EventRegistrationWhereUniqueInput)
    where!: Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>;

    @Field(() => EventRegistrationCreateInput, {nullable:false})
    @Type(() => EventRegistrationCreateInput)
    create!: EventRegistrationCreateInput;

    @Field(() => EventRegistrationUpdateInput, {nullable:false})
    @Type(() => EventRegistrationUpdateInput)
    update!: EventRegistrationUpdateInput;
}
