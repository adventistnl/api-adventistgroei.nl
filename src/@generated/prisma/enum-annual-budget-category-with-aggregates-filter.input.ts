import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCategory } from './annual-budget-category.enum';
import { NestedEnumAnnualBudgetCategoryWithAggregatesFilter } from './nested-enum-annual-budget-category-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnnualBudgetCategoryFilter } from './nested-enum-annual-budget-category-filter.input';

@InputType()
export class EnumAnnualBudgetCategoryWithAggregatesFilter {

    @Field(() => AnnualBudgetCategory, {nullable:true})
    equals?: `${AnnualBudgetCategory}`;

    @Field(() => [AnnualBudgetCategory], {nullable:true})
    in?: Array<`${AnnualBudgetCategory}`>;

    @Field(() => [AnnualBudgetCategory], {nullable:true})
    notIn?: Array<`${AnnualBudgetCategory}`>;

    @Field(() => NestedEnumAnnualBudgetCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnnualBudgetCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnnualBudgetCategoryFilter, {nullable:true})
    _min?: NestedEnumAnnualBudgetCategoryFilter;

    @Field(() => NestedEnumAnnualBudgetCategoryFilter, {nullable:true})
    _max?: NestedEnumAnnualBudgetCategoryFilter;
}
