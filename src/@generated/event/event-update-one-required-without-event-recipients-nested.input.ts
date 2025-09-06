import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutEvent_recipientsInput } from './event-create-without-event-recipients.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutEvent_recipientsInput } from './event-create-or-connect-without-event-recipients.input';
import { EventUpsertWithoutEvent_recipientsInput } from './event-upsert-without-event-recipients.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutEvent_recipientsInput } from './event-update-to-one-with-where-without-event-recipients.input';

@InputType()
export class EventUpdateOneRequiredWithoutEvent_recipientsNestedInput {

    @Field(() => EventCreateWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => EventCreateWithoutEvent_recipientsInput)
    create?: EventCreateWithoutEvent_recipientsInput;

    @Field(() => EventCreateOrConnectWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutEvent_recipientsInput)
    connectOrCreate?: EventCreateOrConnectWithoutEvent_recipientsInput;

    @Field(() => EventUpsertWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => EventUpsertWithoutEvent_recipientsInput)
    upsert?: EventUpsertWithoutEvent_recipientsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutEvent_recipientsInput)
    update?: EventUpdateToOneWithWhereWithoutEvent_recipientsInput;
}
