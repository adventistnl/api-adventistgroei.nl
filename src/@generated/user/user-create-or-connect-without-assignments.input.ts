import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAssignmentsInput } from './user-create-without-assignments.input';

@InputType()
export class UserCreateOrConnectWithoutAssignmentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAssignmentsInput, {nullable:false})
    @Type(() => UserCreateWithoutAssignmentsInput)
    create!: UserCreateWithoutAssignmentsInput;
}
