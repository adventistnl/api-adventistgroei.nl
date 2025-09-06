import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutRole_permissionsInput } from './permission-create-without-role-permissions.input';

@InputType()
export class PermissionCreateOrConnectWithoutRole_permissionsInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'key_code' | 'resolver_name'>;

    @Field(() => PermissionCreateWithoutRole_permissionsInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRole_permissionsInput)
    create!: PermissionCreateWithoutRole_permissionsInput;
}
