import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRole_permissionsInput } from './permission-create-without-role-permissions.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRole_permissionsInput } from './permission-create-or-connect-without-role-permissions.input';
import { PermissionUpsertWithoutRole_permissionsInput } from './permission-upsert-without-role-permissions.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateToOneWithWhereWithoutRole_permissionsInput } from './permission-update-to-one-with-where-without-role-permissions.input';

@InputType()
export class PermissionUpdateOneRequiredWithoutRole_permissionsNestedInput {

    @Field(() => PermissionCreateWithoutRole_permissionsInput, {nullable:true})
    @Type(() => PermissionCreateWithoutRole_permissionsInput)
    create?: PermissionCreateWithoutRole_permissionsInput;

    @Field(() => PermissionCreateOrConnectWithoutRole_permissionsInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRole_permissionsInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutRole_permissionsInput;

    @Field(() => PermissionUpsertWithoutRole_permissionsInput, {nullable:true})
    @Type(() => PermissionUpsertWithoutRole_permissionsInput)
    upsert?: PermissionUpsertWithoutRole_permissionsInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'key_code' | 'resolver_name'>;

    @Field(() => PermissionUpdateToOneWithWhereWithoutRole_permissionsInput, {nullable:true})
    @Type(() => PermissionUpdateToOneWithWhereWithoutRole_permissionsInput)
    update?: PermissionUpdateToOneWithWhereWithoutRole_permissionsInput;
}
