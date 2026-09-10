import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAssignment_requestsInput } from './user-create-without-assignment-requests.input';

@InputType()
export class UserCreateOrConnectWithoutAssignment_requestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => UserCreateWithoutAssignment_requestsInput)
    create!: UserCreateWithoutAssignment_requestsInput;
}
