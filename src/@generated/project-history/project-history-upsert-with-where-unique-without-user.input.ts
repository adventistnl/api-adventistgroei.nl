import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectHistoryUpdateWithoutUserInput } from './project-history-update-without-user.input';
import { ProjectHistoryCreateWithoutUserInput } from './project-history-create-without-user.input';

@InputType()
export class ProjectHistoryUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ProjectHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;

    @Field(() => ProjectHistoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => ProjectHistoryUpdateWithoutUserInput)
    update!: ProjectHistoryUpdateWithoutUserInput;

    @Field(() => ProjectHistoryCreateWithoutUserInput, {nullable:false})
    @Type(() => ProjectHistoryCreateWithoutUserInput)
    create!: ProjectHistoryCreateWithoutUserInput;
}
