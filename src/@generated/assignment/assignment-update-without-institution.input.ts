import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumAssignmentOriginFieldUpdateOperationsInput } from '../prisma/enum-assignment-origin-field-update-operations.input';
import { EnumAssignmentStatusFieldUpdateOperationsInput } from '../prisma/enum-assignment-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ChurchUpdateOneRequiredWithoutAssignmentsNestedInput } from '../church/church-update-one-required-without-assignments-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneWithoutAssignmentsNestedInput } from '../user/user-update-one-without-assignments-nested.input';

@InputType()
export class AssignmentUpdateWithoutInstitutionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumAssignmentOriginFieldUpdateOperationsInput, {nullable:true})
    origin?: EnumAssignmentOriginFieldUpdateOperationsInput;

    @Field(() => EnumAssignmentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAssignmentStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    locked_at?: NullableDateTimeFieldUpdateOperationsInput;

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

    @Field(() => ChurchUpdateOneRequiredWithoutAssignmentsNestedInput, {nullable:true})
    @Type(() => ChurchUpdateOneRequiredWithoutAssignmentsNestedInput)
    church?: ChurchUpdateOneRequiredWithoutAssignmentsNestedInput;

    @Field(() => UserUpdateOneWithoutAssignmentsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutAssignmentsNestedInput)
    user?: UserUpdateOneWithoutAssignmentsNestedInput;
}
