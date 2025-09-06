import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyActivityCountOrderByAggregateInput } from './subsidy-activity-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { SubsidyActivityAvgOrderByAggregateInput } from './subsidy-activity-avg-order-by-aggregate.input';
import { SubsidyActivityMaxOrderByAggregateInput } from './subsidy-activity-max-order-by-aggregate.input';
import { SubsidyActivityMinOrderByAggregateInput } from './subsidy-activity-min-order-by-aggregate.input';
import { SubsidyActivitySumOrderByAggregateInput } from './subsidy-activity-sum-order-by-aggregate.input';

@InputType()
export class SubsidyActivityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_request_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    budget_amount?: `${SortOrder}`;

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

    @Field(() => SubsidyActivityCountOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyActivityCountOrderByAggregateInput)
    _count?: SubsidyActivityCountOrderByAggregateInput;

    @Field(() => SubsidyActivityAvgOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyActivityAvgOrderByAggregateInput)
    _avg?: SubsidyActivityAvgOrderByAggregateInput;

    @Field(() => SubsidyActivityMaxOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyActivityMaxOrderByAggregateInput)
    _max?: SubsidyActivityMaxOrderByAggregateInput;

    @Field(() => SubsidyActivityMinOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyActivityMinOrderByAggregateInput)
    _min?: SubsidyActivityMinOrderByAggregateInput;

    @Field(() => SubsidyActivitySumOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyActivitySumOrderByAggregateInput)
    _sum?: SubsidyActivitySumOrderByAggregateInput;
}
