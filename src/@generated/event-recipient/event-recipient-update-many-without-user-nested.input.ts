import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRecipientCreateWithoutUserInput } from './event-recipient-create-without-user.input';
import { Type } from 'class-transformer';
import { EventRecipientCreateOrConnectWithoutUserInput } from './event-recipient-create-or-connect-without-user.input';
import { EventRecipientUpsertWithWhereUniqueWithoutUserInput } from './event-recipient-upsert-with-where-unique-without-user.input';
import { EventRecipientCreateManyUserInputEnvelope } from './event-recipient-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';
import { EventRecipientUpdateWithWhereUniqueWithoutUserInput } from './event-recipient-update-with-where-unique-without-user.input';
import { EventRecipientUpdateManyWithWhereWithoutUserInput } from './event-recipient-update-many-with-where-without-user.input';
import { EventRecipientScalarWhereInput } from './event-recipient-scalar-where.input';

@InputType()
export class EventRecipientUpdateManyWithoutUserNestedInput {

    @Field(() => [EventRecipientCreateWithoutUserInput], {nullable:true})
    @Type(() => EventRecipientCreateWithoutUserInput)
    create?: Array<EventRecipientCreateWithoutUserInput>;

    @Field(() => [EventRecipientCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventRecipientCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventRecipientCreateOrConnectWithoutUserInput>;

    @Field(() => [EventRecipientUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventRecipientUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<EventRecipientUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventRecipientCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventRecipientCreateManyUserInputEnvelope)
    createMany?: EventRecipientCreateManyUserInputEnvelope;

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

    @Field(() => [EventRecipientUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventRecipientUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<EventRecipientUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventRecipientUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => EventRecipientUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<EventRecipientUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventRecipientScalarWhereInput], {nullable:true})
    @Type(() => EventRecipientScalarWhereInput)
    deleteMany?: Array<EventRecipientScalarWhereInput>;
}
