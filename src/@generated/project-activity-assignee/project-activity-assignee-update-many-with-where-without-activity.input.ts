import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityAssigneeScalarWhereInput } from './project-activity-assignee-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeUpdateManyMutationInput } from './project-activity-assignee-update-many-mutation.input';

@InputType()
export class ProjectActivityAssigneeUpdateManyWithWhereWithoutActivityInput {

    @Field(() => ProjectActivityAssigneeScalarWhereInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeScalarWhereInput)
    where!: ProjectActivityAssigneeScalarWhereInput;

    @Field(() => ProjectActivityAssigneeUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeUpdateManyMutationInput)
    data!: ProjectActivityAssigneeUpdateManyMutationInput;
}
