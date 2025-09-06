import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationRecipientUpdateInput } from './communication-recipient-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';

@ArgsType()
export class UpdateOneCommunicationRecipientArgs {

    @Field(() => CommunicationRecipientUpdateInput, {nullable:false})
    @Type(() => CommunicationRecipientUpdateInput)
    data!: CommunicationRecipientUpdateInput;

    @Field(() => CommunicationRecipientWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>;
}
