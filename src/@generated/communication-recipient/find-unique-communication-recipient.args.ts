import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCommunicationRecipientArgs {

    @Field(() => CommunicationRecipientWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>;
}
