import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumSubsidyRequestPriorityFilter } from '../prisma/enum-subsidy-request-priority-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { EnumSubsidyRequestTypeFilter } from '../prisma/enum-subsidy-request-type-filter.input';
import { EnumRefundTypeNullableFilter } from '../prisma/enum-refund-type-nullable-filter.input';

@InputType()
export class SubsidyRequestScalarWhereInput {

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    AND?: Array<SubsidyRequestScalarWhereInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    OR?: Array<SubsidyRequestScalarWhereInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    NOT?: Array<SubsidyRequestScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    total_budget?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    approved_amount?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    rejection_reason?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    approved_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updated_by?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    approved_by?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_deleted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deleted_by?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    requester_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    department_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    church_id?: StringNullableFilter;

    @Field(() => EnumSubsidyRequestPriorityFilter, {nullable:true})
    priority?: EnumSubsidyRequestPriorityFilter;

    @Field(() => StringFilter, {nullable:true})
    subsidy_statuses_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_for_advance?: BoolFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    advance_amount?: DecimalNullableFilter;

    @Field(() => EnumSubsidyRequestTypeFilter, {nullable:true})
    request_type?: EnumSubsidyRequestTypeFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    refund_amount?: DecimalFilter;

    @Field(() => BoolFilter, {nullable:true})
    have_refund?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    refund_done?: BoolFilter;

    @Field(() => EnumRefundTypeNullableFilter, {nullable:true})
    refund_type?: EnumRefundTypeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    refund_rejected?: BoolFilter;
}
