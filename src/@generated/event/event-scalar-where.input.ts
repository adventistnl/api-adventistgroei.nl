import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEventTargetTypeFilter } from '../prisma/enum-event-target-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumEventTypeFilter } from '../prisma/enum-event-type-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class EventScalarWhereInput {

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    AND?: Array<EventScalarWhereInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    OR?: Array<EventScalarWhereInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    NOT?: Array<EventScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumEventTargetTypeFilter, {nullable:true})
    target_type?: EnumEventTargetTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    target_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    contact_id?: StringFilter;

    @Field(() => EnumEventTypeFilter, {nullable:true})
    type?: EnumEventTypeFilter;

    @Field(() => EnumLanguagePreferenceFilter, {nullable:true})
    language_preference?: EnumLanguagePreferenceFilter;

    @Field(() => IntFilter, {nullable:true})
    max_participants?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    ticket_amount?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    subscription_expires_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updated_by?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_deleted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deleted_by?: StringNullableFilter;
}
