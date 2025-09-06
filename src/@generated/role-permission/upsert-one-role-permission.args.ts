import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionCreateInput } from './role-permission-create.input';
import { RolePermissionUpdateInput } from './role-permission-update.input';

@ArgsType()
export class UpsertOneRolePermissionArgs {

    @Field(() => RolePermissionWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;

    @Field(() => RolePermissionCreateInput, {nullable:false})
    @Type(() => RolePermissionCreateInput)
    create!: RolePermissionCreateInput;

    @Field(() => RolePermissionUpdateInput, {nullable:false})
    @Type(() => RolePermissionUpdateInput)
    update!: RolePermissionUpdateInput;
}
