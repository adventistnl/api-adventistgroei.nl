import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumAdjustmentStatusFieldUpdateOperationsInput } from '../prisma/enum-adjustment-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProjectHistoryUpdateOneRequiredWithoutAdjustmentNestedInput } from '../project-history/project-history-update-one-required-without-adjustment-nested.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskUpdateManyWithoutAdjustmentNestedInput } from '../adjustment-task/adjustment-task-update-many-without-adjustment-nested.input';

@InputType()
export class ProjectAdjustmentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAdjustmentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAdjustmentStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: StringFieldUpdateOperationsInput;

    @Field(() => ProjectHistoryUpdateOneRequiredWithoutAdjustmentNestedInput, {nullable:true})
    @Type(() => ProjectHistoryUpdateOneRequiredWithoutAdjustmentNestedInput)
    project_history?: ProjectHistoryUpdateOneRequiredWithoutAdjustmentNestedInput;

    @Field(() => AdjustmentTaskUpdateManyWithoutAdjustmentNestedInput, {nullable:true})
    tasks?: AdjustmentTaskUpdateManyWithoutAdjustmentNestedInput;
}
