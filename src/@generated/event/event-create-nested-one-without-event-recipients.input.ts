import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutEvent_recipientsInput } from './event-create-without-event-recipients.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutEvent_recipientsInput } from './event-create-or-connect-without-event-recipients.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutEvent_recipientsInput {

    @Field(() => EventCreateWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => EventCreateWithoutEvent_recipientsInput)
    create?: EventCreateWithoutEvent_recipientsInput;

    @Field(() => EventCreateOrConnectWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutEvent_recipientsInput)
    connectOrCreate?: EventCreateOrConnectWithoutEvent_recipientsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
