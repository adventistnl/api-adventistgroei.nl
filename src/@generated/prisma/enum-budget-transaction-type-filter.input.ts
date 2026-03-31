import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionType } from './budget-transaction-type.enum';
import { NestedEnumBudgetTransactionTypeFilter } from './nested-enum-budget-transaction-type-filter.input';

@InputType()
export class EnumBudgetTransactionTypeFilter {

    @Field(() => BudgetTransactionType, {nullable:true})
    equals?: `${BudgetTransactionType}`;

    @Field(() => [BudgetTransactionType], {nullable:true})
    in?: Array<`${BudgetTransactionType}`>;

    @Field(() => [BudgetTransactionType], {nullable:true})
    notIn?: Array<`${BudgetTransactionType}`>;

    @Field(() => NestedEnumBudgetTransactionTypeFilter, {nullable:true})
    not?: NestedEnumBudgetTransactionTypeFilter;
}
