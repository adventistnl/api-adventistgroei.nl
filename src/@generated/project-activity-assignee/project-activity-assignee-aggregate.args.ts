import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityAssigneeWhereInput } from './project-activity-assignee-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeOrderByWithRelationInput } from './project-activity-assignee-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectActivityAssigneeCountAggregateInput } from './project-activity-assignee-count-aggregate.input';
import { ProjectActivityAssigneeMinAggregateInput } from './project-activity-assignee-min-aggregate.input';
import { ProjectActivityAssigneeMaxAggregateInput } from './project-activity-assignee-max-aggregate.input';

@ArgsType()
export class ProjectActivityAssigneeAggregateArgs {

    @Field(() => ProjectActivityAssigneeWhereInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereInput)
    where?: ProjectActivityAssigneeWhereInput;

    @Field(() => [ProjectActivityAssigneeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectActivityAssigneeOrderByWithRelationInput>;

    @Field(() => ProjectActivityAssigneeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectActivityAssigneeCountAggregateInput, {nullable:true})
    _count?: ProjectActivityAssigneeCountAggregateInput;

    @Field(() => ProjectActivityAssigneeMinAggregateInput, {nullable:true})
    _min?: ProjectActivityAssigneeMinAggregateInput;

    @Field(() => ProjectActivityAssigneeMaxAggregateInput, {nullable:true})
    _max?: ProjectActivityAssigneeMaxAggregateInput;
}
