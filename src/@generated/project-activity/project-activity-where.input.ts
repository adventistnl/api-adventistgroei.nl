import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumActivityTagsNullableListFilter } from '../prisma/enum-activity-tags-nullable-list-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumActivityStatusFilter } from '../prisma/enum-activity-status-filter.input';
import { EnumActivityPriorityFilter } from '../prisma/enum-activity-priority-filter.input';
import { SubsidyRequestItemListRelationFilter } from '../subsidy-request-item/subsidy-request-item-list-relation-filter.input';
import { ProjectScalarRelationFilter } from '../project/project-scalar-relation-filter.input';
import { SubsidyReceiptListRelationFilter } from '../subsidy-receipt/subsidy-receipt-list-relation-filter.input';
import { ActivityDocumentsListRelationFilter } from '../activity-documents/activity-documents-list-relation-filter.input';
import { ActivityFundingNullableScalarRelationFilter } from '../activity-funding/activity-funding-nullable-scalar-relation-filter.input';
import { ProjectActivityLogListRelationFilter } from '../project-activity-log/project-activity-log-list-relation-filter.input';
import { ProjectActivityAssigneeListRelationFilter } from '../project-activity-assignee/project-activity-assignee-list-relation-filter.input';

@InputType()
export class ProjectActivityWhereInput {

    @Field(() => [ProjectActivityWhereInput], {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    AND?: Array<ProjectActivityWhereInput>;

    @Field(() => [ProjectActivityWhereInput], {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    OR?: Array<ProjectActivityWhereInput>;

    @Field(() => [ProjectActivityWhereInput], {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    NOT?: Array<ProjectActivityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    budget_amount?: DecimalFilter;

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

    @Field(() => DateTimeFilter, {nullable:true})
    deadline?: DateTimeFilter;

    @Field(() => EnumActivityTagsNullableListFilter, {nullable:true})
    tags?: EnumActivityTagsNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    custom_tags?: StringNullableListFilter;

    @Field(() => EnumActivityStatusFilter, {nullable:true})
    status?: EnumActivityStatusFilter;

    @Field(() => EnumActivityPriorityFilter, {nullable:true})
    priority?: EnumActivityPriorityFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_subsidized?: BoolFilter;

    @Field(() => SubsidyRequestItemListRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestItemListRelationFilter)
    subsidy_request_items?: SubsidyRequestItemListRelationFilter;

    @Field(() => ProjectScalarRelationFilter, {nullable:true})
    @Type(() => ProjectScalarRelationFilter)
    project?: ProjectScalarRelationFilter;

    @Field(() => SubsidyReceiptListRelationFilter, {nullable:true})
    @Type(() => SubsidyReceiptListRelationFilter)
    subsidy_receipts?: SubsidyReceiptListRelationFilter;

    @Field(() => ActivityDocumentsListRelationFilter, {nullable:true})
    @Type(() => ActivityDocumentsListRelationFilter)
    activity_documents?: ActivityDocumentsListRelationFilter;

    @Field(() => ActivityFundingNullableScalarRelationFilter, {nullable:true})
    @Type(() => ActivityFundingNullableScalarRelationFilter)
    activity_funding?: ActivityFundingNullableScalarRelationFilter;

    @Field(() => ProjectActivityLogListRelationFilter, {nullable:true})
    @Type(() => ProjectActivityLogListRelationFilter)
    logs?: ProjectActivityLogListRelationFilter;

    @Field(() => ProjectActivityAssigneeListRelationFilter, {nullable:true})
    @Type(() => ProjectActivityAssigneeListRelationFilter)
    assignees?: ProjectActivityAssigneeListRelationFilter;
}
