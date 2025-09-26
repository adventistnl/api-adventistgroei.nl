import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetStatus } from './annual-budget-status.enum';
import { NestedEnumAnnualBudgetStatusFilter } from './nested-enum-annual-budget-status-filter.input';

@InputType()
export class EnumAnnualBudgetStatusFilter {

    @Field(() => AnnualBudgetStatus, {nullable:true})
    equals?: `${AnnualBudgetStatus}`;

    @Field(() => [AnnualBudgetStatus], {nullable:true})
    in?: Array<`${AnnualBudgetStatus}`>;

    @Field(() => [AnnualBudgetStatus], {nullable:true})
    notIn?: Array<`${AnnualBudgetStatus}`>;

    @Field(() => NestedEnumAnnualBudgetStatusFilter, {nullable:true})
    not?: NestedEnumAnnualBudgetStatusFilter;
}
