import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutChurch_departmentInput } from './project-update-without-church-department.input';
import { ProjectCreateWithoutChurch_departmentInput } from './project-create-without-church-department.input';

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutChurch_departmentInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutChurch_departmentInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutChurch_departmentInput)
    update!: ProjectUpdateWithoutChurch_departmentInput;

    @Field(() => ProjectCreateWithoutChurch_departmentInput, {nullable:false})
    @Type(() => ProjectCreateWithoutChurch_departmentInput)
    create!: ProjectCreateWithoutChurch_departmentInput;
}
