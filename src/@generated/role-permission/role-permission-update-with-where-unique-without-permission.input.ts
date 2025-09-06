import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionUpdateWithoutPermissionInput } from './role-permission-update-without-permission.input';

@InputType()
export class RolePermissionUpdateWithWhereUniqueWithoutPermissionInput {

    @Field(() => RolePermissionWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;

    @Field(() => RolePermissionUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => RolePermissionUpdateWithoutPermissionInput)
    data!: RolePermissionUpdateWithoutPermissionInput;
}
