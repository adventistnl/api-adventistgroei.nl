import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRecurrenceTypeFieldUpdateOperationsInput } from '../prisma/enum-recurrence-type-field-update-operations.input';
import { EnumAvailabilityStatusFieldUpdateOperationsInput } from '../prisma/enum-availability-status-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput } from '../institution/institution-update-one-required-without-availability-recurrence-rules-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput } from '../user/user-update-one-required-without-availability-recurrence-rules-nested.input';

@InputType()
export class AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRecurrenceTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumRecurrenceTypeFieldUpdateOperationsInput;

    @Field(() => EnumAvailabilityStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    day_of_week?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    start_date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    end_date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    effective_from?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    effective_until?: NullableDateTimeFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput)
    user?: UserUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput;
}
