import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCreateManyUserInput } from './project-activity-assignee-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityAssigneeCreateManyUserInputEnvelope {

    @Field(() => [ProjectActivityAssigneeCreateManyUserInput], {nullable:false})
    @Type(() => ProjectActivityAssigneeCreateManyUserInput)
    data!: Array<ProjectActivityAssigneeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
