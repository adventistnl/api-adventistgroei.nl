import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityAssigneeWhereInput } from './project-activity-assignee-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProjectActivityAssigneeArgs {

    @Field(() => ProjectActivityAssigneeWhereInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereInput)
    where?: ProjectActivityAssigneeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
