import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionCreateWithoutPermissionInput } from './role-permission-create-without-permission.input';

@InputType()
export class RolePermissionCreateOrConnectWithoutPermissionInput {

    @Field(() => RolePermissionWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;

    @Field(() => RolePermissionCreateWithoutPermissionInput, {nullable:false})
    @Type(() => RolePermissionCreateWithoutPermissionInput)
    create!: RolePermissionCreateWithoutPermissionInput;
}
