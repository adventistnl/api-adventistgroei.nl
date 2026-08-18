import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRequestTypeFieldUpdateOperationsInput } from '../prisma/enum-request-type-field-update-operations.input';
import { EnumRequestStatusFieldUpdateOperationsInput } from '../prisma/enum-request-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutAssignment_requestsNestedInput } from '../institution/institution-update-one-required-without-assignment-requests-nested.input';
import { Type } from 'class-transformer';
import { ChurchUpdateOneRequiredWithoutAssignment_requestsNestedInput } from '../church/church-update-one-required-without-assignment-requests-nested.input';
import { UserUpdateOneRequiredWithoutAssignment_requestsNestedInput } from '../user/user-update-one-required-without-assignment-requests-nested.input';
import { AssignmentInviteTemplateUpdateOneWithoutRequestsNestedInput } from '../assignment-invite-template/assignment-invite-template-update-one-without-requests-nested.input';

@InputType()
export class AssignmentRequestUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumRequestTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumRequestTypeFieldUpdateOperationsInput;

    @Field(() => EnumRequestStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumRequestStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    decided_at?: NullableDateTimeFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutAssignment_requestsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutAssignment_requestsNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutAssignment_requestsNestedInput;

    @Field(() => ChurchUpdateOneRequiredWithoutAssignment_requestsNestedInput, {nullable:true})
    @Type(() => ChurchUpdateOneRequiredWithoutAssignment_requestsNestedInput)
    church?: ChurchUpdateOneRequiredWithoutAssignment_requestsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutAssignment_requestsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutAssignment_requestsNestedInput)
    user?: UserUpdateOneRequiredWithoutAssignment_requestsNestedInput;

    @Field(() => AssignmentInviteTemplateUpdateOneWithoutRequestsNestedInput, {nullable:true})
    template?: AssignmentInviteTemplateUpdateOneWithoutRequestsNestedInput;
}
