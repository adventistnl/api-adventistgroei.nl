import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityPriority } from './activity-priority.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumActivityPriorityFilter } from './nested-enum-activity-priority-filter.input';

@InputType()
export class NestedEnumActivityPriorityWithAggregatesFilter {

    @Field(() => ActivityPriority, {nullable:true})
    equals?: `${ActivityPriority}`;

    @Field(() => [ActivityPriority], {nullable:true})
    in?: Array<`${ActivityPriority}`>;

    @Field(() => [ActivityPriority], {nullable:true})
    notIn?: Array<`${ActivityPriority}`>;

    @Field(() => NestedEnumActivityPriorityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActivityPriorityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumActivityPriorityFilter, {nullable:true})
    _min?: NestedEnumActivityPriorityFilter;

    @Field(() => NestedEnumActivityPriorityFilter, {nullable:true})
    _max?: NestedEnumActivityPriorityFilter;
}
