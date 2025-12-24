import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityAssigneeUpdateInput } from './project-activity-assignee-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';

@ArgsType()
export class UpdateOneProjectActivityAssigneeArgs {

    @Field(() => ProjectActivityAssigneeUpdateInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeUpdateInput)
    data!: ProjectActivityAssigneeUpdateInput;

    @Field(() => ProjectActivityAssigneeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>;
}
