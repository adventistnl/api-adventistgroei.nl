import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateWithoutRecipient_roleInput } from './direct-message-recipient-create-without-recipient-role.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateOrConnectWithoutRecipient_roleInput } from './direct-message-recipient-create-or-connect-without-recipient-role.input';
import { DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_roleInput } from './direct-message-recipient-upsert-with-where-unique-without-recipient-role.input';
import { DirectMessageRecipientCreateManyRecipient_roleInputEnvelope } from './direct-message-recipient-create-many-recipient-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_roleInput } from './direct-message-recipient-update-with-where-unique-without-recipient-role.input';
import { DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_roleInput } from './direct-message-recipient-update-many-with-where-without-recipient-role.input';
import { DirectMessageRecipientScalarWhereInput } from './direct-message-recipient-scalar-where.input';

@InputType()
export class DirectMessageRecipientUpdateManyWithoutRecipient_roleNestedInput {

    @Field(() => [DirectMessageRecipientCreateWithoutRecipient_roleInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateWithoutRecipient_roleInput)
    create?: Array<DirectMessageRecipientCreateWithoutRecipient_roleInput>;

    @Field(() => [DirectMessageRecipientCreateOrConnectWithoutRecipient_roleInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateOrConnectWithoutRecipient_roleInput)
    connectOrCreate?: Array<DirectMessageRecipientCreateOrConnectWithoutRecipient_roleInput>;

    @Field(() => [DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_roleInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_roleInput)
    upsert?: Array<DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_roleInput>;

    @Field(() => DirectMessageRecipientCreateManyRecipient_roleInputEnvelope, {nullable:true})
    @Type(() => DirectMessageRecipientCreateManyRecipient_roleInputEnvelope)
    createMany?: DirectMessageRecipientCreateManyRecipient_roleInputEnvelope;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_roleInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_roleInput)
    update?: Array<DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_roleInput>;

    @Field(() => [DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_roleInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_roleInput)
    updateMany?: Array<DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_roleInput>;

    @Field(() => [DirectMessageRecipientScalarWhereInput], {nullable:true})
    @Type(() => DirectMessageRecipientScalarWhereInput)
    deleteMany?: Array<DirectMessageRecipientScalarWhereInput>;
}
