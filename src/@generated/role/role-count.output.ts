import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoleCount {

    @Field(() => Int, {nullable:false})
    user_roles?: number;

    @Field(() => Int, {nullable:false})
    role_permissions?: number;

    @Field(() => Int, {nullable:false})
    direct_message_recipients?: number;
}
