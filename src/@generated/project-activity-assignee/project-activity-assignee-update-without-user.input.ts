import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProjectActivityUpdateOneRequiredWithoutAssigneesNestedInput } from '../project-activity/project-activity-update-one-required-without-assignees-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityAssigneeUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => ProjectActivityUpdateOneRequiredWithoutAssigneesNestedInput, {nullable:true})
    @Type(() => ProjectActivityUpdateOneRequiredWithoutAssigneesNestedInput)
    activity?: ProjectActivityUpdateOneRequiredWithoutAssigneesNestedInput;
}
