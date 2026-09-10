import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAssignmentsInput } from './user-update-without-assignments.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAssignmentsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAssignmentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAssignmentsInput)
    data!: UserUpdateWithoutAssignmentsInput;
}
