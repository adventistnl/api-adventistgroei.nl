import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ChurchUncheckedCreateNestedManyWithoutInstitutionInput } from '../church/church-unchecked-create-nested-many-without-institution.input';
import { Type } from 'class-transformer';
import { DepartmentUncheckedCreateNestedManyWithoutInstitutionInput } from '../department/department-unchecked-create-nested-many-without-institution.input';
import { CommunicationUncheckedCreateNestedManyWithoutInstitutionInput } from '../communication/communication-unchecked-create-nested-many-without-institution.input';
import { NotificationUncheckedCreateNestedManyWithoutInstitutionInput } from '../notification/notification-unchecked-create-nested-many-without-institution.input';
import { SettingUncheckedCreateNestedManyWithoutInstitutionInput } from '../setting/setting-unchecked-create-nested-many-without-institution.input';
import { ProjectUncheckedCreateNestedManyWithoutInstitutionInput } from '../project/project-unchecked-create-nested-many-without-institution.input';
import { DirectMessageUncheckedCreateNestedManyWithoutInstitutionInput } from '../direct-message/direct-message-unchecked-create-nested-many-without-institution.input';
import { SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-institution.input';
import { AnnualBudgetUncheckedCreateNestedManyWithoutInstitutionInput } from '../annual-budget/annual-budget-unchecked-create-nested-many-without-institution.input';
import { InstitutionPositionUncheckedCreateNestedManyWithoutInstitutionInput } from '../institution-position/institution-position-unchecked-create-nested-many-without-institution.input';
import { AvailabilityUncheckedCreateNestedManyWithoutInstitutionInput } from '../availability/availability-unchecked-create-nested-many-without-institution.input';
import { AvailabilityRecurrenceRuleUncheckedCreateNestedManyWithoutInstitutionInput } from '../availability-recurrence-rule/availability-recurrence-rule-unchecked-create-nested-many-without-institution.input';
import { ChurchServiceCalendarUncheckedCreateNestedManyWithoutInstitutionInput } from '../church-service-calendar/church-service-calendar-unchecked-create-nested-many-without-institution.input';

@InputType()
export class InstitutionUncheckedCreateWithoutUsersInput {

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

    @Field(() => String, {nullable:true})
    contact_id?: string;

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

    @Field(() => ChurchUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => ChurchUncheckedCreateNestedManyWithoutInstitutionInput)
    churches?: ChurchUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => DepartmentUncheckedCreateNestedManyWithoutInstitutionInput)
    departments?: DepartmentUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => CommunicationUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    communications?: CommunicationUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => NotificationUncheckedCreateNestedManyWithoutInstitutionInput)
    notifications?: NotificationUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => SettingUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    settings?: SettingUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => ProjectUncheckedCreateNestedManyWithoutInstitutionInput)
    projects?: ProjectUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => DirectMessageUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    direct_messages?: DirectMessageUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput)
    subsidy_requests?: SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => AnnualBudgetUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => AnnualBudgetUncheckedCreateNestedManyWithoutInstitutionInput)
    annual_budgets?: AnnualBudgetUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => InstitutionPositionUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    positions?: InstitutionPositionUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => AvailabilityUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => AvailabilityRecurrenceRuleUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    availability_recurrence_rules?: AvailabilityRecurrenceRuleUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => ChurchServiceCalendarUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    church_service_calendar_entries?: ChurchServiceCalendarUncheckedCreateNestedManyWithoutInstitutionInput;
}
