import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurrenceType } from './recurrence-type.enum';
import { NestedEnumRecurrenceTypeWithAggregatesFilter } from './nested-enum-recurrence-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRecurrenceTypeFilter } from './nested-enum-recurrence-type-filter.input';

@InputType()
export class EnumRecurrenceTypeWithAggregatesFilter {

    @Field(() => RecurrenceType, {nullable:true})
    equals?: `${RecurrenceType}`;

    @Field(() => [RecurrenceType], {nullable:true})
    in?: Array<`${RecurrenceType}`>;

    @Field(() => [RecurrenceType], {nullable:true})
    notIn?: Array<`${RecurrenceType}`>;

    @Field(() => NestedEnumRecurrenceTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRecurrenceTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRecurrenceTypeFilter, {nullable:true})
    _min?: NestedEnumRecurrenceTypeFilter;

    @Field(() => NestedEnumRecurrenceTypeFilter, {nullable:true})
    _max?: NestedEnumRecurrenceTypeFilter;
}
