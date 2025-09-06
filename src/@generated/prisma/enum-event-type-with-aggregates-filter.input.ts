import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventType } from './event-type.enum';
import { NestedEnumEventTypeWithAggregatesFilter } from './nested-enum-event-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEventTypeFilter } from './nested-enum-event-type-filter.input';

@InputType()
export class EnumEventTypeWithAggregatesFilter {

    @Field(() => EventType, {nullable:true})
    equals?: `${EventType}`;

    @Field(() => [EventType], {nullable:true})
    in?: Array<`${EventType}`>;

    @Field(() => [EventType], {nullable:true})
    notIn?: Array<`${EventType}`>;

    @Field(() => NestedEnumEventTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEventTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEventTypeFilter, {nullable:true})
    _min?: NestedEnumEventTypeFilter;

    @Field(() => NestedEnumEventTypeFilter, {nullable:true})
    _max?: NestedEnumEventTypeFilter;
}
