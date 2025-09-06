import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleWhereInput } from './user-role-where.input';

@InputType()
export class UserRoleListRelationFilter {

    @Field(() => UserRoleWhereInput, {nullable:true})
    every?: UserRoleWhereInput;

    @Field(() => UserRoleWhereInput, {nullable:true})
    some?: UserRoleWhereInput;

    @Field(() => UserRoleWhereInput, {nullable:true})
    none?: UserRoleWhereInput;
}
