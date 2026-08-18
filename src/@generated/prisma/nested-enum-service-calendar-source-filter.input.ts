import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCalendarSource } from './service-calendar-source.enum';

@InputType()
export class NestedEnumServiceCalendarSourceFilter {

    @Field(() => ServiceCalendarSource, {nullable:true})
    equals?: `${ServiceCalendarSource}`;

    @Field(() => [ServiceCalendarSource], {nullable:true})
    in?: Array<`${ServiceCalendarSource}`>;

    @Field(() => [ServiceCalendarSource], {nullable:true})
    notIn?: Array<`${ServiceCalendarSource}`>;

    @Field(() => NestedEnumServiceCalendarSourceFilter, {nullable:true})
    not?: NestedEnumServiceCalendarSourceFilter;
}
