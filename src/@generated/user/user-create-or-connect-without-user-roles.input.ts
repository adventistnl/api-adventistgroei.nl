import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUser_rolesInput } from './user-create-without-user-roles.input';

@InputType()
export class UserCreateOrConnectWithoutUser_rolesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutUser_rolesInput, {nullable:false})
    @Type(() => UserCreateWithoutUser_rolesInput)
    create!: UserCreateWithoutUser_rolesInput;
}
