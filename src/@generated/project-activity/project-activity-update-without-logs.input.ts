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
import { SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput } from '../subsidy-request/subsidy-request-update-many-without-project-activities-nested.input';
import { ProjectUpdateOneRequiredWithoutActivitiesNestedInput } from '../project/project-update-one-required-without-activities-nested.input';
import { SubsidyReceiptUpdateManyWithoutProject_activityNestedInput } from '../subsidy-receipt/subsidy-receipt-update-many-without-project-activity-nested.input';
import { ActivityDocumentsUpdateManyWithoutProject_activityNestedInput } from '../activity-documents/activity-documents-update-many-without-project-activity-nested.input';
import { ActivityFundingUpdateOneWithoutActivityNestedInput } from '../activity-funding/activity-funding-update-one-without-activity-nested.input';
import { ProjectActivityAssigneeUpdateManyWithoutActivityNestedInput } from '../project-activity-assignee/project-activity-assignee-update-many-without-activity-nested.input';

@InputType()
export class ProjectActivityUpdateWithoutLogsInput {

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

    @Field(() => SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput)
    subsidy_request?: SubsidyRequestUpdateManyWithoutProject_activitiesNestedInput;

    @Field(() => ProjectUpdateOneRequiredWithoutActivitiesNestedInput, {nullable:true})
    @Type(() => ProjectUpdateOneRequiredWithoutActivitiesNestedInput)
    project?: ProjectUpdateOneRequiredWithoutActivitiesNestedInput;

    @Field(() => SubsidyReceiptUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => SubsidyReceiptUpdateManyWithoutProject_activityNestedInput)
    subsidy_receipts?: SubsidyReceiptUpdateManyWithoutProject_activityNestedInput;

    @Field(() => ActivityDocumentsUpdateManyWithoutProject_activityNestedInput, {nullable:true})
    @Type(() => ActivityDocumentsUpdateManyWithoutProject_activityNestedInput)
    activity_documents?: ActivityDocumentsUpdateManyWithoutProject_activityNestedInput;

    @Field(() => ActivityFundingUpdateOneWithoutActivityNestedInput, {nullable:true})
    @Type(() => ActivityFundingUpdateOneWithoutActivityNestedInput)
    activity_funding?: ActivityFundingUpdateOneWithoutActivityNestedInput;

    @Field(() => ProjectActivityAssigneeUpdateManyWithoutActivityNestedInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeUpdateManyWithoutActivityNestedInput)
    assignees?: ProjectActivityAssigneeUpdateManyWithoutActivityNestedInput;
}
