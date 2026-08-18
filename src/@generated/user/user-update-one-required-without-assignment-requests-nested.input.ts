import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssignment_requestsInput } from './user-create-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAssignment_requestsInput } from './user-create-or-connect-without-assignment-requests.input';
import { UserUpsertWithoutAssignment_requestsInput } from './user-upsert-without-assignment-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAssignment_requestsInput } from './user-update-to-one-with-where-without-assignment-requests.input';

@InputType()
export class UserUpdateOneRequiredWithoutAssignment_requestsNestedInput {

    @Field(() => UserCreateWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => UserCreateWithoutAssignment_requestsInput)
    create?: UserCreateWithoutAssignment_requestsInput;

    @Field(() => UserCreateOrConnectWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAssignment_requestsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAssignment_requestsInput;

    @Field(() => UserUpsertWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => UserUpsertWithoutAssignment_requestsInput)
    upsert?: UserUpsertWithoutAssignment_requestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAssignment_requestsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAssignment_requestsInput)
    update?: UserUpdateToOneWithWhereWithoutAssignment_requestsInput;
}
