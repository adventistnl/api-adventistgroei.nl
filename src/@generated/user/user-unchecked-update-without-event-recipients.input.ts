import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLanguagePreferenceFieldUpdateOperationsInput } from '../prisma/enum-language-preference-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserRoleUncheckedUpdateManyWithoutUserNestedInput } from '../user-role/user-role-unchecked-update-many-without-user-nested.input';
import { DirectMessageUncheckedUpdateManyWithoutSenderNestedInput } from '../direct-message/direct-message-unchecked-update-many-without-sender-nested.input';
import { DirectMessageRecipientUncheckedUpdateManyWithoutRecipient_userNestedInput } from '../direct-message-recipient/direct-message-recipient-unchecked-update-many-without-recipient-user-nested.input';
import { NotificationUncheckedUpdateManyWithoutUserNestedInput } from '../notification/notification-unchecked-update-many-without-user-nested.input';
import { EventRegistrationUncheckedUpdateManyWithoutUserNestedInput } from '../event-registration/event-registration-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { CommunicationUncheckedUpdateManyWithoutAuthorNestedInput } from '../communication/communication-unchecked-update-many-without-author-nested.input';
import { SubsidyRequestUncheckedUpdateManyWithoutRequesterNestedInput } from '../subsidy-request/subsidy-request-unchecked-update-many-without-requester-nested.input';
import { SubsidyStatusUncheckedUpdateManyWithoutAssigned_userNestedInput } from '../subsidy-status/subsidy-status-unchecked-update-many-without-assigned-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutEvent_recipientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    institution_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    church_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguagePreferenceFieldUpdateOperationsInput, {nullable:true})
    language_preference?: EnumLanguagePreferenceFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    contact_id?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => UserRoleUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    user_roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => DirectMessageUncheckedUpdateManyWithoutSenderNestedInput, {nullable:true})
    direct_messages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput;

    @Field(() => DirectMessageRecipientUncheckedUpdateManyWithoutRecipient_userNestedInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientUncheckedUpdateManyWithoutRecipient_userNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => EventRegistrationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => EventRegistrationUncheckedUpdateManyWithoutUserNestedInput)
    event_registrations?: EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CommunicationUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    communications?: CommunicationUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => SubsidyRequestUncheckedUpdateManyWithoutRequesterNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedUpdateManyWithoutRequesterNestedInput)
    SubsidyRequest?: SubsidyRequestUncheckedUpdateManyWithoutRequesterNestedInput;

    @Field(() => SubsidyStatusUncheckedUpdateManyWithoutAssigned_userNestedInput, {nullable:true})
    @Type(() => SubsidyStatusUncheckedUpdateManyWithoutAssigned_userNestedInput)
    SubsidyStatus?: SubsidyStatusUncheckedUpdateManyWithoutAssigned_userNestedInput;
}
