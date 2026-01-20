import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCreateManyActivityInput } from './project-activity-assignee-create-many-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityAssigneeCreateManyActivityInputEnvelope {

    @Field(() => [ProjectActivityAssigneeCreateManyActivityInput], {nullable:false})
    @Type(() => ProjectActivityAssigneeCreateManyActivityInput)
    data!: Array<ProjectActivityAssigneeCreateManyActivityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
