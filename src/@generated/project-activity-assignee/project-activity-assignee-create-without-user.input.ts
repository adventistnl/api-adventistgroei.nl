import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateNestedOneWithoutAssigneesInput } from '../project-activity/project-activity-create-nested-one-without-assignees.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityAssigneeCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => ProjectActivityCreateNestedOneWithoutAssigneesInput, {nullable:false})
    @Type(() => ProjectActivityCreateNestedOneWithoutAssigneesInput)
    activity!: ProjectActivityCreateNestedOneWithoutAssigneesInput;
}
