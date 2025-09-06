import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleUpdateManyMutationInput } from './user-role-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserRoleWhereInput } from './user-role-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUserRoleArgs {

    @Field(() => UserRoleUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRoleUpdateManyMutationInput)
    data!: UserRoleUpdateManyMutationInput;

    @Field(() => UserRoleWhereInput, {nullable:true})
    @Type(() => UserRoleWhereInput)
    where?: UserRoleWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
