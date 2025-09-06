import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientCreateInput } from './communication-recipient-create.input';
import { CommunicationRecipientUpdateInput } from './communication-recipient-update.input';

@ArgsType()
export class UpsertOneCommunicationRecipientArgs {

    @Field(() => CommunicationRecipientWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>;

    @Field(() => CommunicationRecipientCreateInput, {nullable:false})
    @Type(() => CommunicationRecipientCreateInput)
    create!: CommunicationRecipientCreateInput;

    @Field(() => CommunicationRecipientUpdateInput, {nullable:false})
    @Type(() => CommunicationRecipientUpdateInput)
    update!: CommunicationRecipientUpdateInput;
}
