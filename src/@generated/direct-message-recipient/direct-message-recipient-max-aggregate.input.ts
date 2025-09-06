import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DirectMessageRecipientMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    direct_message_id?: true;

    @Field(() => Boolean, {nullable:true})
    recipient_user_id?: true;

    @Field(() => Boolean, {nullable:true})
    recipient_role_id?: true;

    @Field(() => Boolean, {nullable:true})
    read_at?: true;

    @Field(() => Boolean, {nullable:true})
    sent_at?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    updated_by?: true;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_at?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_by?: true;
}
