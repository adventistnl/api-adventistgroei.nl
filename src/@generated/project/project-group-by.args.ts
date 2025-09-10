import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectOrderByWithAggregationInput } from './project-order-by-with-aggregation.input';
import { ProjectScalarFieldEnum } from './project-scalar-field.enum';
import { ProjectScalarWhereWithAggregatesInput } from './project-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectCountAggregateInput } from './project-count-aggregate.input';
import { ProjectAvgAggregateInput } from './project-avg-aggregate.input';
import { ProjectSumAggregateInput } from './project-sum-aggregate.input';
import { ProjectMinAggregateInput } from './project-min-aggregate.input';
import { ProjectMaxAggregateInput } from './project-max-aggregate.input';

@ArgsType()
export class ProjectGroupByArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => [ProjectOrderByWithAggregationInput], {nullable:true})
    @Type(() => ProjectOrderByWithAggregationInput)
    orderBy?: Array<ProjectOrderByWithAggregationInput>;

    @Field(() => [ProjectScalarFieldEnum], {nullable:false})
    by!: Array<`${ProjectScalarFieldEnum}`>;

    @Field(() => ProjectScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => ProjectScalarWhereWithAggregatesInput)
    having?: ProjectScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectCountAggregateInput, {nullable:true})
    @Type(() => ProjectCountAggregateInput)
    _count?: ProjectCountAggregateInput;

    @Field(() => ProjectAvgAggregateInput, {nullable:true})
    @Type(() => ProjectAvgAggregateInput)
    _avg?: ProjectAvgAggregateInput;

    @Field(() => ProjectSumAggregateInput, {nullable:true})
    @Type(() => ProjectSumAggregateInput)
    _sum?: ProjectSumAggregateInput;

    @Field(() => ProjectMinAggregateInput, {nullable:true})
    @Type(() => ProjectMinAggregateInput)
    _min?: ProjectMinAggregateInput;

    @Field(() => ProjectMaxAggregateInput, {nullable:true})
    @Type(() => ProjectMaxAggregateInput)
    _max?: ProjectMaxAggregateInput;
}
