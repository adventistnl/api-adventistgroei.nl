import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutChurch_projectsInput } from './department-create-without-church-projects.input';

@InputType()
export class DepartmentCreateOrConnectWithoutChurch_projectsInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutChurch_projectsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutChurch_projectsInput)
    create!: DepartmentCreateWithoutChurch_projectsInput;
}
