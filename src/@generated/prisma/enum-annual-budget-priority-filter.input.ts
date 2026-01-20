import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetPriority } from './annual-budget-priority.enum';
import { NestedEnumAnnualBudgetPriorityFilter } from './nested-enum-annual-budget-priority-filter.input';

@InputType()
export class EnumAnnualBudgetPriorityFilter {

    @Field(() => AnnualBudgetPriority, {nullable:true})
    equals?: `${AnnualBudgetPriority}`;

    @Field(() => [AnnualBudgetPriority], {nullable:true})
    in?: Array<`${AnnualBudgetPriority}`>;

    @Field(() => [AnnualBudgetPriority], {nullable:true})
    notIn?: Array<`${AnnualBudgetPriority}`>;

    @Field(() => NestedEnumAnnualBudgetPriorityFilter, {nullable:true})
    not?: NestedEnumAnnualBudgetPriorityFilter;
}
