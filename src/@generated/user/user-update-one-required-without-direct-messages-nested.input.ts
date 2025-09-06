import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDirect_messagesInput } from './user-create-without-direct-messages.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDirect_messagesInput } from './user-create-or-connect-without-direct-messages.input';
import { UserUpsertWithoutDirect_messagesInput } from './user-upsert-without-direct-messages.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDirect_messagesInput } from './user-update-to-one-with-where-without-direct-messages.input';

@InputType()
export class UserUpdateOneRequiredWithoutDirect_messagesNestedInput {

    @Field(() => UserCreateWithoutDirect_messagesInput, {nullable:true})
    @Type(() => UserCreateWithoutDirect_messagesInput)
    create?: UserCreateWithoutDirect_messagesInput;

    @Field(() => UserCreateOrConnectWithoutDirect_messagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDirect_messagesInput)
    connectOrCreate?: UserCreateOrConnectWithoutDirect_messagesInput;

    @Field(() => UserUpsertWithoutDirect_messagesInput, {nullable:true})
    @Type(() => UserUpsertWithoutDirect_messagesInput)
    upsert?: UserUpsertWithoutDirect_messagesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDirect_messagesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDirect_messagesInput)
    update?: UserUpdateToOneWithWhereWithoutDirect_messagesInput;
}
