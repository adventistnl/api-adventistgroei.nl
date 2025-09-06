import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientUpdateWithoutRecipient_roleInput } from './direct-message-recipient-update-without-recipient-role.input';
import { DirectMessageRecipientCreateWithoutRecipient_roleInput } from './direct-message-recipient-create-without-recipient-role.input';

@InputType()
export class DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_roleInput {

    @Field(() => DirectMessageRecipientWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageRecipientUpdateWithoutRecipient_roleInput, {nullable:false})
    @Type(() => DirectMessageRecipientUpdateWithoutRecipient_roleInput)
    update!: DirectMessageRecipientUpdateWithoutRecipient_roleInput;

    @Field(() => DirectMessageRecipientCreateWithoutRecipient_roleInput, {nullable:false})
    @Type(() => DirectMessageRecipientCreateWithoutRecipient_roleInput)
    create!: DirectMessageRecipientCreateWithoutRecipient_roleInput;
}
