import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BudgetTransactionCountOrderByAggregateInput } from './budget-transaction-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { BudgetTransactionAvgOrderByAggregateInput } from './budget-transaction-avg-order-by-aggregate.input';
import { BudgetTransactionMaxOrderByAggregateInput } from './budget-transaction-max-order-by-aggregate.input';
import { BudgetTransactionMinOrderByAggregateInput } from './budget-transaction-min-order-by-aggregate.input';
import { BudgetTransactionSumOrderByAggregateInput } from './budget-transaction-sum-order-by-aggregate.input';

@InputType()
export class BudgetTransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    annual_budget_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    delta_allocated?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    delta_expenses?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    project_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    subsidy_request_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => BudgetTransactionCountOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionCountOrderByAggregateInput)
    _count?: BudgetTransactionCountOrderByAggregateInput;

    @Field(() => BudgetTransactionAvgOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionAvgOrderByAggregateInput)
    _avg?: BudgetTransactionAvgOrderByAggregateInput;

    @Field(() => BudgetTransactionMaxOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionMaxOrderByAggregateInput)
    _max?: BudgetTransactionMaxOrderByAggregateInput;

    @Field(() => BudgetTransactionMinOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionMinOrderByAggregateInput)
    _min?: BudgetTransactionMinOrderByAggregateInput;

    @Field(() => BudgetTransactionSumOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionSumOrderByAggregateInput)
    _sum?: BudgetTransactionSumOrderByAggregateInput;
}
