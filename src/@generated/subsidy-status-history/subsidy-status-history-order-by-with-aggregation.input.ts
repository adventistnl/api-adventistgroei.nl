import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyStatusHistoryCountOrderByAggregateInput } from './subsidy-status-history-count-order-by-aggregate.input';
import { SubsidyStatusHistoryMaxOrderByAggregateInput } from './subsidy-status-history-max-order-by-aggregate.input';
import { SubsidyStatusHistoryMinOrderByAggregateInput } from './subsidy-status-history-min-order-by-aggregate.input';

@InputType()
export class SubsidyStatusHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_request_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    previous_status_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    reason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    changed_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    changed_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => SubsidyStatusHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: SubsidyStatusHistoryCountOrderByAggregateInput;

    @Field(() => SubsidyStatusHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: SubsidyStatusHistoryMaxOrderByAggregateInput;

    @Field(() => SubsidyStatusHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: SubsidyStatusHistoryMinOrderByAggregateInput;
}
