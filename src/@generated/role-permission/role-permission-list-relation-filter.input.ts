import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionWhereInput } from './role-permission-where.input';

@InputType()
export class RolePermissionListRelationFilter {

    @Field(() => RolePermissionWhereInput, {nullable:true})
    every?: RolePermissionWhereInput;

    @Field(() => RolePermissionWhereInput, {nullable:true})
    some?: RolePermissionWhereInput;

    @Field(() => RolePermissionWhereInput, {nullable:true})
    none?: RolePermissionWhereInput;
}
