import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateWithoutDirect_messageInput } from './direct-message-recipient-create-without-direct-message.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput } from './direct-message-recipient-create-or-connect-without-direct-message.input';
import { DirectMessageRecipientUpsertWithWhereUniqueWithoutDirect_messageInput } from './direct-message-recipient-upsert-with-where-unique-without-direct-message.input';
import { DirectMessageRecipientCreateManyDirect_messageInputEnvelope } from './direct-message-recipient-create-many-direct-message-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { DirectMessageRecipientUpdateWithWhereUniqueWithoutDirect_messageInput } from './direct-message-recipient-update-with-where-unique-without-direct-message.input';
import { DirectMessageRecipientUpdateManyWithWhereWithoutDirect_messageInput } from './direct-message-recipient-update-many-with-where-without-direct-message.input';
import { DirectMessageRecipientScalarWhereInput } from './direct-message-recipient-scalar-where.input';

@InputType()
export class DirectMessageRecipientUncheckedUpdateManyWithoutDirect_messageNestedInput {

    @Field(() => [DirectMessageRecipientCreateWithoutDirect_messageInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateWithoutDirect_messageInput)
    create?: Array<DirectMessageRecipientCreateWithoutDirect_messageInput>;

    @Field(() => [DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput)
    connectOrCreate?: Array<DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput>;

    @Field(() => [DirectMessageRecipientUpsertWithWhereUniqueWithoutDirect_messageInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpsertWithWhereUniqueWithoutDirect_messageInput)
    upsert?: Array<DirectMessageRecipientUpsertWithWhereUniqueWithoutDirect_messageInput>;

    @Field(() => DirectMessageRecipientCreateManyDirect_messageInputEnvelope, {nullable:true})
    @Type(() => DirectMessageRecipientCreateManyDirect_messageInputEnvelope)
    createMany?: DirectMessageRecipientCreateManyDirect_messageInputEnvelope;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageRecipientUpdateWithWhereUniqueWithoutDirect_messageInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpdateWithWhereUniqueWithoutDirect_messageInput)
    update?: Array<DirectMessageRecipientUpdateWithWhereUniqueWithoutDirect_messageInput>;

    @Field(() => [DirectMessageRecipientUpdateManyWithWhereWithoutDirect_messageInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpdateManyWithWhereWithoutDirect_messageInput)
    updateMany?: Array<DirectMessageRecipientUpdateManyWithWhereWithoutDirect_messageInput>;

    @Field(() => [DirectMessageRecipientScalarWhereInput], {nullable:true})
    @Type(() => DirectMessageRecipientScalarWhereInput)
    deleteMany?: Array<DirectMessageRecipientScalarWhereInput>;
}
