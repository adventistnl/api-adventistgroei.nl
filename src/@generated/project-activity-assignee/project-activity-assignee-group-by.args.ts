import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityAssigneeWhereInput } from './project-activity-assignee-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeOrderByWithAggregationInput } from './project-activity-assignee-order-by-with-aggregation.input';
import { ProjectActivityAssigneeScalarFieldEnum } from './project-activity-assignee-scalar-field.enum';
import { ProjectActivityAssigneeScalarWhereWithAggregatesInput } from './project-activity-assignee-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectActivityAssigneeCountAggregateInput } from './project-activity-assignee-count-aggregate.input';
import { ProjectActivityAssigneeMinAggregateInput } from './project-activity-assignee-min-aggregate.input';
import { ProjectActivityAssigneeMaxAggregateInput } from './project-activity-assignee-max-aggregate.input';

@ArgsType()
export class ProjectActivityAssigneeGroupByArgs {

    @Field(() => ProjectActivityAssigneeWhereInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereInput)
    where?: ProjectActivityAssigneeWhereInput;

    @Field(() => [ProjectActivityAssigneeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectActivityAssigneeOrderByWithAggregationInput>;

    @Field(() => [ProjectActivityAssigneeScalarFieldEnum], {nullable:false})
    by!: Array<`${ProjectActivityAssigneeScalarFieldEnum}`>;

    @Field(() => ProjectActivityAssigneeScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProjectActivityAssigneeScalarWhereWithAggregatesInput;

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
