import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateWithoutRecipient_userInput } from './direct-message-recipient-create-without-recipient-user.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateOrConnectWithoutRecipient_userInput } from './direct-message-recipient-create-or-connect-without-recipient-user.input';
import { DirectMessageRecipientCreateManyRecipient_userInputEnvelope } from './direct-message-recipient-create-many-recipient-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';

@InputType()
export class DirectMessageRecipientUncheckedCreateNestedManyWithoutRecipient_userInput {

    @Field(() => [DirectMessageRecipientCreateWithoutRecipient_userInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateWithoutRecipient_userInput)
    create?: Array<DirectMessageRecipientCreateWithoutRecipient_userInput>;

    @Field(() => [DirectMessageRecipientCreateOrConnectWithoutRecipient_userInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateOrConnectWithoutRecipient_userInput)
    connectOrCreate?: Array<DirectMessageRecipientCreateOrConnectWithoutRecipient_userInput>;

    @Field(() => DirectMessageRecipientCreateManyRecipient_userInputEnvelope, {nullable:true})
    @Type(() => DirectMessageRecipientCreateManyRecipient_userInputEnvelope)
    createMany?: DirectMessageRecipientCreateManyRecipient_userInputEnvelope;

    @Field(() => [DirectMessageRecipientWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageRecipientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>>;
}
