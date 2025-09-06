import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionWhereInput } from './role-permission-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRolePermissionArgs {

    @Field(() => RolePermissionWhereInput, {nullable:true})
    @Type(() => RolePermissionWhereInput)
    where?: RolePermissionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
