import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestPriority } from './subsidy-request-priority.enum';

@InputType()
export class NestedEnumSubsidyRequestPriorityFilter {

    @Field(() => SubsidyRequestPriority, {nullable:true})
    equals?: `${SubsidyRequestPriority}`;

    @Field(() => [SubsidyRequestPriority], {nullable:true})
    in?: Array<`${SubsidyRequestPriority}`>;

    @Field(() => [SubsidyRequestPriority], {nullable:true})
    notIn?: Array<`${SubsidyRequestPriority}`>;

    @Field(() => NestedEnumSubsidyRequestPriorityFilter, {nullable:true})
    not?: NestedEnumSubsidyRequestPriorityFilter;
}
