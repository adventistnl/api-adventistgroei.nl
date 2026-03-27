import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentOrderByWithAggregationInput } from './project-adjustment-order-by-with-aggregation.input';
import { ProjectAdjustmentScalarFieldEnum } from './project-adjustment-scalar-field.enum';
import { ProjectAdjustmentScalarWhereWithAggregatesInput } from './project-adjustment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectAdjustmentCountAggregateInput } from './project-adjustment-count-aggregate.input';
import { ProjectAdjustmentMinAggregateInput } from './project-adjustment-min-aggregate.input';
import { ProjectAdjustmentMaxAggregateInput } from './project-adjustment-max-aggregate.input';

@ArgsType()
export class ProjectAdjustmentGroupByArgs {

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    where?: ProjectAdjustmentWhereInput;

    @Field(() => [ProjectAdjustmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectAdjustmentOrderByWithAggregationInput>;

    @Field(() => [ProjectAdjustmentScalarFieldEnum], {nullable:false})
    by!: Array<`${ProjectAdjustmentScalarFieldEnum}`>;

    @Field(() => ProjectAdjustmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProjectAdjustmentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectAdjustmentCountAggregateInput, {nullable:true})
    _count?: ProjectAdjustmentCountAggregateInput;

    @Field(() => ProjectAdjustmentMinAggregateInput, {nullable:true})
    _min?: ProjectAdjustmentMinAggregateInput;

    @Field(() => ProjectAdjustmentMaxAggregateInput, {nullable:true})
    _max?: ProjectAdjustmentMaxAggregateInput;
}
