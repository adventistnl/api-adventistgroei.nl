import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetEntityType } from './annual-budget-entity-type.enum';
import { NestedEnumAnnualBudgetEntityTypeFilter } from './nested-enum-annual-budget-entity-type-filter.input';

@InputType()
export class EnumAnnualBudgetEntityTypeFilter {

    @Field(() => AnnualBudgetEntityType, {nullable:true})
    equals?: `${AnnualBudgetEntityType}`;

    @Field(() => [AnnualBudgetEntityType], {nullable:true})
    in?: Array<`${AnnualBudgetEntityType}`>;

    @Field(() => [AnnualBudgetEntityType], {nullable:true})
    notIn?: Array<`${AnnualBudgetEntityType}`>;

    @Field(() => NestedEnumAnnualBudgetEntityTypeFilter, {nullable:true})
    not?: NestedEnumAnnualBudgetEntityTypeFilter;
}
