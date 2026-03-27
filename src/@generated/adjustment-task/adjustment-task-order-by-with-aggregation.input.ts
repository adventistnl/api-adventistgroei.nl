import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdjustmentTaskCountOrderByAggregateInput } from './adjustment-task-count-order-by-aggregate.input';
import { AdjustmentTaskAvgOrderByAggregateInput } from './adjustment-task-avg-order-by-aggregate.input';
import { AdjustmentTaskMaxOrderByAggregateInput } from './adjustment-task-max-order-by-aggregate.input';
import { AdjustmentTaskMinOrderByAggregateInput } from './adjustment-task-min-order-by-aggregate.input';
import { AdjustmentTaskSumOrderByAggregateInput } from './adjustment-task-sum-order-by-aggregate.input';

@InputType()
export class AdjustmentTaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    adjustment_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    completed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => AdjustmentTaskCountOrderByAggregateInput, {nullable:true})
    _count?: AdjustmentTaskCountOrderByAggregateInput;

    @Field(() => AdjustmentTaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: AdjustmentTaskAvgOrderByAggregateInput;

    @Field(() => AdjustmentTaskMaxOrderByAggregateInput, {nullable:true})
    _max?: AdjustmentTaskMaxOrderByAggregateInput;

    @Field(() => AdjustmentTaskMinOrderByAggregateInput, {nullable:true})
    _min?: AdjustmentTaskMinOrderByAggregateInput;

    @Field(() => AdjustmentTaskSumOrderByAggregateInput, {nullable:true})
    _sum?: AdjustmentTaskSumOrderByAggregateInput;
}
