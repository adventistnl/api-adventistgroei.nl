import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdjustmentTaskWhereInput } from './adjustment-task-where.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskOrderByWithAggregationInput } from './adjustment-task-order-by-with-aggregation.input';
import { AdjustmentTaskScalarFieldEnum } from './adjustment-task-scalar-field.enum';
import { AdjustmentTaskScalarWhereWithAggregatesInput } from './adjustment-task-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdjustmentTaskCountAggregateInput } from './adjustment-task-count-aggregate.input';
import { AdjustmentTaskAvgAggregateInput } from './adjustment-task-avg-aggregate.input';
import { AdjustmentTaskSumAggregateInput } from './adjustment-task-sum-aggregate.input';
import { AdjustmentTaskMinAggregateInput } from './adjustment-task-min-aggregate.input';
import { AdjustmentTaskMaxAggregateInput } from './adjustment-task-max-aggregate.input';

@ArgsType()
export class AdjustmentTaskGroupByArgs {

    @Field(() => AdjustmentTaskWhereInput, {nullable:true})
    @Type(() => AdjustmentTaskWhereInput)
    where?: AdjustmentTaskWhereInput;

    @Field(() => [AdjustmentTaskOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdjustmentTaskOrderByWithAggregationInput>;

    @Field(() => [AdjustmentTaskScalarFieldEnum], {nullable:false})
    by!: Array<`${AdjustmentTaskScalarFieldEnum}`>;

    @Field(() => AdjustmentTaskScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdjustmentTaskScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdjustmentTaskCountAggregateInput, {nullable:true})
    _count?: AdjustmentTaskCountAggregateInput;

    @Field(() => AdjustmentTaskAvgAggregateInput, {nullable:true})
    _avg?: AdjustmentTaskAvgAggregateInput;

    @Field(() => AdjustmentTaskSumAggregateInput, {nullable:true})
    _sum?: AdjustmentTaskSumAggregateInput;

    @Field(() => AdjustmentTaskMinAggregateInput, {nullable:true})
    _min?: AdjustmentTaskMinAggregateInput;

    @Field(() => AdjustmentTaskMaxAggregateInput, {nullable:true})
    _max?: AdjustmentTaskMaxAggregateInput;
}
