import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateWithoutRecipient_userInput } from './direct-message-recipient-create-without-recipient-user.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateOrConnectWithoutRecipient_userInput } from './direct-message-recipient-create-or-connect-without-recipient-user.input';
import { DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_userInput } from './direct-message-recipient-upsert-with-where-unique-without-recipient-user.input';
import { DirectMessageRecipientCreateManyRecipient_userInputEnvelope } from './direct-message-recipient-create-many-recipient-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_userInput } from './direct-message-recipient-update-with-where-unique-without-recipient-user.input';
import { DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_userInput } from './direct-message-recipient-update-many-with-where-without-recipient-user.input';
import { DirectMessageRecipientScalarWhereInput } from './direct-message-recipient-scalar-where.input';

@InputType()
export class DirectMessageRecipientUpdateManyWithoutRecipient_userNestedInput {

    @Field(() => [DirectMessageRecipientCreateWithoutRecipient_userInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateWithoutRecipient_userInput)
    create?: Array<DirectMessageRecipientCreateWithoutRecipient_userInput>;

    @Field(() => [DirectMessageRecipientCreateOrConnectWithoutRecipient_userInput], {nullable:true})
    @Type(() => DirectMessageRecipientCreateOrConnectWithoutRecipient_userInput)
    connectOrCreate?: Array<DirectMessageRecipientCreateOrConnectWithoutRecipient_userInput>;

    @Field(() => [DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_userInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_userInput)
    upsert?: Array<DirectMessageRecipientUpsertWithWhereUniqueWithoutRecipient_userInput>;

    @Field(() => DirectMessageRecipientCreateManyRecipient_userInputEnvelope, {nullable:true})
    @Type(() => DirectMessageRecipientCreateManyRecipient_userInputEnvelope)
    createMany?: DirectMessageRecipientCreateManyRecipient_userInputEnvelope;

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

    @Field(() => [DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_userInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_userInput)
    update?: Array<DirectMessageRecipientUpdateWithWhereUniqueWithoutRecipient_userInput>;

    @Field(() => [DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_userInput], {nullable:true})
    @Type(() => DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_userInput)
    updateMany?: Array<DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_userInput>;

    @Field(() => [DirectMessageRecipientScalarWhereInput], {nullable:true})
    @Type(() => DirectMessageRecipientScalarWhereInput)
    deleteMany?: Array<DirectMessageRecipientScalarWhereInput>;
}
