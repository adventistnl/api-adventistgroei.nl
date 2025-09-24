import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInput } from '../user-role/user-role-unchecked-create-nested-many-without-role.input';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInput } from '../role-permission/role-permission-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutDirect_message_recipientsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:false})
    key_code!: string;

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

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    user_roles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => RolePermissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    role_permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
}
