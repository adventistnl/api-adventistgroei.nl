import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DirectMessageRecipientCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    direct_message_id!: number;

    @Field(() => Int, {nullable:false})
    recipient_user_id!: number;

    @Field(() => Int, {nullable:false})
    recipient_role_id!: number;

    @Field(() => Int, {nullable:false})
    read_at!: number;

    @Field(() => Int, {nullable:false})
    sent_at!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    is_deleted!: number;

    @Field(() => Int, {nullable:false})
    deleted_at!: number;

    @Field(() => Int, {nullable:false})
    deleted_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
