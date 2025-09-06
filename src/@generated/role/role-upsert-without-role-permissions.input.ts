import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutRole_permissionsInput } from './role-update-without-role-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutRole_permissionsInput } from './role-create-without-role-permissions.input';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleUpsertWithoutRole_permissionsInput {

    @Field(() => RoleUpdateWithoutRole_permissionsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutRole_permissionsInput)
    update!: RoleUpdateWithoutRole_permissionsInput;

    @Field(() => RoleCreateWithoutRole_permissionsInput, {nullable:false})
    @Type(() => RoleCreateWithoutRole_permissionsInput)
    create!: RoleCreateWithoutRole_permissionsInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
