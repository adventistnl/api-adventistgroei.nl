import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumLanguagePreferenceFieldUpdateOperationsInput } from '../prisma/enum-language-preference-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ChurchUncheckedUpdateManyWithoutInstitutionNestedInput } from '../church/church-unchecked-update-many-without-institution-nested.input';
import { Type } from 'class-transformer';
import { UserUncheckedUpdateManyWithoutInstitutionNestedInput } from '../user/user-unchecked-update-many-without-institution-nested.input';
import { CommunicationUncheckedUpdateManyWithoutInstitutionNestedInput } from '../communication/communication-unchecked-update-many-without-institution-nested.input';
import { NotificationUncheckedUpdateManyWithoutInstitutionNestedInput } from '../notification/notification-unchecked-update-many-without-institution-nested.input';
import { SettingUncheckedUpdateManyWithoutInstitutionNestedInput } from '../setting/setting-unchecked-update-many-without-institution-nested.input';
import { ProjectUncheckedUpdateManyWithoutInstitutionNestedInput } from '../project/project-unchecked-update-many-without-institution-nested.input';
import { DirectMessageUncheckedUpdateManyWithoutInstitutionNestedInput } from '../direct-message/direct-message-unchecked-update-many-without-institution-nested.input';
import { SubsidyRequestUncheckedUpdateManyWithoutInstitutionNestedInput } from '../subsidy-request/subsidy-request-unchecked-update-many-without-institution-nested.input';
import { AnnualBudgetUncheckedUpdateManyWithoutInstitutionNestedInput } from '../annual-budget/annual-budget-unchecked-update-many-without-institution-nested.input';
import { InstitutionPositionUncheckedUpdateManyWithoutInstitutionNestedInput } from '../institution-position/institution-position-unchecked-update-many-without-institution-nested.input';
import { AvailabilityUncheckedUpdateManyWithoutInstitutionNestedInput } from '../availability/availability-unchecked-update-many-without-institution-nested.input';
import { AvailabilityRecurrenceRuleUncheckedUpdateManyWithoutInstitutionNestedInput } from '../availability-recurrence-rule/availability-recurrence-rule-unchecked-update-many-without-institution-nested.input';
import { ChurchServiceCalendarUncheckedUpdateManyWithoutInstitutionNestedInput } from '../church-service-calendar/church-service-calendar-unchecked-update-many-without-institution-nested.input';
import { AssignmentUncheckedUpdateManyWithoutInstitutionNestedInput } from '../assignment/assignment-unchecked-update-many-without-institution-nested.input';
import { GapReportSnapshotUncheckedUpdateManyWithoutInstitutionNestedInput } from '../gap-report-snapshot/gap-report-snapshot-unchecked-update-many-without-institution-nested.input';
import { AssignmentRequestUncheckedUpdateManyWithoutInstitutionNestedInput } from '../assignment-request/assignment-request-unchecked-update-many-without-institution-nested.input';
import { PreacherRegionAccessUncheckedUpdateManyWithoutInstitutionNestedInput } from '../preacher-region-access/preacher-region-access-unchecked-update-many-without-institution-nested.input';
import { AssignmentInviteTemplateUncheckedUpdateManyWithoutInstitutionNestedInput } from '../assignment-invite-template/assignment-invite-template-unchecked-update-many-without-institution-nested.input';

@InputType()
export class InstitutionUncheckedUpdateWithoutDepartmentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    denomination?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumLanguagePreferenceFieldUpdateOperationsInput, {nullable:true})
    language_preference?: EnumLanguagePreferenceFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    contact_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_deleted?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    deleted_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ChurchUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => ChurchUncheckedUpdateManyWithoutInstitutionNestedInput)
    churches?: ChurchUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateManyWithoutInstitutionNestedInput)
    users?: UserUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => CommunicationUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    communications?: CommunicationUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => NotificationUncheckedUpdateManyWithoutInstitutionNestedInput)
    notifications?: NotificationUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => SettingUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    settings?: SettingUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => ProjectUncheckedUpdateManyWithoutInstitutionNestedInput)
    projects?: ProjectUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => DirectMessageUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    direct_messages?: DirectMessageUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => SubsidyRequestUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedUpdateManyWithoutInstitutionNestedInput)
    subsidy_requests?: SubsidyRequestUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AnnualBudgetUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUncheckedUpdateManyWithoutInstitutionNestedInput)
    annual_budgets?: AnnualBudgetUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => InstitutionPositionUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    positions?: InstitutionPositionUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AvailabilityUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    availabilities?: AvailabilityUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AvailabilityRecurrenceRuleUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    availability_recurrence_rules?: AvailabilityRecurrenceRuleUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => ChurchServiceCalendarUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    church_service_calendar_entries?: ChurchServiceCalendarUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AssignmentUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    assignments?: AssignmentUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => GapReportSnapshotUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    gap_report_snapshots?: GapReportSnapshotUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AssignmentRequestUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    assignment_requests?: AssignmentRequestUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => PreacherRegionAccessUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    preacher_region_access?: PreacherRegionAccessUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AssignmentInviteTemplateUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    assignment_invite_templates?: AssignmentInviteTemplateUncheckedUpdateManyWithoutInstitutionNestedInput;
}
