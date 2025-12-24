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
import { ProjectActivityUpdatecustom_tagsInput } from './project-activity-updatecustom-tags.input';
import { NullableEnumActivityTagsFieldUpdateOperationsInput } from '../prisma/nullable-enum-activity-tags-field-update-operations.input';
import { EnumActivityStatusFieldUpdateOperationsInput } from '../prisma/enum-activity-status-field-update-operations.input';
import { EnumActivityPriorityFieldUpdateOperationsInput } from '../prisma/enum-activity-priority-field-update-operations.input';
import { SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput } from '../subsidy-receipt/subsidy-receipt-unchecked-update-many-without-project-activity-nested.input';
import { ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput } from '../activity-documents/activity-documents-unchecked-update-many-without-project-activity-nested.input';
import { ActivityFundingUncheckedUpdateOneWithoutActivityNestedInput } from '../activity-funding/activity-funding-unchecked-update-one-without-activity-nested.input';
import { ProjectActivityLogUncheckedUpdateManyWithoutActivityNestedInput } from '../project-activity-log/project-activity-log-unchecked-update-many-without-activity-nested.input';
import { ProjectActivityAssigneeUncheckedUpdateManyWithoutActivityNestedInput } from '../project-activity-assignee/project-activity-assignee-unchecked-update-many-without-activity-nested.input';

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

    @Field(() => ProjectActivityUpdatetagsInput, {nullable:true})
    @Type(() => ProjectActivityUpdatetagsInput)
    tags?: ProjectActivityUpdatetagsInput;

    @Field(() => ProjectActivityUpdatecustom_tagsInput, {nullable:true})
    @Type(() => ProjectActivityUpdatecustom_tagsInput)
    custom_tags?: ProjectActivityUpdatecustom_tagsInput;

    @Field(() => NullableEnumActivityTagsFieldUpdateOperationsInput, {nullable:true})
    activity_tag?: NullableEnumActivityTagsFieldUpdateOperationsInput;

    @Field(() => EnumActivityStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumActivityStatusFieldUpdateOperationsInput;

    @Field(() => EnumActivityPriorityFieldUpdateOperationsInput, {nullable:true})
    priority?: EnumActivityPriorityFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_subsidized?: BoolFieldUpdateOperationsInput;

    @Field(() => SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput)
    subsidy_receipts?: SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput;

    @Field(() => ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput)
    activity_documents?: ActivityDocumentsUncheckedUpdateManyWithoutProject_activityNestedInput;

    @Field(() => ActivityFundingUncheckedUpdateOneWithoutActivityNestedInput, {nullable:true})
    @Type(() => ActivityFundingUncheckedUpdateOneWithoutActivityNestedInput)
    activity_funding?: ActivityFundingUncheckedUpdateOneWithoutActivityNestedInput;

    @Field(() => ProjectActivityLogUncheckedUpdateManyWithoutActivityNestedInput, {nullable:true})
    @Type(() => ProjectActivityLogUncheckedUpdateManyWithoutActivityNestedInput)
    logs?: ProjectActivityLogUncheckedUpdateManyWithoutActivityNestedInput;

    @Field(() => ProjectActivityAssigneeUncheckedUpdateManyWithoutActivityNestedInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeUncheckedUpdateManyWithoutActivityNestedInput)
    assignees?: ProjectActivityAssigneeUncheckedUpdateManyWithoutActivityNestedInput;
}
