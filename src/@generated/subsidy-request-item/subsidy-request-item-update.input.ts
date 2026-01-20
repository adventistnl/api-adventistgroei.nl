import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubsidyRequestUpdateOneRequiredWithoutItemsNestedInput } from '../subsidy-request/subsidy-request-update-one-required-without-items-nested.input';
import { ProjectActivityUpdateOneRequiredWithoutSubsidy_request_itemsNestedInput } from '../project-activity/project-activity-update-one-required-without-subsidy-request-items-nested.input';
import { SubsidyReceiptUpdateManyWithoutSubsidy_request_itemNestedInput } from '../subsidy-receipt/subsidy-receipt-update-many-without-subsidy-request-item-nested.input';

@InputType()
export class SubsidyRequestItemUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    requested_amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    approved_amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => SubsidyRequestUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateOneRequiredWithoutItemsNestedInput)
    subsidy_request?: SubsidyRequestUpdateOneRequiredWithoutItemsNestedInput;

    @Field(() => ProjectActivityUpdateOneRequiredWithoutSubsidy_request_itemsNestedInput, {nullable:true})
    @Type(() => ProjectActivityUpdateOneRequiredWithoutSubsidy_request_itemsNestedInput)
    project_activity?: ProjectActivityUpdateOneRequiredWithoutSubsidy_request_itemsNestedInput;

    @Field(() => SubsidyReceiptUpdateManyWithoutSubsidy_request_itemNestedInput, {nullable:true})
    @Type(() => SubsidyReceiptUpdateManyWithoutSubsidy_request_itemNestedInput)
    subsidy_receipts?: SubsidyReceiptUpdateManyWithoutSubsidy_request_itemNestedInput;
}
