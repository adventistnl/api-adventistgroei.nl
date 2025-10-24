import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInput } from '../user-role/user-role-unchecked-create-nested-many-without-role.input';
import { DirectMessageRecipientUncheckedCreateNestedManyWithoutRecipient_roleInput } from '../direct-message-recipient/direct-message-recipient-unchecked-create-nested-many-without-recipient-role.input';

@InputType()
export class RoleUncheckedCreateWithoutRole_permissionsInput {

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

    @Field(() => Boolean, {nullable:true})
    is_fixed?: boolean;

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

    @Field(() => DirectMessageRecipientUncheckedCreateNestedManyWithoutRecipient_roleInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientUncheckedCreateNestedManyWithoutRecipient_roleInput;
}
