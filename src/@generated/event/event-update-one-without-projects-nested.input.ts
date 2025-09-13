import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutProjectsInput } from './event-create-without-projects.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutProjectsInput } from './event-create-or-connect-without-projects.input';
import { EventUpsertWithoutProjectsInput } from './event-upsert-without-projects.input';
import { EventWhereInput } from './event-where.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutProjectsInput } from './event-update-to-one-with-where-without-projects.input';

@InputType()
export class EventUpdateOneWithoutProjectsNestedInput {

    @Field(() => EventCreateWithoutProjectsInput, {nullable:true})
    @Type(() => EventCreateWithoutProjectsInput)
    create?: EventCreateWithoutProjectsInput;

    @Field(() => EventCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: EventCreateOrConnectWithoutProjectsInput;

    @Field(() => EventUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => EventUpsertWithoutProjectsInput)
    upsert?: EventUpsertWithoutProjectsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    disconnect?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    delete?: EventWhereInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutProjectsInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutProjectsInput)
    update?: EventUpdateToOneWithWhereWithoutProjectsInput;
}
