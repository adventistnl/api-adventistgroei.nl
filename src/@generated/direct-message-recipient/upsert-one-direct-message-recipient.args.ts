import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateInput } from './direct-message-recipient-create.input';
import { DirectMessageRecipientUpdateInput } from './direct-message-recipient-update.input';

@ArgsType()
export class UpsertOneDirectMessageRecipientArgs {

    @Field(() => DirectMessageRecipientWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageRecipientCreateInput, {nullable:false})
    @Type(() => DirectMessageRecipientCreateInput)
    create!: DirectMessageRecipientCreateInput;

    @Field(() => DirectMessageRecipientUpdateInput, {nullable:false})
    @Type(() => DirectMessageRecipientUpdateInput)
    update!: DirectMessageRecipientUpdateInput;
}
