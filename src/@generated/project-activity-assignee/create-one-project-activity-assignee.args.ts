import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCreateInput } from './project-activity-assignee-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectActivityAssigneeArgs {

    @Field(() => ProjectActivityAssigneeCreateInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeCreateInput)
    data!: ProjectActivityAssigneeCreateInput;
}
