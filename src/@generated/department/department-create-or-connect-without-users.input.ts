import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutUsersInput } from './department-create-without-users.input';

@InputType()
export class DepartmentCreateOrConnectWithoutUsersInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutUsersInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutUsersInput)
    create!: DepartmentCreateWithoutUsersInput;
}
