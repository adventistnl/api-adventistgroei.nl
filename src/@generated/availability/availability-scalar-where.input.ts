import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAvailabilityStatusFilter } from '../prisma/enum-availability-status-filter.input';
import { EnumAvailabilitySourceFilter } from '../prisma/enum-availability-source-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class AvailabilityScalarWhereInput {

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    AND?: Array<AvailabilityScalarWhereInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    OR?: Array<AvailabilityScalarWhereInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    NOT?: Array<AvailabilityScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => EnumAvailabilityStatusFilter, {nullable:true})
    status?: EnumAvailabilityStatusFilter;

    @Field(() => EnumAvailabilitySourceFilter, {nullable:true})
    source?: EnumAvailabilitySourceFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recurrence_rule_id?: StringNullableFilter;

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
}
