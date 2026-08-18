import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAssignmentsInput } from './user-update-without-assignments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAssignmentsInput } from './user-create-without-assignments.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAssignmentsInput {

    @Field(() => UserUpdateWithoutAssignmentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAssignmentsInput)
    update!: UserUpdateWithoutAssignmentsInput;

    @Field(() => UserCreateWithoutAssignmentsInput, {nullable:false})
    @Type(() => UserCreateWithoutAssignmentsInput)
    create!: UserCreateWithoutAssignmentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
