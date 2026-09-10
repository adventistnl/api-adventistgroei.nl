import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRecurrenceTypeFilter } from '../prisma/enum-recurrence-type-filter.input';
import { EnumAvailabilityStatusFilter } from '../prisma/enum-availability-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { AvailabilityListRelationFilter } from '../availability/availability-list-relation-filter.input';

@InputType()
export class AvailabilityRecurrenceRuleWhereInput {

    @Field(() => [AvailabilityRecurrenceRuleWhereInput], {nullable:true})
    AND?: Array<AvailabilityRecurrenceRuleWhereInput>;

    @Field(() => [AvailabilityRecurrenceRuleWhereInput], {nullable:true})
    OR?: Array<AvailabilityRecurrenceRuleWhereInput>;

    @Field(() => [AvailabilityRecurrenceRuleWhereInput], {nullable:true})
    NOT?: Array<AvailabilityRecurrenceRuleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => EnumRecurrenceTypeFilter, {nullable:true})
    type?: EnumRecurrenceTypeFilter;

    @Field(() => EnumAvailabilityStatusFilter, {nullable:true})
    status?: EnumAvailabilityStatusFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    day_of_week?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    start_date?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    end_date?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    effective_from?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    effective_until?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

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

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;

    @Field(() => AvailabilityListRelationFilter, {nullable:true})
    materialized_availabilities?: AvailabilityListRelationFilter;
}
