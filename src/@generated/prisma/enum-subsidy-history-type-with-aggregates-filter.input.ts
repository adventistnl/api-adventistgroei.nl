import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyHistoryType } from './subsidy-history-type.enum';
import { NestedEnumSubsidyHistoryTypeWithAggregatesFilter } from './nested-enum-subsidy-history-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSubsidyHistoryTypeFilter } from './nested-enum-subsidy-history-type-filter.input';

@InputType()
export class EnumSubsidyHistoryTypeWithAggregatesFilter {

    @Field(() => SubsidyHistoryType, {nullable:true})
    equals?: `${SubsidyHistoryType}`;

    @Field(() => [SubsidyHistoryType], {nullable:true})
    in?: Array<`${SubsidyHistoryType}`>;

    @Field(() => [SubsidyHistoryType], {nullable:true})
    notIn?: Array<`${SubsidyHistoryType}`>;

    @Field(() => NestedEnumSubsidyHistoryTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSubsidyHistoryTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSubsidyHistoryTypeFilter, {nullable:true})
    _min?: NestedEnumSubsidyHistoryTypeFilter;

    @Field(() => NestedEnumSubsidyHistoryTypeFilter, {nullable:true})
    _max?: NestedEnumSubsidyHistoryTypeFilter;
}
