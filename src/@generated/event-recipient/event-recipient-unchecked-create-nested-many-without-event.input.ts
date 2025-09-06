import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRecipientCreateWithoutEventInput } from './event-recipient-create-without-event.input';
import { Type } from 'class-transformer';
import { EventRecipientCreateOrConnectWithoutEventInput } from './event-recipient-create-or-connect-without-event.input';
import { EventRecipientCreateManyEventInputEnvelope } from './event-recipient-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';

@InputType()
export class EventRecipientUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [EventRecipientCreateWithoutEventInput], {nullable:true})
    @Type(() => EventRecipientCreateWithoutEventInput)
    create?: Array<EventRecipientCreateWithoutEventInput>;

    @Field(() => [EventRecipientCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventRecipientCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventRecipientCreateOrConnectWithoutEventInput>;

    @Field(() => EventRecipientCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventRecipientCreateManyEventInputEnvelope)
    createMany?: EventRecipientCreateManyEventInputEnvelope;

    @Field(() => [EventRecipientWhereUniqueInput], {nullable:true})
    @Type(() => EventRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>>;
}
