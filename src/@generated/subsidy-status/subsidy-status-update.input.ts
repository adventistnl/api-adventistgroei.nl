import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DepartmentUpdateOneRequiredWithoutSubsidy_statusesNestedInput } from '../department/department-update-one-required-without-subsidy-statuses-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutSubsidyStatusNestedInput } from '../user/user-update-one-required-without-subsidy-status-nested.input';
import { SubsidyRequestUpdateManyWithoutSubsidy_statusNestedInput } from '../subsidy-request/subsidy-request-update-many-without-subsidy-status-nested.input';
import { SpecialProjectsUpdateManyWithoutSubsidy_statusNestedInput } from '../special-projects/special-projects-update-many-without-subsidy-status-nested.input';

@InputType()
export class SubsidyStatusUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

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

    @Field(() => DepartmentUpdateOneRequiredWithoutSubsidy_statusesNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateOneRequiredWithoutSubsidy_statusesNestedInput)
    department?: DepartmentUpdateOneRequiredWithoutSubsidy_statusesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutSubsidyStatusNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutSubsidyStatusNestedInput)
    assigned_user?: UserUpdateOneRequiredWithoutSubsidyStatusNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutSubsidy_statusNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutSubsidy_statusNestedInput)
    subsidy_requests?: SubsidyRequestUpdateManyWithoutSubsidy_statusNestedInput;

    @Field(() => SpecialProjectsUpdateManyWithoutSubsidy_statusNestedInput, {nullable:true})
    @Type(() => SpecialProjectsUpdateManyWithoutSubsidy_statusNestedInput)
    special_projects?: SpecialProjectsUpdateManyWithoutSubsidy_statusNestedInput;
}
