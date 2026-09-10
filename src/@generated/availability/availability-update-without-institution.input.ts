import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumAvailabilityStatusFieldUpdateOperationsInput } from '../prisma/enum-availability-status-field-update-operations.input';
import { EnumAvailabilitySourceFieldUpdateOperationsInput } from '../prisma/enum-availability-source-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAvailabilitiesNestedInput } from '../user/user-update-one-required-without-availabilities-nested.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleUpdateOneWithoutMaterialized_availabilitiesNestedInput } from '../availability-recurrence-rule/availability-recurrence-rule-update-one-without-materialized-availabilities-nested.input';

@InputType()
export class AvailabilityUpdateWithoutInstitutionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumAvailabilityStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput;

    @Field(() => EnumAvailabilitySourceFieldUpdateOperationsInput, {nullable:true})
    source?: EnumAvailabilitySourceFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => UserUpdateOneRequiredWithoutAvailabilitiesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutAvailabilitiesNestedInput)
    user?: UserUpdateOneRequiredWithoutAvailabilitiesNestedInput;

    @Field(() => AvailabilityRecurrenceRuleUpdateOneWithoutMaterialized_availabilitiesNestedInput, {nullable:true})
    recurrence_rule?: AvailabilityRecurrenceRuleUpdateOneWithoutMaterialized_availabilitiesNestedInput;
}
