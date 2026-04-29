import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ChurchUpdateOneWithoutDepartmentsNestedInput } from '../church/church-update-one-without-departments-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneWithoutLed_departmentsNestedInput } from '../user/user-update-one-without-led-departments-nested.input';
import { ContactUpdateOneWithoutDepartmentNestedInput } from '../contact/contact-update-one-without-department-nested.input';
import { SubsidyStatusUpdateManyWithoutDepartmentNestedInput } from '../subsidy-status/subsidy-status-update-many-without-department-nested.input';
import { ProjectUpdateManyWithoutDepartmentNestedInput } from '../project/project-update-many-without-department-nested.input';
import { ProjectUpdateManyWithoutChurch_departmentNestedInput } from '../project/project-update-many-without-church-department-nested.input';
import { AnnualReportUpdateManyWithoutDepartmentNestedInput } from '../annual-report/annual-report-update-many-without-department-nested.input';
import { SubsidyRequestUpdateManyWithoutDepartmentNestedInput } from '../subsidy-request/subsidy-request-update-many-without-department-nested.input';
import { UserUpdateManyWithoutDepartmentNestedInput } from '../user/user-update-many-without-department-nested.input';
import { AnnualBudgetUpdateManyWithoutDepartmentNestedInput } from '../annual-budget/annual-budget-update-many-without-department-nested.input';

@InputType()
export class DepartmentUpdateWithoutInstitutionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

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

    @Field(() => ChurchUpdateOneWithoutDepartmentsNestedInput, {nullable:true})
    @Type(() => ChurchUpdateOneWithoutDepartmentsNestedInput)
    church?: ChurchUpdateOneWithoutDepartmentsNestedInput;

    @Field(() => UserUpdateOneWithoutLed_departmentsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutLed_departmentsNestedInput)
    leader?: UserUpdateOneWithoutLed_departmentsNestedInput;

    @Field(() => ContactUpdateOneWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => ContactUpdateOneWithoutDepartmentNestedInput)
    contact?: ContactUpdateOneWithoutDepartmentNestedInput;

    @Field(() => SubsidyStatusUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateManyWithoutDepartmentNestedInput)
    subsidy_statuses?: SubsidyStatusUpdateManyWithoutDepartmentNestedInput;

    @Field(() => ProjectUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => ProjectUpdateManyWithoutDepartmentNestedInput)
    projects?: ProjectUpdateManyWithoutDepartmentNestedInput;

    @Field(() => ProjectUpdateManyWithoutChurch_departmentNestedInput, {nullable:true})
    @Type(() => ProjectUpdateManyWithoutChurch_departmentNestedInput)
    church_projects?: ProjectUpdateManyWithoutChurch_departmentNestedInput;

    @Field(() => AnnualReportUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    annual_reports?: AnnualReportUpdateManyWithoutDepartmentNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutDepartmentNestedInput)
    subsidy_requests?: SubsidyRequestUpdateManyWithoutDepartmentNestedInput;

    @Field(() => UserUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => UserUpdateManyWithoutDepartmentNestedInput)
    users?: UserUpdateManyWithoutDepartmentNestedInput;

    @Field(() => AnnualBudgetUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateManyWithoutDepartmentNestedInput)
    annual_budgets?: AnnualBudgetUpdateManyWithoutDepartmentNestedInput;
}
