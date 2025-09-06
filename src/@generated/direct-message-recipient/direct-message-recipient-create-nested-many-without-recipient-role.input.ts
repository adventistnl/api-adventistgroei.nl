import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateWithoutRecipient_roleInput } from './direct-message-recipient-create-without-recipient-role.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateOrConnectWithoutRecipient_roleInput } from './direct-message-recipient-create-or-connect-without-recipient-role.input';
import { DirectMessageRecipientCreateManyRecipient_roleInputEnvelope } from './direct-message-recipient-create-many-recipient-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';

@InputType()
export class DirectMessageRecipientCreateNestedManyWithoutRecipient_roleInput {

    @Field(() => [DirectMessageRecipientCreateWithoutRecipient_roleInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateWithoutRecipient_roleInput)
    create?: Array<DirectMessageRecipientCreateWithoutRecipient_roleInput>;

    @Field(() => [DirectMessageRecipientCreateOrConnectWithoutRecipient_roleInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateOrConnectWithoutRecipient_roleInput)
    connectOrCreate?: Array<DirectMessageRecipientCreateOrConnectWithoutRecipient_roleInput>;

    @Field(() => DirectMessageRecipientCreateManyRecipient_roleInputEnvelope, {nullable:true})
    @Type(() => DirectMessageRecipientCreateManyRecipient_roleInputEnvelope)
    createMany?: DirectMessageRecipientCreateManyRecipient_roleInputEnvelope;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;
}
