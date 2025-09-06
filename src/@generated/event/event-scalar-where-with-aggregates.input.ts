import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEventTargetTypeWithAggregatesFilter } from '../prisma/enum-event-target-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumEventTypeWithAggregatesFilter } from '../prisma/enum-event-type-with-aggregates-filter.input';
import { EnumLanguagePreferenceWithAggregatesFilter } from '../prisma/enum-language-preference-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class EventScalarWhereWithAggregatesInput {

    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => EventScalarWhereWithAggregatesInput)
    AND?: Array<EventScalarWhereWithAggregatesInput>;

    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => EventScalarWhereWithAggregatesInput)
    OR?: Array<EventScalarWhereWithAggregatesInput>;

    @Field(() => [EventScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => EventScalarWhereWithAggregatesInput)
    NOT?: Array<EventScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumEventTargetTypeWithAggregatesFilter, {nullable:true})
    target_type?: EnumEventTargetTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    target_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    contact_id?: StringWithAggregatesFilter;

    @Field(() => EnumEventTypeWithAggregatesFilter, {nullable:true})
    type?: EnumEventTypeWithAggregatesFilter;

    @Field(() => EnumLanguagePreferenceWithAggregatesFilter, {nullable:true})
    language_preference?: EnumLanguagePreferenceWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    max_participants?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    ticket_amount?: DecimalWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    subscription_expires_at?: DateTimeWithAggregatesFilter;

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
