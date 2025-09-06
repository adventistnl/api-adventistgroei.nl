import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageRecipientUpdateInput } from './direct-message-recipient-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';

@ArgsType()
export class UpdateOneDirectMessageRecipientArgs {

    @Field(() => DirectMessageRecipientUpdateInput, {nullable:false})
    @Type(() => DirectMessageRecipientUpdateInput)
    data!: DirectMessageRecipientUpdateInput;

    @Field(() => DirectMessageRecipientWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>;
}
