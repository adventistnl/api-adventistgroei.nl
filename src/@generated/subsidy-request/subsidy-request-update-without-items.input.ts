import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumSubsidyRequestPriorityFieldUpdateOperationsInput } from '../prisma/enum-subsidy-request-priority-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { EnumSubsidyRequestTypeFieldUpdateOperationsInput } from '../prisma/enum-subsidy-request-type-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput } from '../institution/institution-update-one-required-without-subsidy-requests-nested.input';
import { UserUpdateOneRequiredWithoutSubsidyRequestNestedInput } from '../user/user-update-one-required-without-subsidy-request-nested.input';
import { DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput } from '../department/department-update-one-required-without-subsidy-requests-nested.input';
import { ChurchUpdateOneWithoutSubsidy_requestsNestedInput } from '../church/church-update-one-without-subsidy-requests-nested.input';
import { SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput } from '../subsidy-status/subsidy-status-update-one-required-without-subsidy-requests-nested.input';
import { ProjectUpdateOneRequiredWithoutSubsidiesNestedInput } from '../project/project-update-one-required-without-subsidies-nested.input';
import { SubsidyReceiptUpdateManyWithoutSubsidy_requestNestedInput } from '../subsidy-receipt/subsidy-receipt-update-many-without-subsidy-request-nested.input';
import { SubsidyStatusHistoryUpdateManyWithoutSubsidy_requestNestedInput } from '../subsidy-status-history/subsidy-status-history-update-many-without-subsidy-request-nested.input';

@InputType()
export class SubsidyRequestUpdateWithoutItemsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    total_budget?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    approved_amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    rejection_reason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    approved_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    approved_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_deleted?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    deleted_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumSubsidyRequestPriorityFieldUpdateOperationsInput, {nullable:true})
    priority?: EnumSubsidyRequestPriorityFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_for_advance?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    advance_amount?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => EnumSubsidyRequestTypeFieldUpdateOperationsInput, {nullable:true})
    request_type?: EnumSubsidyRequestTypeFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    refund_amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    have_refund?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    refund_done?: BoolFieldUpdateOperationsInput;

    @Field(() => InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutSubsidyRequestNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutSubsidyRequestNestedInput)
    requester?: UserUpdateOneRequiredWithoutSubsidyRequestNestedInput;

    @Field(() => DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput)
    department?: DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput;

    @Field(() => ChurchUpdateOneWithoutSubsidy_requestsNestedInput, {nullable:true})
    @Type(() => ChurchUpdateOneWithoutSubsidy_requestsNestedInput)
    church?: ChurchUpdateOneWithoutSubsidy_requestsNestedInput;

    @Field(() => SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput)
    subsidy_status?: SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput;

    @Field(() => ProjectUpdateOneRequiredWithoutSubsidiesNestedInput, {nullable:true})
    @Type(() => ProjectUpdateOneRequiredWithoutSubsidiesNestedInput)
    project?: ProjectUpdateOneRequiredWithoutSubsidiesNestedInput;

    @Field(() => SubsidyReceiptUpdateManyWithoutSubsidy_requestNestedInput, {nullable:true})
    @Type(() => SubsidyReceiptUpdateManyWithoutSubsidy_requestNestedInput)
    subsidy_receipts?: SubsidyReceiptUpdateManyWithoutSubsidy_requestNestedInput;

    @Field(() => SubsidyStatusHistoryUpdateManyWithoutSubsidy_requestNestedInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateManyWithoutSubsidy_requestNestedInput)
    status_history?: SubsidyStatusHistoryUpdateManyWithoutSubsidy_requestNestedInput;
}
