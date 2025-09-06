import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionCreateWithoutRoleInput } from './role-permission-create-without-role.input';

@InputType()
export class RolePermissionCreateOrConnectWithoutRoleInput {

    @Field(() => RolePermissionWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;

    @Field(() => RolePermissionCreateWithoutRoleInput, {nullable:false})
    @Type(() => RolePermissionCreateWithoutRoleInput)
    create!: RolePermissionCreateWithoutRoleInput;
}
