import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientUpdateWithoutRecipient_userInput } from './direct-message-recipient-update-without-recipient-user.input';
import { DirectMessageRecipientCreateWithoutRecipient_userInput } from './direct-message-recipient-create-without-recipient-user.input';

@InputType()
export class DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_userInput {

    @Field(() => DirectMessageRecipientWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageRecipientUpdateWithoutRecipient_userInput, {nullable:false})
    @Type(() => DirectMessageRecipientUpdateWithoutRecipient_userInput)
    update!: DirectMessageRecipientUpdateWithoutRecipient_userInput;

    @Field(() => DirectMessageRecipientCreateWithoutRecipient_userInput, {nullable:false})
    @Type(() => DirectMessageRecipientCreateWithoutRecipient_userInput)
    create!: DirectMessageRecipientCreateWithoutRecipient_userInput;
}
