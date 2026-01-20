import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetPriority } from './annual-budget-priority.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnnualBudgetPriorityFilter } from './nested-enum-annual-budget-priority-filter.input';

@InputType()
export class NestedEnumAnnualBudgetPriorityWithAggregatesFilter {

    @Field(() => AnnualBudgetPriority, {nullable:true})
    equals?: `${AnnualBudgetPriority}`;

    @Field(() => [AnnualBudgetPriority], {nullable:true})
    in?: Array<`${AnnualBudgetPriority}`>;

    @Field(() => [AnnualBudgetPriority], {nullable:true})
    notIn?: Array<`${AnnualBudgetPriority}`>;

    @Field(() => NestedEnumAnnualBudgetPriorityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnnualBudgetPriorityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnnualBudgetPriorityFilter, {nullable:true})
    _min?: NestedEnumAnnualBudgetPriorityFilter;

    @Field(() => NestedEnumAnnualBudgetPriorityFilter, {nullable:true})
    _max?: NestedEnumAnnualBudgetPriorityFilter;
}
