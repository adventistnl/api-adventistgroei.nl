import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientUpdateWithoutCommunicationInput } from './communication-recipient-update-without-communication.input';
import { CommunicationRecipientCreateWithoutCommunicationInput } from './communication-recipient-create-without-communication.input';

@InputType()
export class CommunicationRecipientUpsertWithWhereUniqueWithoutCommunicationInput {

    @Field(() => CommunicationRecipientWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>;

    @Field(() => CommunicationRecipientUpdateWithoutCommunicationInput, {nullable:false})
    @Type(() => CommunicationRecipientUpdateWithoutCommunicationInput)
    update!: CommunicationRecipientUpdateWithoutCommunicationInput;

    @Field(() => CommunicationRecipientCreateWithoutCommunicationInput, {nullable:false})
    @Type(() => CommunicationRecipientCreateWithoutCommunicationInput)
    create!: CommunicationRecipientCreateWithoutCommunicationInput;
}
