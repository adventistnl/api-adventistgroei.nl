import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumServiceCalendarSourceWithAggregatesFilter } from '../prisma/enum-service-calendar-source-with-aggregates-filter.input';

@InputType()
export class ChurchServiceCalendarScalarWhereWithAggregatesInput {

    @Field(() => [ChurchServiceCalendarScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChurchServiceCalendarScalarWhereWithAggregatesInput>;

    @Field(() => [ChurchServiceCalendarScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChurchServiceCalendarScalarWhereWithAggregatesInput>;

    @Field(() => [ChurchServiceCalendarScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChurchServiceCalendarScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    institution_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    church_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    has_service?: BoolWithAggregatesFilter;

    @Field(() => EnumServiceCalendarSourceWithAggregatesFilter, {nullable:true})
    source?: EnumServiceCalendarSourceWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    updated_by?: StringWithAggregatesFilter;
}
