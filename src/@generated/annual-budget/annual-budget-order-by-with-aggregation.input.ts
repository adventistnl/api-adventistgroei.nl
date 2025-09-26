import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AnnualBudgetCountOrderByAggregateInput } from './annual-budget-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { AnnualBudgetAvgOrderByAggregateInput } from './annual-budget-avg-order-by-aggregate.input';
import { AnnualBudgetMaxOrderByAggregateInput } from './annual-budget-max-order-by-aggregate.input';
import { AnnualBudgetMinOrderByAggregateInput } from './annual-budget-min-order-by-aggregate.input';
import { AnnualBudgetSumOrderByAggregateInput } from './annual-budget-sum-order-by-aggregate.input';

@InputType()
export class AnnualBudgetOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    year?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    planned_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total_expenses?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    balance?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approved_by?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

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

    @Field(() => AnnualBudgetCountOrderByAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetCountOrderByAggregateInput)
    _count?: AnnualBudgetCountOrderByAggregateInput;

    @Field(() => AnnualBudgetAvgOrderByAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetAvgOrderByAggregateInput)
    _avg?: AnnualBudgetAvgOrderByAggregateInput;

    @Field(() => AnnualBudgetMaxOrderByAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetMaxOrderByAggregateInput)
    _max?: AnnualBudgetMaxOrderByAggregateInput;

    @Field(() => AnnualBudgetMinOrderByAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetMinOrderByAggregateInput)
    _min?: AnnualBudgetMinOrderByAggregateInput;

    @Field(() => AnnualBudgetSumOrderByAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetSumOrderByAggregateInput)
    _sum?: AnnualBudgetSumOrderByAggregateInput;
}
