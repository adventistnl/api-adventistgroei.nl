import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput } from '../subsidy-request/subsidy-request-update-many-without-project-activities-nested.input';
import { ProjectUpdateOneRequiredWithoutActivitiesNestedInput } from '../project/project-update-one-required-without-activities-nested.input';
import { SubsidyReceiptUpdateManyWithoutProject_activityNestedInput } from '../subsidy-receipt/subsidy-receipt-update-many-without-project-activity-nested.input';

@InputType()
export class ProjectActivityUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    budget_amount?: DecimalFieldUpdateOperationsInput;

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

    @Field(() => SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput)
    subsidy_request?: SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput;

    @Field(() => ProjectUpdateOneRequiredWithoutActivitiesNestedInput, {nullable:true})
    @Type(() => ProjectUpdateOneRequiredWithoutActivitiesNestedInput)
    project?: ProjectUpdateOneRequiredWithoutActivitiesNestedInput;

    @Field(() => SubsidyReceiptUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => SubsidyReceiptUpdateManyWithoutProject_activityNestedInput)
    subsidy_receipts?: SubsidyReceiptUpdateManyWithoutProject_activityNestedInput;
}
