import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientUpdateWithoutDirect_messageInput } from './direct-message-recipient-update-without-direct-message.input';

@InputType()
export class DirectMessageRecipientUpdateWithWhereUniqueWithoutDirect_messageInput {

    @Field(() => DirectMessageRecipientWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageRecipientUpdateWithoutDirect_messageInput, {nullable:false})
    @Type(() => DirectMessageRecipientUpdateWithoutDirect_messageInput)
    data!: DirectMessageRecipientUpdateWithoutDirect_messageInput;
}
