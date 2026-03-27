import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectHistoryUpdateInput } from './project-history-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';

@ArgsType()
export class UpdateOneProjectHistoryArgs {

    @Field(() => ProjectHistoryUpdateInput, {nullable:false})
    @Type(() => ProjectHistoryUpdateInput)
    data!: ProjectHistoryUpdateInput;

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ProjectHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;
}
