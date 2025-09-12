import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutProjectInput } from './project-activity-update-without-project.input';
import { ProjectActivityCreateWithoutProjectInput } from './project-activity-create-without-project.input';

@InputType()
export class ProjectActivityUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutProjectInput)
    update!: ProjectActivityUpdateWithoutProjectInput;

    @Field(() => ProjectActivityCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutProjectInput)
    create!: ProjectActivityCreateWithoutProjectInput;
}
