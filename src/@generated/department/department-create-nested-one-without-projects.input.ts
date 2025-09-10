import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutProjectsInput } from './department-create-without-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutProjectsInput } from './department-create-or-connect-without-projects.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutProjectsInput {

    @Field(() => DepartmentCreateWithoutProjectsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutProjectsInput)
    create?: DepartmentCreateWithoutProjectsInput;

    @Field(() => DepartmentCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutProjectsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
