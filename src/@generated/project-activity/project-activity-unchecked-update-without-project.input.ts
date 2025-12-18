import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProjectActivityUpdatetagsInput } from './project-activity-updatetags.input';
import { EnumActivityStatusFieldUpdateOperationsInput } from '../prisma/enum-activity-status-field-update-operations.input';
import { EnumActivityPriorityFieldUpdateOperationsInput } from '../prisma/enum-activity-priority-field-update-operations.input';
import { SubsidyRequestUncheckedUpdateManyWithoutProject_activitiesNestedInput } from '../subsidy-request/subsidy-request-unchecked-update-many-without-project-activities-nested.input';
import { SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput } from '../subsidy-receipt/subsidy-receipt-unchecked-update-many-without-project-activity-nested.input';
import { ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput } from '../activity-documents/activity-documents-unchecked-update-many-without-project-activity-nested.input';
import { ActivityFundingUncheckedUpdateOneWithoutActivityNestedInput } from '../activity-funding/activity-funding-unchecked-update-one-without-activity-nested.input';

@InputType()
export class ProjectActivityUncheckedUpdateWithoutProjectInput {

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    deadline?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    owner_id?: StringFieldUpdateOperationsInput;

    @Field(() => ProjectActivityUpdatetagsInput, {nullable:true})
    @Type(() => ProjectActivityUpdatetagsInput)
    tags?: ProjectActivityUpdatetagsInput;

    @Field(() => EnumActivityStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumActivityStatusFieldUpdateOperationsInput;

    @Field(() => EnumActivityPriorityFieldUpdateOperationsInput, {nullable:true})
    priority?: EnumActivityPriorityFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_subsidized?: BoolFieldUpdateOperationsInput;

    @Field(() => SubsidyRequestUncheckedUpdateManyWithoutProject_activitiesNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedUpdateManyWithoutProject_activitiesNestedInput)
    subsidy_request?: SubsidyRequestUncheckedUpdateManyWithoutProject_activitiesNestedInput;

    @Field(() => SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput)
    subsidy_receipts?: SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput;

    @Field(() => ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput)
    activity_documents?: ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput;

    @Field(() => ActivityFundingUncheckedUpdateOneWithoutActivityNestedInput, {nullable:true})
    @Type(() => ActivityFundingUncheckedUpdateOneWithoutActivityNestedInput)
    activity_funding?: ActivityFundingUncheckedUpdateOneWithoutActivityNestedInput;
}
