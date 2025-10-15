import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGenderTypeNullableFilter } from '../prisma/enum-gender-type-nullable-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ContactNullableScalarRelationFilter } from '../contact/contact-nullable-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { ChurchScalarRelationFilter } from '../church/church-scalar-relation-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { UserRoleListRelationFilter } from '../user-role/user-role-list-relation-filter.input';
import { DirectMessageListRelationFilter } from '../direct-message/direct-message-list-relation-filter.input';
import { DirectMessageRecipientListRelationFilter } from '../direct-message-recipient/direct-message-recipient-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';
import { EventRegistrationListRelationFilter } from '../event-registration/event-registration-list-relation-filter.input';
import { EventRecipientListRelationFilter } from '../event-recipient/event-recipient-list-relation-filter.input';
import { CommunicationListRelationFilter } from '../communication/communication-list-relation-filter.input';
import { SubsidyRequestListRelationFilter } from '../subsidy-request/subsidy-request-list-relation-filter.input';
import { SubsidyStatusListRelationFilter } from '../subsidy-status/subsidy-status-list-relation-filter.input';
import { VoluntariesOnProjectsListRelationFilter } from '../voluntaries-on-projects/voluntaries-on-projects-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { AnnualBudgetListRelationFilter } from '../annual-budget/annual-budget-list-relation-filter.input';
import { ProjectActivityListRelationFilter } from '../project-activity/project-activity-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => EnumGenderTypeNullableFilter, {nullable:true})
    gender?: EnumGenderTypeNullableFilter;

    @Field(() => EnumLanguagePreferenceFilter, {nullable:true})
    language_preference?: EnumLanguagePreferenceFilter;

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
    contact_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    church_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    department_id?: StringFilter;

    @Field(() => ContactNullableScalarRelationFilter, {nullable:true})
    @Type(() => ContactNullableScalarRelationFilter)
    contact?: ContactNullableScalarRelationFilter;

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;

    @Field(() => ChurchScalarRelationFilter, {nullable:true})
    @Type(() => ChurchScalarRelationFilter)
    church?: ChurchScalarRelationFilter;

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentScalarRelationFilter)
    department?: DepartmentScalarRelationFilter;

    @Field(() => UserRoleListRelationFilter, {nullable:true})
    user_roles?: UserRoleListRelationFilter;

    @Field(() => DirectMessageListRelationFilter, {nullable:true})
    direct_messages?: DirectMessageListRelationFilter;

    @Field(() => DirectMessageRecipientListRelationFilter, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;

    @Field(() => EventRegistrationListRelationFilter, {nullable:true})
    @Type(() => EventRegistrationListRelationFilter)
    event_registrations?: EventRegistrationListRelationFilter;

    @Field(() => EventRecipientListRelationFilter, {nullable:true})
    @Type(() => EventRecipientListRelationFilter)
    event_recipients?: EventRecipientListRelationFilter;

    @Field(() => CommunicationListRelationFilter, {nullable:true})
    communications?: CommunicationListRelationFilter;

    @Field(() => SubsidyRequestListRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestListRelationFilter)
    SubsidyRequest?: SubsidyRequestListRelationFilter;

    @Field(() => SubsidyStatusListRelationFilter, {nullable:true})
    @Type(() => SubsidyStatusListRelationFilter)
    SubsidyStatus?: SubsidyStatusListRelationFilter;

    @Field(() => VoluntariesOnProjectsListRelationFilter, {nullable:true})
    @Type(() => VoluntariesOnProjectsListRelationFilter)
    voluntary_projects?: VoluntariesOnProjectsListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    @Type(() => ProjectListRelationFilter)
    Project?: ProjectListRelationFilter;

    @Field(() => AnnualBudgetListRelationFilter, {nullable:true})
    @Type(() => AnnualBudgetListRelationFilter)
    approved_annual_budgets?: AnnualBudgetListRelationFilter;

    @Field(() => ProjectActivityListRelationFilter, {nullable:true})
    @Type(() => ProjectActivityListRelationFilter)
    project_activities?: ProjectActivityListRelationFilter;
}
