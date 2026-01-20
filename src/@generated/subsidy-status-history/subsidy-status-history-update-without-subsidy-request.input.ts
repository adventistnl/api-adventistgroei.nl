import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumSubsidyHistoryTypeFieldUpdateOperationsInput } from '../prisma/enum-subsidy-history-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubsidyStatusUpdateOneRequiredWithoutHistory_as_currentNestedInput } from '../subsidy-status/subsidy-status-update-one-required-without-history-as-current-nested.input';
import { Type } from 'class-transformer';
import { SubsidyStatusUpdateOneWithoutHistory_as_previousNestedInput } from '../subsidy-status/subsidy-status-update-one-without-history-as-previous-nested.input';
import { UserUpdateOneRequiredWithoutSubsidy_status_historyNestedInput } from '../user/user-update-one-required-without-subsidy-status-history-nested.input';

@InputType()
export class SubsidyStatusHistoryUpdateWithoutSubsidy_requestInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumSubsidyHistoryTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumSubsidyHistoryTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    changed_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_deleted?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    deleted_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => SubsidyStatusUpdateOneRequiredWithoutHistory_as_currentNestedInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateOneRequiredWithoutHistory_as_currentNestedInput)
    status?: SubsidyStatusUpdateOneRequiredWithoutHistory_as_currentNestedInput;

    @Field(() => SubsidyStatusUpdateOneWithoutHistory_as_previousNestedInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateOneWithoutHistory_as_previousNestedInput)
    previous_status?: SubsidyStatusUpdateOneWithoutHistory_as_previousNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutSubsidy_status_historyNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutSubsidy_status_historyNestedInput)
    user?: UserUpdateOneRequiredWithoutSubsidy_status_historyNestedInput;
}
