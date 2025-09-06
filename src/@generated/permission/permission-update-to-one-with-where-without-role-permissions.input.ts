import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutRole_permissionsInput } from './permission-update-without-role-permissions.input';

@InputType()
export class PermissionUpdateToOneWithWhereWithoutRole_permissionsInput {

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;

    @Field(() => PermissionUpdateWithoutRole_permissionsInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRole_permissionsInput)
    data!: PermissionUpdateWithoutRole_permissionsInput;
}
