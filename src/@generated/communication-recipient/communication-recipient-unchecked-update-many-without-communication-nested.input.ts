import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationRecipientCreateWithoutCommunicationInput } from './communication-recipient-create-without-communication.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientCreateOrConnectWithoutCommunicationInput } from './communication-recipient-create-or-connect-without-communication.input';
import { CommunicationRecipientUpsertWithWhereUniqueWithoutCommunicationInput } from './communication-recipient-upsert-with-where-unique-without-communication.input';
import { CommunicationRecipientCreateManyCommunicationInputEnvelope } from './communication-recipient-create-many-communication-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';
import { CommunicationRecipientUpdateWithWhereUniqueWithoutCommunicationInput } from './communication-recipient-update-with-where-unique-without-communication.input';
import { CommunicationRecipientUpdateManyWithWhereWithoutCommunicationInput } from './communication-recipient-update-many-with-where-without-communication.input';
import { CommunicationRecipientScalarWhereInput } from './communication-recipient-scalar-where.input';

@InputType()
export class CommunicationRecipientUncheckedUpdateManyWithoutCommunicationNestedInput {

    @Field(() => [CommunicationRecipientCreateWithoutCommunicationInput], {nullable:true})
    @Type(() => CommunicationRecipientCreateWithoutCommunicationInput)
    create?: Array<CommunicationRecipientCreateWithoutCommunicationInput>;

    @Field(() => [CommunicationRecipientCreateOrConnectWithoutCommunicationInput], {nullable:true})
    @Type(() => CommunicationRecipientCreateOrConnectWithoutCommunicationInput)
    connectOrCreate?: Array<CommunicationRecipientCreateOrConnectWithoutCommunicationInput>;

    @Field(() => [CommunicationRecipientUpsertWithWhereUniqueWithoutCommunicationInput], {nullable:true})
    @Type(() => CommunicationRecipientUpsertWithWhereUniqueWithoutCommunicationInput)
    upsert?: Array<CommunicationRecipientUpsertWithWhereUniqueWithoutCommunicationInput>;

    @Field(() => CommunicationRecipientCreateManyCommunicationInputEnvelope, {nullable:true})
    @Type(() => CommunicationRecipientCreateManyCommunicationInputEnvelope)
    createMany?: CommunicationRecipientCreateManyCommunicationInputEnvelope;

    @Field(() => [CommunicationRecipientWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationRecipientWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationRecipientWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationRecipientWhereUniqueInput], {nullable:true})
    @Type(() => CommunicationRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [CommunicationRecipientUpdateWithWhereUniqueWithoutCommunicationInput], {nullable:true})
    @Type(() => CommunicationRecipientUpdateWithWhereUniqueWithoutCommunicationInput)
    update?: Array<CommunicationRecipientUpdateWithWhereUniqueWithoutCommunicationInput>;

    @Field(() => [CommunicationRecipientUpdateManyWithWhereWithoutCommunicationInput], {nullable:true})
    @Type(() => CommunicationRecipientUpdateManyWithWhereWithoutCommunicationInput)
    updateMany?: Array<CommunicationRecipientUpdateManyWithWhereWithoutCommunicationInput>;

    @Field(() => [CommunicationRecipientScalarWhereInput], {nullable:true})
    @Type(() => CommunicationRecipientScalarWhereInput)
    deleteMany?: Array<CommunicationRecipientScalarWhereInput>;
}
