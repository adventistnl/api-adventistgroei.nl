import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutProjectsInput } from './event-create-without-projects.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutProjectsInput } from './event-create-or-connect-without-projects.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutProjectsInput {

    @Field(() => EventCreateWithoutProjectsInput, {nullable:true})
    @Type(() => EventCreateWithoutProjectsInput)
    create?: EventCreateWithoutProjectsInput;

    @Field(() => EventCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: EventCreateOrConnectWithoutProjectsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
