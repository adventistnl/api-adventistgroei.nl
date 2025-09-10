import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutProjectsInput } from './department-create-without-projects.input';

@InputType()
export class DepartmentCreateOrConnectWithoutProjectsInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutProjectsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutProjectsInput)
    create!: DepartmentCreateWithoutProjectsInput;
}
