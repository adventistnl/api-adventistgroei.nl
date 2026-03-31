import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionType } from './budget-transaction-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBudgetTransactionTypeFilter } from './nested-enum-budget-transaction-type-filter.input';

@InputType()
export class NestedEnumBudgetTransactionTypeWithAggregatesFilter {

    @Field(() => BudgetTransactionType, {nullable:true})
    equals?: `${BudgetTransactionType}`;

    @Field(() => [BudgetTransactionType], {nullable:true})
    in?: Array<`${BudgetTransactionType}`>;

    @Field(() => [BudgetTransactionType], {nullable:true})
    notIn?: Array<`${BudgetTransactionType}`>;

    @Field(() => NestedEnumBudgetTransactionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBudgetTransactionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBudgetTransactionTypeFilter, {nullable:true})
    _min?: NestedEnumBudgetTransactionTypeFilter;

    @Field(() => NestedEnumBudgetTransactionTypeFilter, {nullable:true})
    _max?: NestedEnumBudgetTransactionTypeFilter;
}
