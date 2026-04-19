import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumAdjustmentStatusFieldUpdateOperationsInput } from '../prisma/enum-adjustment-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AdjustmentTaskUncheckedUpdateManyWithoutAdjustmentNestedInput } from '../adjustment-task/adjustment-task-unchecked-update-many-without-adjustment-nested.input';

@InputType()
export class ProjectAdjustmentUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    project_history_id?: StringFieldUpdateOperationsInput;

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

    @Field(() => AdjustmentTaskUncheckedUpdateManyWithoutAdjustmentNestedInput, {nullable:true})
    tasks?: AdjustmentTaskUncheckedUpdateManyWithoutAdjustmentNestedInput;
}
