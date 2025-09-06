import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEventTargetTypeWithAggregatesFilter } from '../prisma/enum-event-target-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class EventRecipientScalarWhereWithAggregatesInput {

    @Field(() => [EventRecipientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EventRecipientScalarWhereWithAggregatesInput>;

    @Field(() => [EventRecipientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EventRecipientScalarWhereWithAggregatesInput>;

    @Field(() => [EventRecipientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EventRecipientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    event_id?: StringWithAggregatesFilter;

    @Field(() => EnumEventTargetTypeWithAggregatesFilter, {nullable:true})
    target_type?: EnumEventTargetTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    target_id?: StringWithAggregatesFilter;

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

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;
}
