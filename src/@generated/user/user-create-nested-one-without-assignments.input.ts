import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssignmentsInput } from './user-create-without-assignments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAssignmentsInput } from './user-create-or-connect-without-assignments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAssignmentsInput {

    @Field(() => UserCreateWithoutAssignmentsInput, {nullable:true})
    @Type(() => UserCreateWithoutAssignmentsInput)
    create?: UserCreateWithoutAssignmentsInput;

    @Field(() => UserCreateOrConnectWithoutAssignmentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAssignmentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
