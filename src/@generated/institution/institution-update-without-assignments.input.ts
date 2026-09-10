import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumLanguagePreferenceFieldUpdateOperationsInput } from '../prisma/enum-language-preference-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ContactUpdateOneWithoutInstitutionNestedInput } from '../contact/contact-update-one-without-institution-nested.input';
import { Type } from 'class-transformer';
import { ChurchUpdateManyWithoutInstitutionNestedInput } from '../church/church-update-many-without-institution-nested.input';
import { DepartmentUpdateManyWithoutInstitutionNestedInput } from '../department/department-update-many-without-institution-nested.input';
import { UserUpdateManyWithoutInstitutionNestedInput } from '../user/user-update-many-without-institution-nested.input';
import { CommunicationUpdateManyWithoutInstitutionNestedInput } from '../communication/communication-update-many-without-institution-nested.input';
import { NotificationUpdateManyWithoutInstitutionNestedInput } from '../notification/notification-update-many-without-institution-nested.input';
import { SettingUpdateManyWithoutInstitutionNestedInput } from '../setting/setting-update-many-without-institution-nested.input';
import { ProjectUpdateManyWithoutInstitutionNestedInput } from '../project/project-update-many-without-institution-nested.input';
import { DirectMessageUpdateManyWithoutInstitutionNestedInput } from '../direct-message/direct-message-update-many-without-institution-nested.input';
import { SubsidyRequestUpdateManyWithoutInstitutionNestedInput } from '../subsidy-request/subsidy-request-update-many-without-institution-nested.input';
import { AnnualBudgetUpdateManyWithoutInstitutionNestedInput } from '../annual-budget/annual-budget-update-many-without-institution-nested.input';
import { InstitutionPositionUpdateManyWithoutInstitutionNestedInput } from '../institution-position/institution-position-update-many-without-institution-nested.input';
import { AvailabilityUpdateManyWithoutInstitutionNestedInput } from '../availability/availability-update-many-without-institution-nested.input';
import { AvailabilityRecurrenceRuleUpdateManyWithoutInstitutionNestedInput } from '../availability-recurrence-rule/availability-recurrence-rule-update-many-without-institution-nested.input';
import { ChurchServiceCalendarUpdateManyWithoutInstitutionNestedInput } from '../church-service-calendar/church-service-calendar-update-many-without-institution-nested.input';
import { GapReportSnapshotUpdateManyWithoutInstitutionNestedInput } from '../gap-report-snapshot/gap-report-snapshot-update-many-without-institution-nested.input';
import { AssignmentRequestUpdateManyWithoutInstitutionNestedInput } from '../assignment-request/assignment-request-update-many-without-institution-nested.input';
import { PreacherRegionAccessUpdateManyWithoutInstitutionNestedInput } from '../preacher-region-access/preacher-region-access-update-many-without-institution-nested.input';
import { AssignmentInviteTemplateUpdateManyWithoutInstitutionNestedInput } from '../assignment-invite-template/assignment-invite-template-update-many-without-institution-nested.input';

@InputType()
export class InstitutionUpdateWithoutAssignmentsInput {

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

    @Field(() => ContactUpdateOneWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => ContactUpdateOneWithoutInstitutionNestedInput)
    contact?: ContactUpdateOneWithoutInstitutionNestedInput;

    @Field(() => ChurchUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => ChurchUpdateManyWithoutInstitutionNestedInput)
    churches?: ChurchUpdateManyWithoutInstitutionNestedInput;

    @Field(() => DepartmentUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateManyWithoutInstitutionNestedInput)
    departments?: DepartmentUpdateManyWithoutInstitutionNestedInput;

    @Field(() => UserUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => UserUpdateManyWithoutInstitutionNestedInput)
    users?: UserUpdateManyWithoutInstitutionNestedInput;

    @Field(() => CommunicationUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    communications?: CommunicationUpdateManyWithoutInstitutionNestedInput;

    @Field(() => NotificationUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => NotificationUpdateManyWithoutInstitutionNestedInput)
    notifications?: NotificationUpdateManyWithoutInstitutionNestedInput;

    @Field(() => SettingUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    settings?: SettingUpdateManyWithoutInstitutionNestedInput;

    @Field(() => ProjectUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => ProjectUpdateManyWithoutInstitutionNestedInput)
    projects?: ProjectUpdateManyWithoutInstitutionNestedInput;

    @Field(() => DirectMessageUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    direct_messages?: DirectMessageUpdateManyWithoutInstitutionNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutInstitutionNestedInput)
    subsidy_requests?: SubsidyRequestUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AnnualBudgetUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateManyWithoutInstitutionNestedInput)
    annual_budgets?: AnnualBudgetUpdateManyWithoutInstitutionNestedInput;

    @Field(() => InstitutionPositionUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    positions?: InstitutionPositionUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AvailabilityUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    availabilities?: AvailabilityUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AvailabilityRecurrenceRuleUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    availability_recurrence_rules?: AvailabilityRecurrenceRuleUpdateManyWithoutInstitutionNestedInput;

    @Field(() => ChurchServiceCalendarUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    church_service_calendar_entries?: ChurchServiceCalendarUpdateManyWithoutInstitutionNestedInput;

    @Field(() => GapReportSnapshotUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    gap_report_snapshots?: GapReportSnapshotUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AssignmentRequestUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    assignment_requests?: AssignmentRequestUpdateManyWithoutInstitutionNestedInput;

    @Field(() => PreacherRegionAccessUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    preacher_region_access?: PreacherRegionAccessUpdateManyWithoutInstitutionNestedInput;

    @Field(() => AssignmentInviteTemplateUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    assignment_invite_templates?: AssignmentInviteTemplateUpdateManyWithoutInstitutionNestedInput;
}
