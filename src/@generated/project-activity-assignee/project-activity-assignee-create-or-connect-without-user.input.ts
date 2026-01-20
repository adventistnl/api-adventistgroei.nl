import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeCreateWithoutUserInput } from './project-activity-assignee-create-without-user.input';

@InputType()
export class ProjectActivityAssigneeCreateOrConnectWithoutUserInput {

    @Field(() => ProjectActivityAssigneeWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>;

    @Field(() => ProjectActivityAssigneeCreateWithoutUserInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeCreateWithoutUserInput)
    create!: ProjectActivityAssigneeCreateWithoutUserInput;
}
