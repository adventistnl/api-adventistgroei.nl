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
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { ChurchNullableScalarRelationFilter } from '../church/church-nullable-scalar-relation-filter.input';
import { SubsidyStatusScalarRelationFilter } from '../subsidy-status/subsidy-status-scalar-relation-filter.input';
import { SubsidyRequestItemListRelationFilter } from '../subsidy-request-item/subsidy-request-item-list-relation-filter.input';
import { ProjectScalarRelationFilter } from '../project/project-scalar-relation-filter.input';
import { SubsidyReceiptListRelationFilter } from '../subsidy-receipt/subsidy-receipt-list-relation-filter.input';
import { SubsidyStatusHistoryListRelationFilter } from '../subsidy-status-history/subsidy-status-history-list-relation-filter.input';

@InputType()
export class SubsidyRequestWhereInput {

    @Field(() => [SubsidyRequestWhereInput], {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    AND?: Array<SubsidyRequestWhereInput>;

    @Field(() => [SubsidyRequestWhereInput], {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    OR?: Array<SubsidyRequestWhereInput>;

    @Field(() => [SubsidyRequestWhereInput], {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    NOT?: Array<SubsidyRequestWhereInput>;

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

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    requester?: UserScalarRelationFilter;

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentScalarRelationFilter)
    department?: DepartmentScalarRelationFilter;

    @Field(() => ChurchNullableScalarRelationFilter, {nullable:true})
    @Type(() => ChurchNullableScalarRelationFilter)
    church?: ChurchNullableScalarRelationFilter;

    @Field(() => SubsidyStatusScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyStatusScalarRelationFilter)
    subsidy_status?: SubsidyStatusScalarRelationFilter;

    @Field(() => SubsidyRequestItemListRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestItemListRelationFilter)
    items?: SubsidyRequestItemListRelationFilter;

    @Field(() => ProjectScalarRelationFilter, {nullable:true})
    @Type(() => ProjectScalarRelationFilter)
    project?: ProjectScalarRelationFilter;

    @Field(() => SubsidyReceiptListRelationFilter, {nullable:true})
    @Type(() => SubsidyReceiptListRelationFilter)
    subsidy_receipts?: SubsidyReceiptListRelationFilter;

    @Field(() => SubsidyStatusHistoryListRelationFilter, {nullable:true})
    @Type(() => SubsidyStatusHistoryListRelationFilter)
    status_history?: SubsidyStatusHistoryListRelationFilter;
}
