import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProjectHistoryTypeFieldUpdateOperationsInput } from '../prisma/enum-project-history-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProjectUpdateOneRequiredWithoutHistoryNestedInput } from '../project/project-update-one-required-without-history-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutProject_historyNestedInput } from '../user/user-update-one-required-without-project-history-nested.input';

@InputType()
export class ProjectHistoryUpdateWithoutAdjustmentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumProjectHistoryTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumProjectHistoryTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    comment?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => ProjectUpdateOneRequiredWithoutHistoryNestedInput, {nullable:true})
    @Type(() => ProjectUpdateOneRequiredWithoutHistoryNestedInput)
    project?: ProjectUpdateOneRequiredWithoutHistoryNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutProject_historyNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutProject_historyNestedInput)
    user?: UserUpdateOneRequiredWithoutProject_historyNestedInput;
}
