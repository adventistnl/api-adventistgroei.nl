import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionCreateWithoutPermissionInput } from './role-permission-create-without-permission.input';
import { Type } from 'class-transformer';
import { RolePermissionCreateOrConnectWithoutPermissionInput } from './role-permission-create-or-connect-without-permission.input';
import { RolePermissionUpsertWithWhereUniqueWithoutPermissionInput } from './role-permission-upsert-with-where-unique-without-permission.input';
import { RolePermissionCreateManyPermissionInputEnvelope } from './role-permission-create-many-permission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RolePermissionWhereUniqueInput } from './role-permission-where-unique.input';
import { RolePermissionUpdateWithWhereUniqueWithoutPermissionInput } from './role-permission-update-with-where-unique-without-permission.input';
import { RolePermissionUpdateManyWithWhereWithoutPermissionInput } from './role-permission-update-many-with-where-without-permission.input';
import { RolePermissionScalarWhereInput } from './role-permission-scalar-where.input';

@InputType()
export class RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput {

    @Field(() => [RolePermissionCreateWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionCreateWithoutPermissionInput)
    create?: Array<RolePermissionCreateWithoutPermissionInput>;

    @Field(() => [RolePermissionCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutPermissionInput>;

    @Field(() => [RolePermissionUpsertWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionUpsertWithWhereUniqueWithoutPermissionInput)
    upsert?: Array<RolePermissionUpsertWithWhereUniqueWithoutPermissionInput>;

    @Field(() => RolePermissionCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => RolePermissionCreateManyPermissionInputEnvelope)
    createMany?: RolePermissionCreateManyPermissionInputEnvelope;

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

    @Field(() => [RolePermissionUpdateWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionUpdateWithWhereUniqueWithoutPermissionInput)
    update?: Array<RolePermissionUpdateWithWhereUniqueWithoutPermissionInput>;

    @Field(() => [RolePermissionUpdateManyWithWhereWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionUpdateManyWithWhereWithoutPermissionInput)
    updateMany?: Array<RolePermissionUpdateManyWithWhereWithoutPermissionInput>;

    @Field(() => [RolePermissionScalarWhereInput], {nullable:true})
    @Type(() => RolePermissionScalarWhereInput)
    deleteMany?: Array<RolePermissionScalarWhereInput>;
}
