import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleWhereInput } from './user-role-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyUserRoleArgs {

    @Field(() => UserRoleWhereInput, {nullable:true})
    @Type(() => UserRoleWhereInput)
    where?: UserRoleWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
