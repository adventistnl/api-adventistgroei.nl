import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCalendarSource } from './service-calendar-source.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumServiceCalendarSourceFilter } from './nested-enum-service-calendar-source-filter.input';

@InputType()
export class NestedEnumServiceCalendarSourceWithAggregatesFilter {

    @Field(() => ServiceCalendarSource, {nullable:true})
    equals?: `${ServiceCalendarSource}`;

    @Field(() => [ServiceCalendarSource], {nullable:true})
    in?: Array<`${ServiceCalendarSource}`>;

    @Field(() => [ServiceCalendarSource], {nullable:true})
    notIn?: Array<`${ServiceCalendarSource}`>;

    @Field(() => NestedEnumServiceCalendarSourceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumServiceCalendarSourceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumServiceCalendarSourceFilter, {nullable:true})
    _min?: NestedEnumServiceCalendarSourceFilter;

    @Field(() => NestedEnumServiceCalendarSourceFilter, {nullable:true})
    _max?: NestedEnumServiceCalendarSourceFilter;
}
