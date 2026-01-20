import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityAssigneeUpdateManyMutationInput } from './project-activity-assignee-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeWhereInput } from './project-activity-assignee-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProjectActivityAssigneeArgs {

    @Field(() => ProjectActivityAssigneeUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectActivityAssigneeUpdateManyMutationInput)
    data!: ProjectActivityAssigneeUpdateManyMutationInput;

    @Field(() => ProjectActivityAssigneeWhereInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereInput)
    where?: ProjectActivityAssigneeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
