import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserRole } from '../user-role/user-role.model';
import { RolePermission } from '../role-permission/role-permission.model';
import { DirectMessageRecipient } from '../direct-message-recipient/direct-message-recipient.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {defaultValue:'#3b82f6',nullable:true})
    color!: string | null;

    @Field(() => String, {nullable:false})
    key_code!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_fixed!: boolean;

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

    @Field(() => [UserRole], {nullable:true})
    user_roles?: Array<UserRole>;

    @Field(() => [RolePermission], {nullable:true})
    role_permissions?: Array<RolePermission>;

    @Field(() => [DirectMessageRecipient], {nullable:true})
    direct_message_recipients?: Array<DirectMessageRecipient>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
