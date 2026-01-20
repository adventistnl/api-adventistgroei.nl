import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutChurch_departmentInput } from './project-create-without-church-department.input';

@InputType()
export class ProjectCreateOrConnectWithoutChurch_departmentInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutChurch_departmentInput, {nullable:false})
    @Type(() => ProjectCreateWithoutChurch_departmentInput)
    create!: ProjectCreateWithoutChurch_departmentInput;
}
