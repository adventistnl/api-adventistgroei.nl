import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { EnumProjectTypeFilter } from '../prisma/enum-project-type-filter.input';
import { EnumProjectStatusFilter } from '../prisma/enum-project-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { DepartmentNullableScalarRelationFilter } from '../department/department-nullable-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { EventNullableScalarRelationFilter } from '../event/event-nullable-scalar-relation-filter.input';
import { InstitutionNullableScalarRelationFilter } from '../institution/institution-nullable-scalar-relation-filter.input';
import { ChurchNullableScalarRelationFilter } from '../church/church-nullable-scalar-relation-filter.input';
import { VoluntariesOnProjectsListRelationFilter } from '../voluntaries-on-projects/voluntaries-on-projects-list-relation-filter.input';
import { ProjectActivityListRelationFilter } from '../project-activity/project-activity-list-relation-filter.input';
import { SubsidyRequestListRelationFilter } from '../subsidy-request/subsidy-request-list-relation-filter.input';
import { SpecialProjectsListRelationFilter } from '../special-projects/special-projects-list-relation-filter.input';
import { ProjectHistoryListRelationFilter } from '../project-history/project-history-list-relation-filter.input';
import { BudgetTransactionListRelationFilter } from '../budget-transaction/budget-transaction-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class ProjectWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProjectWhereInput], {nullable:true})
    @Type(() => ProjectWhereInput)
    AND?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    @Type(() => ProjectWhereInput)
    OR?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    @Type(() => ProjectWhereInput)
    NOT?: Array<ProjectWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    department_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    church_department_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    budget?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    subsidized_budget?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    balance?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    owner_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    co_owner_id?: StringNullableFilter;

    @Field(() => EnumLanguagePreferenceFilter, {nullable:true})
    language_preference?: EnumLanguagePreferenceFilter;

    @Field(() => EnumProjectTypeFilter, {nullable:true})
    type?: EnumProjectTypeFilter;

    @Field(() => EnumProjectStatusFilter, {nullable:true})
    status?: EnumProjectStatusFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_private?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    required_volunteers?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    start_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    end_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deadline?: DateTimeNullableFilter;

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
    event_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    institution_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    church_id?: StringNullableFilter;

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentScalarRelationFilter)
    department?: DepartmentScalarRelationFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentNullableScalarRelationFilter)
    church_department?: DepartmentNullableScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    owner?: UserScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    @Type(() => UserNullableScalarRelationFilter)
    co_owner?: UserNullableScalarRelationFilter;

    @Field(() => EventNullableScalarRelationFilter, {nullable:true})
    @Type(() => EventNullableScalarRelationFilter)
    event?: EventNullableScalarRelationFilter;

    @Field(() => InstitutionNullableScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionNullableScalarRelationFilter)
    Institution?: InstitutionNullableScalarRelationFilter;

    @Field(() => ChurchNullableScalarRelationFilter, {nullable:true})
    @Type(() => ChurchNullableScalarRelationFilter)
    church?: ChurchNullableScalarRelationFilter;

    @Field(() => VoluntariesOnProjectsListRelationFilter, {nullable:true})
    @Type(() => VoluntariesOnProjectsListRelationFilter)
    voluntary_users?: VoluntariesOnProjectsListRelationFilter;

    @Field(() => ProjectActivityListRelationFilter, {nullable:true})
    @Type(() => ProjectActivityListRelationFilter)
    activities?: ProjectActivityListRelationFilter;

    @Field(() => SubsidyRequestListRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestListRelationFilter)
    subsidies?: SubsidyRequestListRelationFilter;

    @Field(() => SpecialProjectsListRelationFilter, {nullable:true})
    @Type(() => SpecialProjectsListRelationFilter)
    special_projects?: SpecialProjectsListRelationFilter;

    @Field(() => ProjectHistoryListRelationFilter, {nullable:true})
    @Type(() => ProjectHistoryListRelationFilter)
    history?: ProjectHistoryListRelationFilter;

    @Field(() => BudgetTransactionListRelationFilter, {nullable:true})
    @Type(() => BudgetTransactionListRelationFilter)
    budget_transactions?: BudgetTransactionListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    @Type(() => NotificationListRelationFilter)
    notifications?: NotificationListRelationFilter;
}
