import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDepartmentInput } from './user-update-without-department.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutDepartmentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => UserUpdateWithoutDepartmentInput)
    data!: UserUpdateWithoutDepartmentInput;
}
