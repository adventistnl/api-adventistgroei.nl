import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityLogWhereInput } from './project-activity-log-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogOrderByWithAggregationInput } from './project-activity-log-order-by-with-aggregation.input';
import { ProjectActivityLogScalarFieldEnum } from './project-activity-log-scalar-field.enum';
import { ProjectActivityLogScalarWhereWithAggregatesInput } from './project-activity-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectActivityLogCountAggregateInput } from './project-activity-log-count-aggregate.input';
import { ProjectActivityLogMinAggregateInput } from './project-activity-log-min-aggregate.input';
import { ProjectActivityLogMaxAggregateInput } from './project-activity-log-max-aggregate.input';

@ArgsType()
export class ProjectActivityLogGroupByArgs {

    @Field(() => ProjectActivityLogWhereInput, {nullable:true})
    @Type(() => ProjectActivityLogWhereInput)
    where?: ProjectActivityLogWhereInput;

    @Field(() => [ProjectActivityLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectActivityLogOrderByWithAggregationInput>;

    @Field(() => [ProjectActivityLogScalarFieldEnum], {nullable:false})
    by!: Array<`${ProjectActivityLogScalarFieldEnum}`>;

    @Field(() => ProjectActivityLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProjectActivityLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectActivityLogCountAggregateInput, {nullable:true})
    _count?: ProjectActivityLogCountAggregateInput;

    @Field(() => ProjectActivityLogMinAggregateInput, {nullable:true})
    _min?: ProjectActivityLogMinAggregateInput;

    @Field(() => ProjectActivityLogMaxAggregateInput, {nullable:true})
    _max?: ProjectActivityLogMaxAggregateInput;
}
