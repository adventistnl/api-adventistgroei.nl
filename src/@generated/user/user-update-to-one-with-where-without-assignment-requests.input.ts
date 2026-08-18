import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAssignment_requestsInput } from './user-update-without-assignment-requests.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAssignment_requestsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAssignment_requestsInput)
    data!: UserUpdateWithoutAssignment_requestsInput;
}
