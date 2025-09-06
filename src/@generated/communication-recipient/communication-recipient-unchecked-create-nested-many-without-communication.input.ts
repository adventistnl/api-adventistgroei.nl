import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationRecipientCreateWithoutCommunicationInput } from './communication-recipient-create-without-communication.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientCreateOrConnectWithoutCommunicationInput } from './communication-recipient-create-or-connect-without-communication.input';
import { CommunicationRecipientCreateManyCommunicationInputEnvelope } from './communication-recipient-create-many-communication-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';

@InputType()
export class CommunicationRecipientUncheckedCreateNestedManyWithoutCommunicationInput {

    @Field(() => [CommunicationRecipientCreateWithoutCommunicationInput], {nullable:true})
    @Type(() => CommunicationRecipientCreateWithoutCommunicationInput)
    create?: Array<CommunicationRecipientCreateWithoutCommunicationInput>;

    @Field(() => [CommunicationRecipientCreateOrConnectWithoutCommunicationInput], {nullable:true})
    @Type(() => CommunicationRecipientCreateOrConnectWithoutCommunicationInput)
    connectOrCreate?: Array<CommunicationRecipientCreateOrConnectWithoutCommunicationInput>;

    @Field(() => CommunicationRecipientCreateManyCommunicationInputEnvelope, {nullable:true})
    @Type(() => CommunicationRecipientCreateManyCommunicationInputEnvelope)
    createMany?: CommunicationRecipientCreateManyCommunicationInputEnvelope;

    @Field(() => [CommunicationRecipientWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>>;
}
