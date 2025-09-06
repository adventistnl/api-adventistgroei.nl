import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRecipientCreateWithoutUserInput } from './event-recipient-create-without-user.input';
import { Type } from 'class-transformer';
import { EventRecipientCreateOrConnectWithoutUserInput } from './event-recipient-create-or-connect-without-user.input';
import { EventRecipientCreateManyUserInputEnvelope } from './event-recipient-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';

@InputType()
export class EventRecipientCreateNestedManyWithoutUserInput {

    @Field(() => [EventRecipientCreateWithoutUserInput], {nullable:true})
    @Type(() => EventRecipientCreateWithoutUserInput)
    create?: Array<EventRecipientCreateWithoutUserInput>;

    @Field(() => [EventRecipientCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventRecipientCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventRecipientCreateOrConnectWithoutUserInput>;

    @Field(() => EventRecipientCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventRecipientCreateManyUserInputEnvelope)
    createMany?: EventRecipientCreateManyUserInputEnvelope;

    @Field(() => [EventRecipientWhereUniqueInput], {nullable:true})
    @Type(() => EventRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>>;
}
