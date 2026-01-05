import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestPriority } from './subsidy-request-priority.enum';
import { NestedEnumSubsidyRequestPriorityWithAggregatesFilter } from './nested-enum-subsidy-request-priority-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSubsidyRequestPriorityFilter } from './nested-enum-subsidy-request-priority-filter.input';

@InputType()
export class EnumSubsidyRequestPriorityWithAggregatesFilter {

    @Field(() => SubsidyRequestPriority, {nullable:true})
    equals?: `${SubsidyRequestPriority}`;

    @Field(() => [SubsidyRequestPriority], {nullable:true})
    in?: Array<`${SubsidyRequestPriority}`>;

    @Field(() => [SubsidyRequestPriority], {nullable:true})
    notIn?: Array<`${SubsidyRequestPriority}`>;

    @Field(() => NestedEnumSubsidyRequestPriorityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSubsidyRequestPriorityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSubsidyRequestPriorityFilter, {nullable:true})
    _min?: NestedEnumSubsidyRequestPriorityFilter;

    @Field(() => NestedEnumSubsidyRequestPriorityFilter, {nullable:true})
    _max?: NestedEnumSubsidyRequestPriorityFilter;
}
