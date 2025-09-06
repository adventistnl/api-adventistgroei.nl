import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DirectMessageRecipientCountAggregate } from './direct-message-recipient-count-aggregate.output';
import { DirectMessageRecipientMinAggregate } from './direct-message-recipient-min-aggregate.output';
import { DirectMessageRecipientMaxAggregate } from './direct-message-recipient-max-aggregate.output';

@ObjectType()
export class DirectMessageRecipientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    direct_message_id!: string;

    @Field(() => String, {nullable:false})
    recipient_user_id!: string;

    @Field(() => String, {nullable:false})
    recipient_role_id!: string;

    @Field(() => Date, {nullable:false})
    read_at!: Date | string;

    @Field(() => Date, {nullable:false})
    sent_at!: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => DirectMessageRecipientCountAggregate, {nullable:true})
    _count?: DirectMessageRecipientCountAggregate;

    @Field(() => DirectMessageRecipientMinAggregate, {nullable:true})
    _min?: DirectMessageRecipientMinAggregate;

    @Field(() => DirectMessageRecipientMaxAggregate, {nullable:true})
    _max?: DirectMessageRecipientMaxAggregate;
}
