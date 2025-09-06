import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutDirect_messagesInput } from '../user/user-create-nested-one-without-direct-messages.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientCreateNestedManyWithoutDirect_messageInput } from '../direct-message-recipient/direct-message-recipient-create-nested-many-without-direct-message.input';

@InputType()
export class DirectMessageCreateWithoutInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    status!: string;

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

    @Field(() => UserCreateNestedOneWithoutDirect_messagesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutDirect_messagesInput)
    sender!: UserCreateNestedOneWithoutDirect_messagesInput;

    @Field(() => DirectMessageRecipientCreateNestedManyWithoutDirect_messageInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientCreateNestedManyWithoutDirect_messageInput;
}
