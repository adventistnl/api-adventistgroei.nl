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
import { SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput } from '../subsidy-receipt/subsidy-receipt-unchecked-update-many-without-project-activity-nested.input';
import { ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput } from '../activity-documents/activity-documents-unchecked-update-many-without-project-activity-nested.input';
import { ActivityFundingUncheckedUpdateOneWithoutProject_activityNestedInput } from '../activity-funding/activity-funding-unchecked-update-one-without-project-activity-nested.input';

@InputType()
export class ProjectActivityUncheckedUpdateWithoutSubsidy_requestInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    project_id?: StringFieldUpdateOperationsInput;

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

    @Field(() => SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput)
    subsidy_receipts?: SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput;

    @Field(() => ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput)
    activity_documents?: ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput;

    @Field(() => ActivityFundingUncheckedUpdateOneWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => ActivityFundingUncheckedUpdateOneWithoutProject_activityNestedInput)
    activity_funding?: ActivityFundingUncheckedUpdateOneWithoutProject_activityNestedInput;
}
