import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleScalarWhereInput } from './user-role-scalar-where.input';
import { Type } from 'class-transformer';
import { UserRoleUpdateManyMutationInput } from './user-role-update-many-mutation.input';

@InputType()
export class UserRoleUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserRoleScalarWhereInput, {nullable:false})
    @Type(() => UserRoleScalarWhereInput)
    where!: UserRoleScalarWhereInput;

    @Field(() => UserRoleUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRoleUpdateManyMutationInput)
    data!: UserRoleUpdateManyMutationInput;
}
