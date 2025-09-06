import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDirect_message_recipientsInput } from './user-create-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDirect_message_recipientsInput } from './user-create-or-connect-without-direct-message-recipients.input';
import { UserUpsertWithoutDirect_message_recipientsInput } from './user-upsert-without-direct-message-recipients.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDirect_message_recipientsInput } from './user-update-to-one-with-where-without-direct-message-recipients.input';

@InputType()
export class UserUpdateOneRequiredWithoutDirect_message_recipientsNestedInput {

    @Field(() => UserCreateWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => UserCreateWithoutDirect_message_recipientsInput)
    create?: UserCreateWithoutDirect_message_recipientsInput;

    @Field(() => UserCreateOrConnectWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDirect_message_recipientsInput)
    connectOrCreate?: UserCreateOrConnectWithoutDirect_message_recipientsInput;

    @Field(() => UserUpsertWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => UserUpsertWithoutDirect_message_recipientsInput)
    upsert?: UserUpsertWithoutDirect_message_recipientsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDirect_message_recipientsInput)
    update?: UserUpdateToOneWithWhereWithoutDirect_message_recipientsInput;
}
