import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionWhereInput } from './role-permission-where.input';
import { Type } from 'class-transformer';
import { RolePermissionOrderByWithRelationInput } from './role-permission-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RolePermissionScalarFieldEnum } from './role-permission-scalar-field.enum';

@ArgsType()
export class FindFirstRolePermissionArgs {

    @Field(() => RolePermissionWhereInput, {nullable:true})
    @Type(() => RolePermissionWhereInput)
    where?: RolePermissionWhereInput;

    @Field(() => [RolePermissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;

    @Field(() => RolePermissionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RolePermissionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RolePermissionScalarFieldEnum}`>;
}
