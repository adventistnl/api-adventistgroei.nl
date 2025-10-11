import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ProjectUncheckedUpdateManyWithoutDepartmentNestedInput } from '../project/project-unchecked-update-many-without-department-nested.input';
import { Type } from 'class-transformer';
import { AnnualReportUncheckedUpdateManyWithoutDepartmentNestedInput } from '../annual-report/annual-report-unchecked-update-many-without-department-nested.input';
import { SubsidyRequestUncheckedUpdateManyWithoutDepartmentNestedInput } from '../subsidy-request/subsidy-request-unchecked-update-many-without-department-nested.input';
import { UserUncheckedUpdateManyWithoutDepartmentNestedInput } from '../user/user-unchecked-update-many-without-department-nested.input';
import { AnnualBudgetUncheckedUpdateManyWithoutDepartmentNestedInput } from '../annual-budget/annual-budget-unchecked-update-many-without-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateWithoutSubsidy_statusesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    institution_id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    church_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

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

    @Field(() => ProjectUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => ProjectUncheckedUpdateManyWithoutDepartmentNestedInput)
    projects?: ProjectUncheckedUpdateManyWithoutDepartmentNestedInput;

    @Field(() => AnnualReportUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    annual_reports?: AnnualReportUncheckedUpdateManyWithoutDepartmentNestedInput;

    @Field(() => SubsidyRequestUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedUpdateManyWithoutDepartmentNestedInput)
    subsidy_requests?: SubsidyRequestUncheckedUpdateManyWithoutDepartmentNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateManyWithoutDepartmentNestedInput)
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput;

    @Field(() => AnnualBudgetUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUncheckedUpdateManyWithoutDepartmentNestedInput)
    annual_budgets?: AnnualBudgetUncheckedUpdateManyWithoutDepartmentNestedInput;
}
