import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeCreateInput } from './project-activity-assignee-create.input';
import { ProjectActivityAssigneeUpdateInput } from './project-activity-assignee-update.input';

@ArgsType()
export class UpsertOneProjectActivityAssigneeArgs {

    @Field(() => ProjectActivityAssigneeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>;

    @Field(() => ProjectActivityAssigneeCreateInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeCreateInput)
    create!: ProjectActivityAssigneeCreateInput;

    @Field(() => ProjectActivityAssigneeUpdateInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeUpdateInput)
    update!: ProjectActivityAssigneeUpdateInput;
}
