import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionUpdateInput } from './role-permission-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';

@ArgsType()
export class UpdateOneRolePermissionArgs {

    @Field(() => RolePermissionUpdateInput, {nullable:false})
    @Type(() => RolePermissionUpdateInput)
    data!: RolePermissionUpdateInput;

    @Field(() => RolePermissionWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
}
