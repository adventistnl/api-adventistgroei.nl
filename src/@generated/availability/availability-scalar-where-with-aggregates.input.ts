import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumAvailabilityStatusWithAggregatesFilter } from '../prisma/enum-availability-status-with-aggregates-filter.input';
import { EnumAvailabilitySourceWithAggregatesFilter } from '../prisma/enum-availability-source-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class AvailabilityScalarWhereWithAggregatesInput {

    @Field(() => [AvailabilityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AvailabilityScalarWhereWithAggregatesInput>;

    @Field(() => [AvailabilityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AvailabilityScalarWhereWithAggregatesInput>;

    @Field(() => [AvailabilityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AvailabilityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    institution_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => EnumAvailabilityStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAvailabilityStatusWithAggregatesFilter;

    @Field(() => EnumAvailabilitySourceWithAggregatesFilter, {nullable:true})
    source?: EnumAvailabilitySourceWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    recurrence_rule_id?: StringNullableWithAggregatesFilter;

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
