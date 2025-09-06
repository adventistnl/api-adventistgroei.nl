import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUser_rolesInput } from './user-create-without-user-roles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUser_rolesInput } from './user-create-or-connect-without-user-roles.input';
import { UserUpsertWithoutUser_rolesInput } from './user-upsert-without-user-roles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUser_rolesInput } from './user-update-to-one-with-where-without-user-roles.input';

@InputType()
export class UserUpdateOneRequiredWithoutUser_rolesNestedInput {

    @Field(() => UserCreateWithoutUser_rolesInput, {nullable:true})
    @Type(() => UserCreateWithoutUser_rolesInput)
    create?: UserCreateWithoutUser_rolesInput;

    @Field(() => UserCreateOrConnectWithoutUser_rolesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUser_rolesInput)
    connectOrCreate?: UserCreateOrConnectWithoutUser_rolesInput;

    @Field(() => UserUpsertWithoutUser_rolesInput, {nullable:true})
    @Type(() => UserUpsertWithoutUser_rolesInput)
    upsert?: UserUpsertWithoutUser_rolesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUser_rolesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUser_rolesInput)
    update?: UserUpdateToOneWithWhereWithoutUser_rolesInput;
}
