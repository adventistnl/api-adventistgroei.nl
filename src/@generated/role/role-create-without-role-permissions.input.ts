import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateNestedManyWithoutRoleInput } from '../user-role/user-role-create-nested-many-without-role.input';
import { DirectMessageRecipientCreateNestedManyWithoutRecipient_roleInput } from '../direct-message-recipient/direct-message-recipient-create-nested-many-without-recipient-role.input';

@InputType()
export class RoleCreateWithoutRole_permissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

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

    @Field(() => UserRoleCreateNestedManyWithoutRoleInput, {nullable:true})
    user_roles?: UserRoleCreateNestedManyWithoutRoleInput;

    @Field(() => DirectMessageRecipientCreateNestedManyWithoutRecipient_roleInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientCreateNestedManyWithoutRecipient_roleInput;
}
