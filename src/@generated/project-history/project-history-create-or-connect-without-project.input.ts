import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateWithoutProjectInput } from './project-history-create-without-project.input';

@InputType()
export class ProjectHistoryCreateOrConnectWithoutProjectInput {

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ProjectHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;

    @Field(() => ProjectHistoryCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectHistoryCreateWithoutProjectInput)
    create!: ProjectHistoryCreateWithoutProjectInput;
}
