import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUser_rolesInput } from '../user/user-create-nested-one-without-user-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRoleCreateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => UserCreateNestedOneWithoutUser_rolesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutUser_rolesInput)
    user!: UserCreateNestedOneWithoutUser_rolesInput;
}
