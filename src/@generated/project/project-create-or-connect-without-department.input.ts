import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutDepartmentInput } from './project-create-without-department.input';

@InputType()
export class ProjectCreateOrConnectWithoutDepartmentInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => ProjectCreateWithoutDepartmentInput)
    create!: ProjectCreateWithoutDepartmentInput;
}
