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
import { DepartmentUncheckedUpdateManyWithoutInstitutionNestedInput } from '../department/department-unchecked-update-many-without-institution-nested.input';
import { UserUncheckedUpdateManyWithoutInstitutionNestedInput } from '../user/user-unchecked-update-many-without-institution-nested.input';
import { CommunicationUncheckedUpdateManyWithoutInstitutionNestedInput } from '../communication/communication-unchecked-update-many-without-institution-nested.input';
import { NotificationUncheckedUpdateManyWithoutInstitutionNestedInput } from '../notification/notification-unchecked-update-many-without-institution-nested.input';
import { ProjectUncheckedUpdateManyWithoutInstitutionNestedInput } from '../project/project-unchecked-update-many-without-institution-nested.input';
import { DirectMessageUncheckedUpdateManyWithoutInstitutionNestedInput } from '../direct-message/direct-message-unchecked-update-many-without-institution-nested.input';
import { SubsidyRequestUncheckedUpdateManyWithoutInstitutionNestedInput } from '../subsidy-request/subsidy-request-unchecked-update-many-without-institution-nested.input';
import { AnnualBudgetUncheckedUpdateManyWithoutInstitutionNestedInput } from '../annual-budget/annual-budget-unchecked-update-many-without-institution-nested.input';
import { InstitutionPositionUncheckedUpdateManyWithoutInstitutionNestedInput } from '../institution-position/institution-position-unchecked-update-many-without-institution-nested.input';
import { AvailabilityUncheckedUpdateManyWithoutInstitutionNestedInput } from '../availability/availability-unchecked-update-many-without-institution-nested.input';
import { AvailabilityRecurrenceRuleUncheckedUpdateManyWithoutInstitutionNestedInput } from '../availability-recurrence-rule/availability-recurrence-rule-unchecked-update-many-without-institution-nested.input';
import { ChurchServiceCalendarUncheckedUpdateManyWithoutInstitutionNestedInput } from '../church-service-calendar/church-service-calendar-unchecked-update-many-without-institution-nested.input';

@InputType()
export class InstitutionUncheckedUpdateWithoutSettingsInput {

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

    @Field(() => DepartmentUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => DepartmentUncheckedUpdateManyWithoutInstitutionNestedInput)
    departments?: DepartmentUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateManyWithoutInstitutionNestedInput)
    users?: UserUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => CommunicationUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    communications?: CommunicationUncheckedUpdateManyWithoutInstitutionNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => NotificationUncheckedUpdateManyWithoutInstitutionNestedInput)
    notifications?: NotificationUncheckedUpdateManyWithoutInstitutionNestedInput;

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
}
