import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutDepartmentInput } from './project-update-without-department.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutDepartmentInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutDepartmentInput)
    data!: ProjectUpdateWithoutDepartmentInput;
}
