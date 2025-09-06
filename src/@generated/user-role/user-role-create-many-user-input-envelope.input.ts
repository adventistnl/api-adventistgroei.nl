import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateManyUserInput } from './user-role-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRoleCreateManyUserInputEnvelope {

    @Field(() => [UserRoleCreateManyUserInput], {nullable:false})
    @Type(() => UserRoleCreateManyUserInput)
    data!: Array<UserRoleCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
