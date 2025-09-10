import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutDepartmentsNestedInput } from '../institution/institution-update-one-required-without-departments-nested.input';
import { ChurchUpdateOneRequiredWithoutDepartmentsNestedInput } from '../church/church-update-one-required-without-departments-nested.input';
import { ContactUpdateOneWithoutDepartmentNestedInput } from '../contact/contact-update-one-without-department-nested.input';
import { SubsidyStatusUpdateManyWithoutDepartmentNestedInput } from '../subsidy-status/subsidy-status-update-many-without-department-nested.input';
import { ProjectUpdateManyWithoutDepartmentNestedInput } from '../project/project-update-many-without-department-nested.input';
import { SubsidyRequestUpdateManyWithoutDepartmentNestedInput } from '../subsidy-request/subsidy-request-update-many-without-department-nested.input';

@InputType()
export class DepartmentUpdateWithoutAnnual_reportsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    annual_budget?: DecimalFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutDepartmentsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutDepartmentsNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutDepartmentsNestedInput;

    @Field(() => ChurchUpdateOneRequiredWithoutDepartmentsNestedInput, {nullable:true})
    @Type(() => ChurchUpdateOneRequiredWithoutDepartmentsNestedInput)
    church?: ChurchUpdateOneRequiredWithoutDepartmentsNestedInput;

    @Field(() => ContactUpdateOneWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => ContactUpdateOneWithoutDepartmentNestedInput)
    contact?: ContactUpdateOneWithoutDepartmentNestedInput;

    @Field(() => SubsidyStatusUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateManyWithoutDepartmentNestedInput)
    subsidy_statuses?: SubsidyStatusUpdateManyWithoutDepartmentNestedInput;

    @Field(() => ProjectUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => ProjectUpdateManyWithoutDepartmentNestedInput)
    projects?: ProjectUpdateManyWithoutDepartmentNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutDepartmentNestedInput)
    subsidy_requests?: SubsidyRequestUpdateManyWithoutDepartmentNestedInput;
}
