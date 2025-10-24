import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutRole_permissionsInput } from '../permission/permission-create-nested-one-without-role-permissions.input';

@InputType()
export class RolePermissionCreateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    is_essential?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => PermissionCreateNestedOneWithoutRole_permissionsInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRole_permissionsInput;
}
