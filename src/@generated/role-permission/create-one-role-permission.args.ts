import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionCreateInput } from './role-permission-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRolePermissionArgs {

    @Field(() => RolePermissionCreateInput, {nullable:false})
    @Type(() => RolePermissionCreateInput)
    data!: RolePermissionCreateInput;
}
