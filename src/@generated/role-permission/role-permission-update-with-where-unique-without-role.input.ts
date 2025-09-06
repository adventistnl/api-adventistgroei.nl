import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionUpdateWithoutRoleInput } from './role-permission-update-without-role.input';

@InputType()
export class RolePermissionUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => RolePermissionWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;

    @Field(() => RolePermissionUpdateWithoutRoleInput, {nullable:false})
    @Type(() => RolePermissionUpdateWithoutRoleInput)
    data!: RolePermissionUpdateWithoutRoleInput;
}
