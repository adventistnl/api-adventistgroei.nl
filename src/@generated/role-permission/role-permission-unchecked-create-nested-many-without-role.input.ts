import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionCreateWithoutRoleInput } from './role-permission-create-without-role.input';
import { Type } from 'class-transformer';
import { RolePermissionCreateOrConnectWithoutRoleInput } from './role-permission-create-or-connect-without-role.input';
import { RolePermissionCreateManyRoleInputEnvelope } from './role-permission-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';

@InputType()
export class RolePermissionUncheckedCreateNestedManyWithoutRoleInput {

    @Field(() => [RolePermissionCreateWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionCreateWithoutRoleInput)
    create?: Array<RolePermissionCreateWithoutRoleInput>;

    @Field(() => [RolePermissionCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;

    @Field(() => RolePermissionCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => RolePermissionCreateManyRoleInputEnvelope)
    createMany?: RolePermissionCreateManyRoleInputEnvelope;

    @Field(() => [RolePermissionWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
}
