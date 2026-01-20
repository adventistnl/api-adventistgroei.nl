import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogCreateInput } from './project-activity-log-create.input';
import { ProjectActivityLogUpdateInput } from './project-activity-log-update.input';

@ArgsType()
export class UpsertOneProjectActivityLogArgs {

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityLogCreateInput, {nullable:false})
    @Type(() => ProjectActivityLogCreateInput)
    create!: ProjectActivityLogCreateInput;

    @Field(() => ProjectActivityLogUpdateInput, {nullable:false})
    @Type(() => ProjectActivityLogUpdateInput)
    update!: ProjectActivityLogUpdateInput;
}
