import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommunicationsInput } from './user-create-without-communications.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCommunicationsInput } from './user-create-or-connect-without-communications.input';
import { UserUpsertWithoutCommunicationsInput } from './user-upsert-without-communications.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCommunicationsInput } from './user-update-to-one-with-where-without-communications.input';

@InputType()
export class UserUpdateOneRequiredWithoutCommunicationsNestedInput {

    @Field(() => UserCreateWithoutCommunicationsInput, {nullable:true})
    @Type(() => UserCreateWithoutCommunicationsInput)
    create?: UserCreateWithoutCommunicationsInput;

    @Field(() => UserCreateOrConnectWithoutCommunicationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommunicationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCommunicationsInput;

    @Field(() => UserUpsertWithoutCommunicationsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCommunicationsInput)
    upsert?: UserUpsertWithoutCommunicationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCommunicationsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCommunicationsInput)
    update?: UserUpdateToOneWithWhereWithoutCommunicationsInput;
}
