import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyStatusCountOrderByAggregateInput } from './subsidy-status-count-order-by-aggregate.input';
import { SubsidyStatusAvgOrderByAggregateInput } from './subsidy-status-avg-order-by-aggregate.input';
import { SubsidyStatusMaxOrderByAggregateInput } from './subsidy-status-max-order-by-aggregate.input';
import { SubsidyStatusMinOrderByAggregateInput } from './subsidy-status-min-order-by-aggregate.input';
import { SubsidyStatusSumOrderByAggregateInput } from './subsidy-status-sum-order-by-aggregate.input';

@InputType()
export class SubsidyStatusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    assigned_to?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => SubsidyStatusCountOrderByAggregateInput, {nullable:true})
    _count?: SubsidyStatusCountOrderByAggregateInput;

    @Field(() => SubsidyStatusAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubsidyStatusAvgOrderByAggregateInput;

    @Field(() => SubsidyStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: SubsidyStatusMaxOrderByAggregateInput;

    @Field(() => SubsidyStatusMinOrderByAggregateInput, {nullable:true})
    _min?: SubsidyStatusMinOrderByAggregateInput;

    @Field(() => SubsidyStatusSumOrderByAggregateInput, {nullable:true})
    _sum?: SubsidyStatusSumOrderByAggregateInput;
}
