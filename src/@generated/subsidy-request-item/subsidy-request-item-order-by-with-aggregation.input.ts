import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyRequestItemCountOrderByAggregateInput } from './subsidy-request-item-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemAvgOrderByAggregateInput } from './subsidy-request-item-avg-order-by-aggregate.input';
import { SubsidyRequestItemMaxOrderByAggregateInput } from './subsidy-request-item-max-order-by-aggregate.input';
import { SubsidyRequestItemMinOrderByAggregateInput } from './subsidy-request-item-min-order-by-aggregate.input';
import { SubsidyRequestItemSumOrderByAggregateInput } from './subsidy-request-item-sum-order-by-aggregate.input';

@InputType()
export class SubsidyRequestItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_request_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    requested_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    approved_amount?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

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

    @Field(() => SubsidyRequestItemCountOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemCountOrderByAggregateInput)
    _count?: SubsidyRequestItemCountOrderByAggregateInput;

    @Field(() => SubsidyRequestItemAvgOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemAvgOrderByAggregateInput)
    _avg?: SubsidyRequestItemAvgOrderByAggregateInput;

    @Field(() => SubsidyRequestItemMaxOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemMaxOrderByAggregateInput)
    _max?: SubsidyRequestItemMaxOrderByAggregateInput;

    @Field(() => SubsidyRequestItemMinOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemMinOrderByAggregateInput)
    _min?: SubsidyRequestItemMinOrderByAggregateInput;

    @Field(() => SubsidyRequestItemSumOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemSumOrderByAggregateInput)
    _sum?: SubsidyRequestItemSumOrderByAggregateInput;
}
