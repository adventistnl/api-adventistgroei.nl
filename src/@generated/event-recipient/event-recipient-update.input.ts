import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEventTargetTypeFieldUpdateOperationsInput } from '../prisma/enum-event-target-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EventUpdateOneRequiredWithoutEvent_recipientsNestedInput } from '../event/event-update-one-required-without-event-recipients-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneWithoutEvent_recipientsNestedInput } from '../user/user-update-one-without-event-recipients-nested.input';

@InputType()
export class EventRecipientUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEventTargetTypeFieldUpdateOperationsInput, {nullable:true})
    target_type?: EnumEventTargetTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    target_id?: StringFieldUpdateOperationsInput;

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

    @Field(() => EventUpdateOneRequiredWithoutEvent_recipientsNestedInput, {nullable:true})
    @Type(() => EventUpdateOneRequiredWithoutEvent_recipientsNestedInput)
    event?: EventUpdateOneRequiredWithoutEvent_recipientsNestedInput;

    @Field(() => UserUpdateOneWithoutEvent_recipientsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutEvent_recipientsNestedInput)
    User?: UserUpdateOneWithoutEvent_recipientsNestedInput;
}
