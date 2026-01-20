import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetEntityType } from './annual-budget-entity-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnnualBudgetEntityTypeFilter } from './nested-enum-annual-budget-entity-type-filter.input';

@InputType()
export class NestedEnumAnnualBudgetEntityTypeWithAggregatesFilter {

    @Field(() => AnnualBudgetEntityType, {nullable:true})
    equals?: `${AnnualBudgetEntityType}`;

    @Field(() => [AnnualBudgetEntityType], {nullable:true})
    in?: Array<`${AnnualBudgetEntityType}`>;

    @Field(() => [AnnualBudgetEntityType], {nullable:true})
    notIn?: Array<`${AnnualBudgetEntityType}`>;

    @Field(() => NestedEnumAnnualBudgetEntityTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnnualBudgetEntityTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnnualBudgetEntityTypeFilter, {nullable:true})
    _min?: NestedEnumAnnualBudgetEntityTypeFilter;

    @Field(() => NestedEnumAnnualBudgetEntityTypeFilter, {nullable:true})
    _max?: NestedEnumAnnualBudgetEntityTypeFilter;
}
