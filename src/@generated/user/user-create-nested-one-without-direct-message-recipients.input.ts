import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDirect_message_recipientsInput } from './user-create-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDirect_message_recipientsInput } from './user-create-or-connect-without-direct-message-recipients.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDirect_message_recipientsInput {

    @Field(() => UserCreateWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => UserCreateWithoutDirect_message_recipientsInput)
    create?: UserCreateWithoutDirect_message_recipientsInput;

    @Field(() => UserCreateOrConnectWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDirect_message_recipientsInput)
    connectOrCreate?: UserCreateOrConnectWithoutDirect_message_recipientsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
