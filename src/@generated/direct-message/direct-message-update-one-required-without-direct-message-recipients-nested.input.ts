import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageCreateWithoutDirect_message_recipientsInput } from './direct-message-create-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateOrConnectWithoutDirect_message_recipientsInput } from './direct-message-create-or-connect-without-direct-message-recipients.input';
import { DirectMessageUpsertWithoutDirect_message_recipientsInput } from './direct-message-upsert-without-direct-message-recipients.input';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { DirectMessageUpdateToOneWithWhereWithoutDirect_message_recipientsInput } from './direct-message-update-to-one-with-where-without-direct-message-recipients.input';

@InputType()
export class DirectMessageUpdateOneRequiredWithoutDirect_message_recipientsNestedInput {

    @Field(() => DirectMessageCreateWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => DirectMessageCreateWithoutDirect_message_recipientsInput)
    create?: DirectMessageCreateWithoutDirect_message_recipientsInput;

    @Field(() => DirectMessageCreateOrConnectWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => DirectMessageCreateOrConnectWithoutDirect_message_recipientsInput)
    connectOrCreate?: DirectMessageCreateOrConnectWithoutDirect_message_recipientsInput;

    @Field(() => DirectMessageUpsertWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => DirectMessageUpsertWithoutDirect_message_recipientsInput)
    upsert?: DirectMessageUpsertWithoutDirect_message_recipientsInput;

    @Field(() => DirectMessageWhereUniqueInput, {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    connect?: Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageUpdateToOneWithWhereWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => DirectMessageUpdateToOneWithWhereWithoutDirect_message_recipientsInput)
    update?: DirectMessageUpdateToOneWithWhereWithoutDirect_message_recipientsInput;
}
