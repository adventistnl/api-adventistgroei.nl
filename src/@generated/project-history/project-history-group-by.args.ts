import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectHistoryWhereInput } from './project-history-where.input';
import { Type } from 'class-transformer';
import { ProjectHistoryOrderByWithAggregationInput } from './project-history-order-by-with-aggregation.input';
import { ProjectHistoryScalarFieldEnum } from './project-history-scalar-field.enum';
import { ProjectHistoryScalarWhereWithAggregatesInput } from './project-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectHistoryCountAggregateInput } from './project-history-count-aggregate.input';
import { ProjectHistoryMinAggregateInput } from './project-history-min-aggregate.input';
import { ProjectHistoryMaxAggregateInput } from './project-history-max-aggregate.input';

@ArgsType()
export class ProjectHistoryGroupByArgs {

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    @Type(() => ProjectHistoryWhereInput)
    where?: ProjectHistoryWhereInput;

    @Field(() => [ProjectHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectHistoryOrderByWithAggregationInput>;

    @Field(() => [ProjectHistoryScalarFieldEnum], {nullable:false})
    by!: Array<`${ProjectHistoryScalarFieldEnum}`>;

    @Field(() => ProjectHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProjectHistoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectHistoryCountAggregateInput, {nullable:true})
    _count?: ProjectHistoryCountAggregateInput;

    @Field(() => ProjectHistoryMinAggregateInput, {nullable:true})
    _min?: ProjectHistoryMinAggregateInput;

    @Field(() => ProjectHistoryMaxAggregateInput, {nullable:true})
    _max?: ProjectHistoryMaxAggregateInput;
}
