import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionUpdateManyMutationInput } from './role-permission-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RolePermissionWhereInput } from './role-permission-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRolePermissionArgs {

    @Field(() => RolePermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => RolePermissionUpdateManyMutationInput)
    data!: RolePermissionUpdateManyMutationInput;

    @Field(() => RolePermissionWhereInput, {nullable:true})
    @Type(() => RolePermissionWhereInput)
    where?: RolePermissionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
