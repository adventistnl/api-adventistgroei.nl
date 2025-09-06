import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleCreateInput } from './user-role-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserRoleArgs {

    @Field(() => UserRoleCreateInput, {nullable:false})
    @Type(() => UserRoleCreateInput)
    data!: UserRoleCreateInput;
}
