import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateWithoutDirect_messageInput } from './direct-message-recipient-create-without-direct-message.input';

@InputType()
export class DirectMessageRecipientCreateOrConnectWithoutDirect_messageInput {

    @Field(() => DirectMessageRecipientWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageRecipientCreateWithoutDirect_messageInput, {nullable:false})
    @Type(() => DirectMessageRecipientCreateWithoutDirect_messageInput)
    create!: DirectMessageRecipientCreateWithoutDirect_messageInput;
}
