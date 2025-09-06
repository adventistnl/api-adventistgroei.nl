import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionCreateWithoutRoleInput } from './role-permission-create-without-role.input';
import { Type } from 'class-transformer';
import { RolePermissionCreateOrConnectWithoutRoleInput } from './role-permission-create-or-connect-without-role.input';
import { RolePermissionUpsertWithWhereUniqueWithoutRoleInput } from './role-permission-upsert-with-where-unique-without-role.input';
import { RolePermissionCreateManyRoleInputEnvelope } from './role-permission-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { RolePermissionUpdateWithWhereUniqueWithoutRoleInput } from './role-permission-update-with-where-unique-without-role.input';
import { RolePermissionUpdateManyWithWhereWithoutRoleInput } from './role-permission-update-many-with-where-without-role.input';
import { RolePermissionScalarWhereInput } from './role-permission-scalar-where.input';

@InputType()
export class RolePermissionUpdateManyWithoutRoleNestedInput {

    @Field(() => [RolePermissionCreateWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionCreateWithoutRoleInput)
    create?: Array<RolePermissionCreateWithoutRoleInput>;

    @Field(() => [RolePermissionCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;

    @Field(() => [RolePermissionUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<RolePermissionUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => RolePermissionCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => RolePermissionCreateManyRoleInputEnvelope)
    createMany?: RolePermissionCreateManyRoleInputEnvelope;

    @Field(() => [RolePermissionWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;

    @Field(() => [RolePermissionWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;

    @Field(() => [RolePermissionWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;

    @Field(() => [RolePermissionWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;

    @Field(() => [RolePermissionUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [RolePermissionUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [RolePermissionScalarWhereInput], {nullable:true})
    @Type(() => RolePermissionScalarWhereInput)
    deleteMany?: Array<RolePermissionScalarWhereInput>;
}
