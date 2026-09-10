import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCalendarSource } from './service-calendar-source.enum';
import { NestedEnumServiceCalendarSourceFilter } from './nested-enum-service-calendar-source-filter.input';

@InputType()
export class EnumServiceCalendarSourceFilter {

    @Field(() => ServiceCalendarSource, {nullable:true})
    equals?: `${ServiceCalendarSource}`;

    @Field(() => [ServiceCalendarSource], {nullable:true})
    in?: Array<`${ServiceCalendarSource}`>;

    @Field(() => [ServiceCalendarSource], {nullable:true})
    notIn?: Array<`${ServiceCalendarSource}`>;

    @Field(() => NestedEnumServiceCalendarSourceFilter, {nullable:true})
    not?: NestedEnumServiceCalendarSourceFilter;
}
