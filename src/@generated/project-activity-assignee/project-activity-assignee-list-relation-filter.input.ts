import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityAssigneeWhereInput } from './project-activity-assignee-where.input';

@InputType()
export class ProjectActivityAssigneeListRelationFilter {

    @Field(() => ProjectActivityAssigneeWhereInput, {nullable:true})
    every?: ProjectActivityAssigneeWhereInput;

    @Field(() => ProjectActivityAssigneeWhereInput, {nullable:true})
    some?: ProjectActivityAssigneeWhereInput;

    @Field(() => ProjectActivityAssigneeWhereInput, {nullable:true})
    none?: ProjectActivityAssigneeWhereInput;
}
