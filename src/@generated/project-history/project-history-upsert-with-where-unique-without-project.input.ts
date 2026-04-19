import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectHistoryUpdateWithoutProjectInput } from './project-history-update-without-project.input';
import { ProjectHistoryCreateWithoutProjectInput } from './project-history-create-without-project.input';

@InputType()
export class ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ProjectHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;

    @Field(() => ProjectHistoryUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectHistoryUpdateWithoutProjectInput)
    update!: ProjectHistoryUpdateWithoutProjectInput;

    @Field(() => ProjectHistoryCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectHistoryCreateWithoutProjectInput)
    create!: ProjectHistoryCreateWithoutProjectInput;
}
