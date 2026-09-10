import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumRecurrenceTypeWithAggregatesFilter } from '../prisma/enum-recurrence-type-with-aggregates-filter.input';
import { EnumAvailabilityStatusWithAggregatesFilter } from '../prisma/enum-availability-status-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput {

    @Field(() => [AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput>;

    @Field(() => [AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput>;

    @Field(() => [AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    institution_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => EnumRecurrenceTypeWithAggregatesFilter, {nullable:true})
    type?: EnumRecurrenceTypeWithAggregatesFilter;

    @Field(() => EnumAvailabilityStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAvailabilityStatusWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    day_of_week?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    start_date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    end_date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    effective_from?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    effective_until?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    note?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    updated_by?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_deleted?: BoolWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deleted_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    deleted_by?: StringNullableWithAggregatesFilter;
}
