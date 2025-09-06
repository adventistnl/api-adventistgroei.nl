import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionCreateWithoutPermissionInput } from './role-permission-create-without-permission.input';
import { Type } from 'class-transformer';
import { RolePermissionCreateOrConnectWithoutPermissionInput } from './role-permission-create-or-connect-without-permission.input';
import { RolePermissionCreateManyPermissionInputEnvelope } from './role-permission-create-many-permission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';

@InputType()
export class RolePermissionUncheckedCreateNestedManyWithoutPermissionInput {

    @Field(() => [RolePermissionCreateWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionCreateWithoutPermissionInput)
    create?: Array<RolePermissionCreateWithoutPermissionInput>;

    @Field(() => [RolePermissionCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutPermissionInput>;

    @Field(() => RolePermissionCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => RolePermissionCreateManyPermissionInputEnvelope)
    createMany?: RolePermissionCreateManyPermissionInputEnvelope;

    @Field(() => [RolePermissionWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
}
