import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUser_rolesInput } from './user-update-without-user-roles.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUser_rolesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUser_rolesInput, {nullable:false})
    @Type(() => UserUpdateWithoutUser_rolesInput)
    data!: UserUpdateWithoutUser_rolesInput;
}
