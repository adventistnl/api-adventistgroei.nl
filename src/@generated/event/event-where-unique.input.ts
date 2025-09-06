import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EnumEventTargetTypeFilter } from '../prisma/enum-event-target-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEventTypeFilter } from '../prisma/enum-event-type-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ContactScalarRelationFilter } from '../contact/contact-scalar-relation-filter.input';
import { EventRecipientListRelationFilter } from '../event-recipient/event-recipient-list-relation-filter.input';
import { EventRegistrationListRelationFilter } from '../event-registration/event-registration-list-relation-filter.input';

@InputType()
export class EventWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [EventWhereInput], {nullable:true})
    @Type(() => EventWhereInput)
    AND?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    @Type(() => EventWhereInput)
    OR?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    @Type(() => EventWhereInput)
    NOT?: Array<EventWhereInput>;

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

    @Field(() => ContactScalarRelationFilter, {nullable:true})
    @Type(() => ContactScalarRelationFilter)
    contact?: ContactScalarRelationFilter;

    @Field(() => EventRecipientListRelationFilter, {nullable:true})
    @Type(() => EventRecipientListRelationFilter)
    event_recipients?: EventRecipientListRelationFilter;

    @Field(() => EventRegistrationListRelationFilter, {nullable:true})
    @Type(() => EventRegistrationListRelationFilter)
    event_registrations?: EventRegistrationListRelationFilter;
}
