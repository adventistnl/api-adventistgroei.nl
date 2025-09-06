import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateManyRoleInput } from './user-role-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRoleCreateManyRoleInputEnvelope {

    @Field(() => [UserRoleCreateManyRoleInput], {nullable:false})
    @Type(() => UserRoleCreateManyRoleInput)
    data!: Array<UserRoleCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
