import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionCount {

    @Field(() => Int, {nullable:false})
    role_permissions?: number;
}
