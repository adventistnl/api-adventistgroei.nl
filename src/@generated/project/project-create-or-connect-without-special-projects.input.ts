import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutSpecial_projectsInput } from './project-create-without-special-projects.input';

@InputType()
export class ProjectCreateOrConnectWithoutSpecial_projectsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutSpecial_projectsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutSpecial_projectsInput)
    create!: ProjectCreateWithoutSpecial_projectsInput;
}
