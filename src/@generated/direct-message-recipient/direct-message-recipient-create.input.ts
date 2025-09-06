import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageCreateNestedOneWithoutDirect_message_recipientsInput } from '../direct-message/direct-message-create-nested-one-without-direct-message-recipients.input';
import { UserCreateNestedOneWithoutDirect_message_recipientsInput } from '../user/user-create-nested-one-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { RoleCreateNestedOneWithoutDirect_message_recipientsInput } from '../role/role-create-nested-one-without-direct-message-recipients.input';

@InputType()
export class DirectMessageRecipientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    read_at!: Date | string;

    @Field(() => Date, {nullable:false})
    sent_at!: Date | string;

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

    @Field(() => DirectMessageCreateNestedOneWithoutDirect_message_recipientsInput, {nullable:false})
    direct_message!: DirectMessageCreateNestedOneWithoutDirect_message_recipientsInput;

    @Field(() => UserCreateNestedOneWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutDirect_message_recipientsInput)
    recipient_user!: UserCreateNestedOneWithoutDirect_message_recipientsInput;

    @Field(() => RoleCreateNestedOneWithoutDirect_message_recipientsInput, {nullable:false})
    recipient_role!: RoleCreateNestedOneWithoutDirect_message_recipientsInput;
}
