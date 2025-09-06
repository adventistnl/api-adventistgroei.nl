import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRolePermissionArgs {

    @Field(() => RolePermissionWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
}
