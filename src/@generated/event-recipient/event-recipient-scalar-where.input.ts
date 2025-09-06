import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEventTargetTypeFilter } from '../prisma/enum-event-target-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class EventRecipientScalarWhereInput {

    @Field(() => [EventRecipientScalarWhereInput], {nullable:true})
    AND?: Array<EventRecipientScalarWhereInput>;

    @Field(() => [EventRecipientScalarWhereInput], {nullable:true})
    OR?: Array<EventRecipientScalarWhereInput>;

    @Field(() => [EventRecipientScalarWhereInput], {nullable:true})
    NOT?: Array<EventRecipientScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    event_id?: StringFilter;

    @Field(() => EnumEventTargetTypeFilter, {nullable:true})
    target_type?: EnumEventTargetTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    target_id?: StringFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}
