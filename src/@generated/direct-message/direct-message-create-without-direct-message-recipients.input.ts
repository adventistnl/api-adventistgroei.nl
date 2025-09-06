import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateNestedOneWithoutDirect_messagesInput } from '../institution/institution-create-nested-one-without-direct-messages.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutDirect_messagesInput } from '../user/user-create-nested-one-without-direct-messages.input';

@InputType()
export class DirectMessageCreateWithoutDirect_message_recipientsInput {

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

    @Field(() => InstitutionCreateNestedOneWithoutDirect_messagesInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutDirect_messagesInput)
    institution!: InstitutionCreateNestedOneWithoutDirect_messagesInput;

    @Field(() => UserCreateNestedOneWithoutDirect_messagesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutDirect_messagesInput)
    sender!: UserCreateNestedOneWithoutDirect_messagesInput;
}
