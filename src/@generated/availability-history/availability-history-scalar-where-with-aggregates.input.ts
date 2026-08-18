import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AvailabilityHistoryScalarWhereWithAggregatesInput {

    @Field(() => [AvailabilityHistoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AvailabilityHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [AvailabilityHistoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AvailabilityHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [AvailabilityHistoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AvailabilityHistoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    availability_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    field_name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    old_value?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    new_value?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    changed_by?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    changed_at?: DateTimeWithAggregatesFilter;
}
