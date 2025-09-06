import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateWithoutDirect_messageInput } from './direct-message-recipient-create-without-direct-message.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput } from './direct-message-recipient-create-or-connect-without-direct-message.input';
import { DirectMessageRecipientCreateManyDirect_messageInputEnvelope } from './direct-message-recipient-create-many-direct-message-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';

@InputType()
export class DirectMessageRecipientUncheckedCreateNestedManyWithoutDirect_messageInput {

    @Field(() => [DirectMessageRecipientCreateWithoutDirect_messageInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateWithoutDirect_messageInput)
    create?: Array<DirectMessageRecipientCreateWithoutDirect_messageInput>;

    @Field(() => [DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput)
    connectOrCreate?: Array<DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput>;

    @Field(() => DirectMessageRecipientCreateManyDirect_messageInputEnvelope, {nullable:true})
    @Type(() => DirectMessageRecipientCreateManyDirect_messageInputEnvelope)
    createMany?: DirectMessageRecipientCreateManyDirect_messageInputEnvelope;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;
}
