import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateWithoutRole_permissionsInput } from './permission-update-without-role-permissions.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutRole_permissionsInput } from './permission-create-without-role-permissions.input';
import { PermissionWhereInput } from './permission-where.input';

@InputType()
export class PermissionUpsertWithoutRole_permissionsInput {

    @Field(() => PermissionUpdateWithoutRole_permissionsInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRole_permissionsInput)
    update!: PermissionUpdateWithoutRole_permissionsInput;

    @Field(() => PermissionCreateWithoutRole_permissionsInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRole_permissionsInput)
    create!: PermissionCreateWithoutRole_permissionsInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;
}
