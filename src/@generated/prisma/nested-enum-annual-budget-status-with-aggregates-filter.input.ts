import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetStatus } from './annual-budget-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnnualBudgetStatusFilter } from './nested-enum-annual-budget-status-filter.input';

@InputType()
export class NestedEnumAnnualBudgetStatusWithAggregatesFilter {

    @Field(() => AnnualBudgetStatus, {nullable:true})
    equals?: `${AnnualBudgetStatus}`;

    @Field(() => [AnnualBudgetStatus], {nullable:true})
    in?: Array<`${AnnualBudgetStatus}`>;

    @Field(() => [AnnualBudgetStatus], {nullable:true})
    notIn?: Array<`${AnnualBudgetStatus}`>;

    @Field(() => NestedEnumAnnualBudgetStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnnualBudgetStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnnualBudgetStatusFilter, {nullable:true})
    _min?: NestedEnumAnnualBudgetStatusFilter;

    @Field(() => NestedEnumAnnualBudgetStatusFilter, {nullable:true})
    _max?: NestedEnumAnnualBudgetStatusFilter;
}
