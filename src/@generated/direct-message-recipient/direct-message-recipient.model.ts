import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DirectMessage } from '../direct-message/direct-message.model';
import { User } from '../user/user.model';
import { Role } from '../role/role.model';

@ObjectType()
export class DirectMessageRecipient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    direct_message_id!: string;

    @Field(() => String, {nullable:false})
    recipient_user_id!: string;

    @Field(() => String, {nullable:false})
    recipient_role_id!: string;

    @Field(() => Date, {nullable:false})
    read_at!: Date;

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

    @Field(() => DirectMessage, {nullable:false})
    direct_message?: DirectMessage;

    @Field(() => User, {nullable:false})
    recipient_user?: User;

    @Field(() => Role, {nullable:false})
    recipient_role?: Role;
}
