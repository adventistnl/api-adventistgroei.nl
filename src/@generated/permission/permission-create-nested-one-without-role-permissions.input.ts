import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRole_permissionsInput } from './permission-create-without-role-permissions.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRole_permissionsInput } from './permission-create-or-connect-without-role-permissions.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateNestedOneWithoutRole_permissionsInput {

    @Field(() => PermissionCreateWithoutRole_permissionsInput, {nullable:true})
    @Type(() => PermissionCreateWithoutRole_permissionsInput)
    create?: PermissionCreateWithoutRole_permissionsInput;

    @Field(() => PermissionCreateOrConnectWithoutRole_permissionsInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRole_permissionsInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutRole_permissionsInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'key_code' | 'resolver_name'>;
}
