import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateNestedOneWithoutAssigneesInput } from '../project-activity/project-activity-create-nested-one-without-assignees.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutActivity_assignmentsInput } from '../user/user-create-nested-one-without-activity-assignments.input';

@InputType()
export class ProjectActivityAssigneeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => ProjectActivityCreateNestedOneWithoutAssigneesInput, {nullable:false})
    @Type(() => ProjectActivityCreateNestedOneWithoutAssigneesInput)
    activity!: ProjectActivityCreateNestedOneWithoutAssigneesInput;

    @Field(() => UserCreateNestedOneWithoutActivity_assignmentsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutActivity_assignmentsInput)
    user!: UserCreateNestedOneWithoutActivity_assignmentsInput;
}
