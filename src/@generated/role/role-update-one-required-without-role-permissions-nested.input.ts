import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutRole_permissionsInput } from './role-create-without-role-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutRole_permissionsInput } from './role-create-or-connect-without-role-permissions.input';
import { RoleUpsertWithoutRole_permissionsInput } from './role-upsert-without-role-permissions.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateToOneWithWhereWithoutRole_permissionsInput } from './role-update-to-one-with-where-without-role-permissions.input';

@InputType()
export class RoleUpdateOneRequiredWithoutRole_permissionsNestedInput {

    @Field(() => RoleCreateWithoutRole_permissionsInput, {nullable:true})
    @Type(() => RoleCreateWithoutRole_permissionsInput)
    create?: RoleCreateWithoutRole_permissionsInput;

    @Field(() => RoleCreateOrConnectWithoutRole_permissionsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutRole_permissionsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutRole_permissionsInput;

    @Field(() => RoleUpsertWithoutRole_permissionsInput, {nullable:true})
    @Type(() => RoleUpsertWithoutRole_permissionsInput)
    upsert?: RoleUpsertWithoutRole_permissionsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;

    @Field(() => RoleUpdateToOneWithWhereWithoutRole_permissionsInput, {nullable:true})
    @Type(() => RoleUpdateToOneWithWhereWithoutRole_permissionsInput)
    update?: RoleUpdateToOneWithWhereWithoutRole_permissionsInput;
}
