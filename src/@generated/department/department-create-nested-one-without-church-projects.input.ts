import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutChurch_projectsInput } from './department-create-without-church-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutChurch_projectsInput } from './department-create-or-connect-without-church-projects.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutChurch_projectsInput {

    @Field(() => DepartmentCreateWithoutChurch_projectsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutChurch_projectsInput)
    create?: DepartmentCreateWithoutChurch_projectsInput;

    @Field(() => DepartmentCreateOrConnectWithoutChurch_projectsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutChurch_projectsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutChurch_projectsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
