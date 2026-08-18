import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ContactCreateNestedOneWithoutInstitutionInput } from '../contact/contact-create-nested-one-without-institution.input';
import { Type } from 'class-transformer';
import { ChurchCreateNestedManyWithoutInstitutionInput } from '../church/church-create-nested-many-without-institution.input';
import { DepartmentCreateNestedManyWithoutInstitutionInput } from '../department/department-create-nested-many-without-institution.input';
import { UserCreateNestedManyWithoutInstitutionInput } from '../user/user-create-nested-many-without-institution.input';
import { NotificationCreateNestedManyWithoutInstitutionInput } from '../notification/notification-create-nested-many-without-institution.input';
import { SettingCreateNestedManyWithoutInstitutionInput } from '../setting/setting-create-nested-many-without-institution.input';
import { ProjectCreateNestedManyWithoutInstitutionInput } from '../project/project-create-nested-many-without-institution.input';
import { DirectMessageCreateNestedManyWithoutInstitutionInput } from '../direct-message/direct-message-create-nested-many-without-institution.input';
import { SubsidyRequestCreateNestedManyWithoutInstitutionInput } from '../subsidy-request/subsidy-request-create-nested-many-without-institution.input';
import { AnnualBudgetCreateNestedManyWithoutInstitutionInput } from '../annual-budget/annual-budget-create-nested-many-without-institution.input';
import { InstitutionPositionCreateNestedManyWithoutInstitutionInput } from '../institution-position/institution-position-create-nested-many-without-institution.input';
import { AvailabilityCreateNestedManyWithoutInstitutionInput } from '../availability/availability-create-nested-many-without-institution.input';
import { AvailabilityRecurrenceRuleCreateNestedManyWithoutInstitutionInput } from '../availability-recurrence-rule/availability-recurrence-rule-create-nested-many-without-institution.input';
import { ChurchServiceCalendarCreateNestedManyWithoutInstitutionInput } from '../church-service-calendar/church-service-calendar-create-nested-many-without-institution.input';
import { AssignmentCreateNestedManyWithoutInstitutionInput } from '../assignment/assignment-create-nested-many-without-institution.input';
import { GapReportSnapshotCreateNestedManyWithoutInstitutionInput } from '../gap-report-snapshot/gap-report-snapshot-create-nested-many-without-institution.input';

@InputType()
export class InstitutionCreateWithoutCommunicationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    denomination!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => ContactCreateNestedOneWithoutInstitutionInput, {nullable:true})
    @Type(() => ContactCreateNestedOneWithoutInstitutionInput)
    contact?: ContactCreateNestedOneWithoutInstitutionInput;

    @Field(() => ChurchCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => ChurchCreateNestedManyWithoutInstitutionInput)
    churches?: ChurchCreateNestedManyWithoutInstitutionInput;

    @Field(() => DepartmentCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => DepartmentCreateNestedManyWithoutInstitutionInput)
    departments?: DepartmentCreateNestedManyWithoutInstitutionInput;

    @Field(() => UserCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutInstitutionInput)
    users?: UserCreateNestedManyWithoutInstitutionInput;

    @Field(() => NotificationCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => NotificationCreateNestedManyWithoutInstitutionInput)
    notifications?: NotificationCreateNestedManyWithoutInstitutionInput;

    @Field(() => SettingCreateNestedManyWithoutInstitutionInput, {nullable:true})
    settings?: SettingCreateNestedManyWithoutInstitutionInput;

    @Field(() => ProjectCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => ProjectCreateNestedManyWithoutInstitutionInput)
    projects?: ProjectCreateNestedManyWithoutInstitutionInput;

    @Field(() => DirectMessageCreateNestedManyWithoutInstitutionInput, {nullable:true})
    direct_messages?: DirectMessageCreateNestedManyWithoutInstitutionInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutInstitutionInput)
    subsidy_requests?: SubsidyRequestCreateNestedManyWithoutInstitutionInput;

    @Field(() => AnnualBudgetCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => AnnualBudgetCreateNestedManyWithoutInstitutionInput)
    annual_budgets?: AnnualBudgetCreateNestedManyWithoutInstitutionInput;

    @Field(() => InstitutionPositionCreateNestedManyWithoutInstitutionInput, {nullable:true})
    positions?: InstitutionPositionCreateNestedManyWithoutInstitutionInput;

    @Field(() => AvailabilityCreateNestedManyWithoutInstitutionInput, {nullable:true})
    availabilities?: AvailabilityCreateNestedManyWithoutInstitutionInput;

    @Field(() => AvailabilityRecurrenceRuleCreateNestedManyWithoutInstitutionInput, {nullable:true})
    availability_recurrence_rules?: AvailabilityRecurrenceRuleCreateNestedManyWithoutInstitutionInput;

    @Field(() => ChurchServiceCalendarCreateNestedManyWithoutInstitutionInput, {nullable:true})
    church_service_calendar_entries?: ChurchServiceCalendarCreateNestedManyWithoutInstitutionInput;

    @Field(() => AssignmentCreateNestedManyWithoutInstitutionInput, {nullable:true})
    assignments?: AssignmentCreateNestedManyWithoutInstitutionInput;

    @Field(() => GapReportSnapshotCreateNestedManyWithoutInstitutionInput, {nullable:true})
    gap_report_snapshots?: GapReportSnapshotCreateNestedManyWithoutInstitutionInput;
}
