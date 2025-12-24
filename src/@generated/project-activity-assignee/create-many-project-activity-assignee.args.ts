import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCreateManyInput } from './project-activity-assignee-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectActivityAssigneeArgs {

    @Field(() => [ProjectActivityAssigneeCreateManyInput], {nullable:false})
    @Type(() => ProjectActivityAssigneeCreateManyInput)
    data!: Array<ProjectActivityAssigneeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
