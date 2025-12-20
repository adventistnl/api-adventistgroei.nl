import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityLogUpdateInput } from './project-activity-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';

@ArgsType()
export class UpdateOneProjectActivityLogArgs {

    @Field(() => ProjectActivityLogUpdateInput, {nullable:false})
    @Type(() => ProjectActivityLogUpdateInput)
    data!: ProjectActivityLogUpdateInput;

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;
}
