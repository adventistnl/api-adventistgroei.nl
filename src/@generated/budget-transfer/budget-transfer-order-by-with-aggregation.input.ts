import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BudgetTransferCountOrderByAggregateInput } from './budget-transfer-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { BudgetTransferAvgOrderByAggregateInput } from './budget-transfer-avg-order-by-aggregate.input';
import { BudgetTransferMaxOrderByAggregateInput } from './budget-transfer-max-order-by-aggregate.input';
import { BudgetTransferMinOrderByAggregateInput } from './budget-transfer-min-order-by-aggregate.input';
import { BudgetTransferSumOrderByAggregateInput } from './budget-transfer-sum-order-by-aggregate.input';

@InputType()
export class BudgetTransferOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    from_budget_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    to_budget_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => BudgetTransferCountOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransferCountOrderByAggregateInput)
    _count?: BudgetTransferCountOrderByAggregateInput;

    @Field(() => BudgetTransferAvgOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransferAvgOrderByAggregateInput)
    _avg?: BudgetTransferAvgOrderByAggregateInput;

    @Field(() => BudgetTransferMaxOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransferMaxOrderByAggregateInput)
    _max?: BudgetTransferMaxOrderByAggregateInput;

    @Field(() => BudgetTransferMinOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransferMinOrderByAggregateInput)
    _min?: BudgetTransferMinOrderByAggregateInput;

    @Field(() => BudgetTransferSumOrderByAggregateInput, {nullable:true})
    @Type(() => BudgetTransferSumOrderByAggregateInput)
    _sum?: BudgetTransferSumOrderByAggregateInput;
}
