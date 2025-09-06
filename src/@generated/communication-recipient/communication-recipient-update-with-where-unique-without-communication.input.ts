import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientUpdateWithoutCommunicationInput } from './communication-recipient-update-without-communication.input';

@InputType()
export class CommunicationRecipientUpdateWithWhereUniqueWithoutCommunicationInput {

    @Field(() => CommunicationRecipientWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>;

    @Field(() => CommunicationRecipientUpdateWithoutCommunicationInput, {nullable:false})
    @Type(() => CommunicationRecipientUpdateWithoutCommunicationInput)
    data!: CommunicationRecipientUpdateWithoutCommunicationInput;
}
