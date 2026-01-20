import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProjectActivityAssigneeOrThrowArgs {

    @Field(() => ProjectActivityAssigneeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>;
}
