import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCategory } from './annual-budget-category.enum';
import { NestedEnumAnnualBudgetCategoryFilter } from './nested-enum-annual-budget-category-filter.input';

@InputType()
export class EnumAnnualBudgetCategoryFilter {

    @Field(() => AnnualBudgetCategory, {nullable:true})
    equals?: `${AnnualBudgetCategory}`;

    @Field(() => [AnnualBudgetCategory], {nullable:true})
    in?: Array<`${AnnualBudgetCategory}`>;

    @Field(() => [AnnualBudgetCategory], {nullable:true})
    notIn?: Array<`${AnnualBudgetCategory}`>;

    @Field(() => NestedEnumAnnualBudgetCategoryFilter, {nullable:true})
    not?: NestedEnumAnnualBudgetCategoryFilter;
}
