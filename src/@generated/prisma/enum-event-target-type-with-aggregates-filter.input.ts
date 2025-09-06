import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTargetType } from './event-target-type.enum';
import { NestedEnumEventTargetTypeWithAggregatesFilter } from './nested-enum-event-target-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEventTargetTypeFilter } from './nested-enum-event-target-type-filter.input';

@InputType()
export class EnumEventTargetTypeWithAggregatesFilter {

    @Field(() => EventTargetType, {nullable:true})
    equals?: `${EventTargetType}`;

    @Field(() => [EventTargetType], {nullable:true})
    in?: Array<`${EventTargetType}`>;

    @Field(() => [EventTargetType], {nullable:true})
    notIn?: Array<`${EventTargetType}`>;

    @Field(() => NestedEnumEventTargetTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEventTargetTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEventTargetTypeFilter, {nullable:true})
    _min?: NestedEnumEventTargetTypeFilter;

    @Field(() => NestedEnumEventTargetTypeFilter, {nullable:true})
    _max?: NestedEnumEventTargetTypeFilter;
}
