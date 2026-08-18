import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssignment_requestsInput } from './user-create-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAssignment_requestsInput } from './user-create-or-connect-without-assignment-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAssignment_requestsInput {

    @Field(() => UserCreateWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => UserCreateWithoutAssignment_requestsInput)
    create?: UserCreateWithoutAssignment_requestsInput;

    @Field(() => UserCreateOrConnectWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAssignment_requestsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAssignment_requestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
