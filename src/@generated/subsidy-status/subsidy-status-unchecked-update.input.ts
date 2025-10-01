import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { SubsidyRequestUncheckedUpdateManyWithoutSubsidy_statusNestedInput } from '../subsidy-request/subsidy-request-unchecked-update-many-without-subsidy-status-nested.input';
import { Type } from 'class-transformer';
import { SpecialProjectsUncheckedUpdateManyWithoutSubsidy_statusNestedInput } from '../special-projects/special-projects-unchecked-update-many-without-subsidy-status-nested.input';

@InputType()
export class SubsidyStatusUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assigned_to?: StringFieldUpdateOperationsInput;

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

    @Field(() => SubsidyRequestUncheckedUpdateManyWithoutSubsidy_statusNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedUpdateManyWithoutSubsidy_statusNestedInput)
    subsidy_requests?: SubsidyRequestUncheckedUpdateManyWithoutSubsidy_statusNestedInput;

    @Field(() => SpecialProjectsUncheckedUpdateManyWithoutSubsidy_statusNestedInput, {nullable:true})
    @Type(() => SpecialProjectsUncheckedUpdateManyWithoutSubsidy_statusNestedInput)
    special_projects?: SpecialProjectsUncheckedUpdateManyWithoutSubsidy_statusNestedInput;
}
