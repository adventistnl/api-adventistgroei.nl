import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateInput } from './project-history-create.input';
import { ProjectHistoryUpdateInput } from './project-history-update.input';

@ArgsType()
export class UpsertOneProjectHistoryArgs {

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ProjectHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;

    @Field(() => ProjectHistoryCreateInput, {nullable:false})
    @Type(() => ProjectHistoryCreateInput)
    create!: ProjectHistoryCreateInput;

    @Field(() => ProjectHistoryUpdateInput, {nullable:false})
    @Type(() => ProjectHistoryUpdateInput)
    update!: ProjectHistoryUpdateInput;
}
