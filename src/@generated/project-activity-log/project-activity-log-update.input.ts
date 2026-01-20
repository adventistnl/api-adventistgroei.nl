import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProjectActivityLogActionFieldUpdateOperationsInput } from '../prisma/enum-project-activity-log-action-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProjectActivityUpdateOneRequiredWithoutLogsNestedInput } from '../project-activity/project-activity-update-one-required-without-logs-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutProject_activity_logsNestedInput } from '../user/user-update-one-required-without-project-activity-logs-nested.input';

@InputType()
export class ProjectActivityLogUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumProjectActivityLogActionFieldUpdateOperationsInput, {nullable:true})
    action?: EnumProjectActivityLogActionFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    field_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    old_value?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    new_value?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProjectActivityUpdateOneRequiredWithoutLogsNestedInput, {nullable:true})
    @Type(() => ProjectActivityUpdateOneRequiredWithoutLogsNestedInput)
    activity?: ProjectActivityUpdateOneRequiredWithoutLogsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutProject_activity_logsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutProject_activity_logsNestedInput)
    user?: UserUpdateOneRequiredWithoutProject_activity_logsNestedInput;
}
