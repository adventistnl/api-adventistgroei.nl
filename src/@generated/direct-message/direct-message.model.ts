import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Institution } from '../institution/institution.model';
import { User } from '../user/user.model';
import { DirectMessageRecipient } from '../direct-message-recipient/direct-message-recipient.model';
import { DirectMessageCount } from './direct-message-count.output';

@ObjectType()
export class DirectMessage {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    sender_id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    sent_at!: Date;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => User, {nullable:false})
    sender?: User;

    @Field(() => [DirectMessageRecipient], {nullable:true})
    direct_message_recipients?: Array<DirectMessageRecipient>;

    @Field(() => DirectMessageCount, {nullable:false})
    _count?: DirectMessageCount;
}
