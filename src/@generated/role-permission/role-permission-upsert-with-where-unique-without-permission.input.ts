import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionUpdateWithoutPermissionInput } from './role-permission-update-without-permission.input';
import { RolePermissionCreateWithoutPermissionInput } from './role-permission-create-without-permission.input';

@InputType()
export class RolePermissionUpsertWithWhereUniqueWithoutPermissionInput {

    @Field(() => RolePermissionWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;

    @Field(() => RolePermissionUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => RolePermissionUpdateWithoutPermissionInput)
    update!: RolePermissionUpdateWithoutPermissionInput;

    @Field(() => RolePermissionCreateWithoutPermissionInput, {nullable:false})
    @Type(() => RolePermissionCreateWithoutPermissionInput)
    create!: RolePermissionCreateWithoutPermissionInput;
}
