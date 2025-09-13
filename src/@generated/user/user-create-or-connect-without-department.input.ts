import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDepartmentInput } from './user-create-without-department.input';

@InputType()
export class UserCreateOrConnectWithoutDepartmentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => UserCreateWithoutDepartmentInput)
    create!: UserCreateWithoutDepartmentInput;
}
