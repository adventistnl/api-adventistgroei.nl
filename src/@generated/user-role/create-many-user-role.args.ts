import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleCreateManyInput } from './user-role-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserRoleArgs {

    @Field(() => [UserRoleCreateManyInput], {nullable:false})
    @Type(() => UserRoleCreateManyInput)
    data!: Array<UserRoleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
