import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutUser_rolesInput } from './role-update-without-user-roles.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutUser_rolesInput } from './role-create-without-user-roles.input';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleUpsertWithoutUser_rolesInput {

    @Field(() => RoleUpdateWithoutUser_rolesInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUser_rolesInput)
    update!: RoleUpdateWithoutUser_rolesInput;

    @Field(() => RoleCreateWithoutUser_rolesInput, {nullable:false})
    @Type(() => RoleCreateWithoutUser_rolesInput)
    create!: RoleCreateWithoutUser_rolesInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
