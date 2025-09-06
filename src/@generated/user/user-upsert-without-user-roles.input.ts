import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUser_rolesInput } from './user-update-without-user-roles.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUser_rolesInput } from './user-create-without-user-roles.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUser_rolesInput {

    @Field(() => UserUpdateWithoutUser_rolesInput, {nullable:false})
    @Type(() => UserUpdateWithoutUser_rolesInput)
    update!: UserUpdateWithoutUser_rolesInput;

    @Field(() => UserCreateWithoutUser_rolesInput, {nullable:false})
    @Type(() => UserCreateWithoutUser_rolesInput)
    create!: UserCreateWithoutUser_rolesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
