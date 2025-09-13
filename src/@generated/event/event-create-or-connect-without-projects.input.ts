import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutProjectsInput } from './event-create-without-projects.input';

@InputType()
export class EventCreateOrConnectWithoutProjectsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutProjectsInput, {nullable:false})
    @Type(() => EventCreateWithoutProjectsInput)
    create!: EventCreateWithoutProjectsInput;
}
