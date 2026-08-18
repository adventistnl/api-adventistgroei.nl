import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAssignment_requestsInput } from './user-update-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAssignment_requestsInput } from './user-create-without-assignment-requests.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAssignment_requestsInput {

    @Field(() => UserUpdateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAssignment_requestsInput)
    update!: UserUpdateWithoutAssignment_requestsInput;

    @Field(() => UserCreateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => UserCreateWithoutAssignment_requestsInput)
    create!: UserCreateWithoutAssignment_requestsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
