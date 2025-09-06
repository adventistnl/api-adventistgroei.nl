import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRecipientCreateWithoutEventInput } from './event-recipient-create-without-event.input';
import { Type } from 'class-transformer';
import { EventRecipientCreateOrConnectWithoutEventInput } from './event-recipient-create-or-connect-without-event.input';
import { EventRecipientUpsertWithWhereUniqueWithoutEventInput } from './event-recipient-upsert-with-where-unique-without-event.input';
import { EventRecipientCreateManyEventInputEnvelope } from './event-recipient-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';
import { EventRecipientUpdateWithWhereUniqueWithoutEventInput } from './event-recipient-update-with-where-unique-without-event.input';
import { EventRecipientUpdateManyWithWhereWithoutEventInput } from './event-recipient-update-many-with-where-without-event.input';
import { EventRecipientScalarWhereInput } from './event-recipient-scalar-where.input';

@InputType()
export class EventRecipientUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [EventRecipientCreateWithoutEventInput], {nullable:true})
    @Type(() => EventRecipientCreateWithoutEventInput)
    create?: Array<EventRecipientCreateWithoutEventInput>;

    @Field(() => [EventRecipientCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventRecipientCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventRecipientCreateOrConnectWithoutEventInput>;

    @Field(() => [EventRecipientUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventRecipientUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<EventRecipientUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => EventRecipientCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventRecipientCreateManyEventInputEnvelope)
    createMany?: EventRecipientCreateManyEventInputEnvelope;

    @Field(() => [EventRecipientWhereUniqueInput], {nullable:true})
    @Type(() => EventRecipientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [EventRecipientWhereUniqueInput], {nullable:true})
    @Type(() => EventRecipientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [EventRecipientWhereUniqueInput], {nullable:true})
    @Type(() => EventRecipientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [EventRecipientWhereUniqueInput], {nullable:true})
    @Type(() => EventRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [EventRecipientUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventRecipientUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<EventRecipientUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [EventRecipientUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => EventRecipientUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<EventRecipientUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [EventRecipientScalarWhereInput], {nullable:true})
    @Type(() => EventRecipientScalarWhereInput)
    deleteMany?: Array<EventRecipientScalarWhereInput>;
}
