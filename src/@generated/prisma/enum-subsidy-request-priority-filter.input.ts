import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestPriority } from './subsidy-request-priority.enum';
import { NestedEnumSubsidyRequestPriorityFilter } from './nested-enum-subsidy-request-priority-filter.input';

@InputType()
export class EnumSubsidyRequestPriorityFilter {

    @Field(() => SubsidyRequestPriority, {nullable:true})
    equals?: `${SubsidyRequestPriority}`;

    @Field(() => [SubsidyRequestPriority], {nullable:true})
    in?: Array<`${SubsidyRequestPriority}`>;

    @Field(() => [SubsidyRequestPriority], {nullable:true})
    notIn?: Array<`${SubsidyRequestPriority}`>;

    @Field(() => NestedEnumSubsidyRequestPriorityFilter, {nullable:true})
    not?: NestedEnumSubsidyRequestPriorityFilter;
}
