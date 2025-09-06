import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyRequestCountOrderByAggregateInput } from './subsidy-request-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { SubsidyRequestAvgOrderByAggregateInput } from './subsidy-request-avg-order-by-aggregate.input';
import { SubsidyRequestMaxOrderByAggregateInput } from './subsidy-request-max-order-by-aggregate.input';
import { SubsidyRequestMinOrderByAggregateInput } from './subsidy-request-min-order-by-aggregate.input';
import { SubsidyRequestSumOrderByAggregateInput } from './subsidy-request-sum-order-by-aggregate.input';

@InputType()
export class SubsidyRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    requester_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_project_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    church_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_statuses_id?: `${SortOrder}`;

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

    @Field(() => SubsidyRequestCountOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestCountOrderByAggregateInput)
    _count?: SubsidyRequestCountOrderByAggregateInput;

    @Field(() => SubsidyRequestAvgOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestAvgOrderByAggregateInput)
    _avg?: SubsidyRequestAvgOrderByAggregateInput;

    @Field(() => SubsidyRequestMaxOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestMaxOrderByAggregateInput)
    _max?: SubsidyRequestMaxOrderByAggregateInput;

    @Field(() => SubsidyRequestMinOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestMinOrderByAggregateInput)
    _min?: SubsidyRequestMinOrderByAggregateInput;

    @Field(() => SubsidyRequestSumOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestSumOrderByAggregateInput)
    _sum?: SubsidyRequestSumOrderByAggregateInput;
}
