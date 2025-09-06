import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientUpdateWithoutRecipient_roleInput } from './direct-message-recipient-update-without-recipient-role.input';

@InputType()
export class DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_roleInput {

    @Field(() => DirectMessageRecipientWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageRecipientUpdateWithoutRecipient_roleInput, {nullable:false})
    @Type(() => DirectMessageRecipientUpdateWithoutRecipient_roleInput)
    data!: DirectMessageRecipientUpdateWithoutRecipient_roleInput;
}
