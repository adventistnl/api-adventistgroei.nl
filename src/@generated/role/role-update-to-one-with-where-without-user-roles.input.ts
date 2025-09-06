import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutUser_rolesInput } from './role-update-without-user-roles.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutUser_rolesInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutUser_rolesInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUser_rolesInput)
    data!: RoleUpdateWithoutUser_rolesInput;
}
