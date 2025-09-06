import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientCreateWithoutCommunicationInput } from './communication-recipient-create-without-communication.input';

@InputType()
export class CommunicationRecipientCreateOrConnectWithoutCommunicationInput {

    @Field(() => CommunicationRecipientWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>;

    @Field(() => CommunicationRecipientCreateWithoutCommunicationInput, {nullable:false})
    @Type(() => CommunicationRecipientCreateWithoutCommunicationInput)
    create!: CommunicationRecipientCreateWithoutCommunicationInput;
}
