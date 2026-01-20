import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityPriority } from './activity-priority.enum';
import { NestedEnumActivityPriorityFilter } from './nested-enum-activity-priority-filter.input';

@InputType()
export class EnumActivityPriorityFilter {

    @Field(() => ActivityPriority, {nullable:true})
    equals?: `${ActivityPriority}`;

    @Field(() => [ActivityPriority], {nullable:true})
    in?: Array<`${ActivityPriority}`>;

    @Field(() => [ActivityPriority], {nullable:true})
    notIn?: Array<`${ActivityPriority}`>;

    @Field(() => NestedEnumActivityPriorityFilter, {nullable:true})
    not?: NestedEnumActivityPriorityFilter;
}
