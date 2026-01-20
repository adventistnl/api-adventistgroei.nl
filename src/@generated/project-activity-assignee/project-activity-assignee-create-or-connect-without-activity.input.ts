import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeCreateWithoutActivityInput } from './project-activity-assignee-create-without-activity.input';

@InputType()
export class ProjectActivityAssigneeCreateOrConnectWithoutActivityInput {

    @Field(() => ProjectActivityAssigneeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>;

    @Field(() => ProjectActivityAssigneeCreateWithoutActivityInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeCreateWithoutActivityInput)
    create!: ProjectActivityAssigneeCreateWithoutActivityInput;
}
