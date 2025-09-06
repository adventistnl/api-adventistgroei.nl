import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLanguagePreferenceFieldUpdateOperationsInput } from '../prisma/enum-language-preference-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutUsersNestedInput } from '../institution/institution-update-one-required-without-users-nested.input';
import { Type } from 'class-transformer';
import { ContactUpdateOneWithoutUserNestedInput } from '../contact/contact-update-one-without-user-nested.input';
import { UserRoleUpdateManyWithoutUserNestedInput } from '../user-role/user-role-update-many-without-user-nested.input';
import { DirectMessageUpdateManyWithoutSenderNestedInput } from '../direct-message/direct-message-update-many-without-sender-nested.input';
import { DirectMessageRecipientUpdateManyWithoutRecipient_userNestedInput } from '../direct-message-recipient/direct-message-recipient-update-many-without-recipient-user-nested.input';
import { NotificationUpdateManyWithoutUserNestedInput } from '../notification/notification-update-many-without-user-nested.input';
import { EventRegistrationUpdateManyWithoutUserNestedInput } from '../event-registration/event-registration-update-many-without-user-nested.input';
import { EventRecipientUpdateManyWithoutUserNestedInput } from '../event-recipient/event-recipient-update-many-without-user-nested.input';
import { CommunicationUpdateManyWithoutAuthorNestedInput } from '../communication/communication-update-many-without-author-nested.input';
import { SubsidyRequestUpdateManyWithoutRequesterNestedInput } from '../subsidy-request/subsidy-request-update-many-without-requester-nested.input';
import { SubsidyStatusUpdateManyWithoutAssigned_userNestedInput } from '../subsidy-status/subsidy-status-update-many-without-assigned-user-nested.input';

@InputType()
export class UserUpdateWithoutChurchInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguagePreferenceFieldUpdateOperationsInput, {nullable:true})
    language_preference?: EnumLanguagePreferenceFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutUsersNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => ContactUpdateOneWithoutUserNestedInput, {nullable:true})
    @Type(() => ContactUpdateOneWithoutUserNestedInput)
    contact?: ContactUpdateOneWithoutUserNestedInput;

    @Field(() => UserRoleUpdateManyWithoutUserNestedInput, {nullable:true})
    user_roles?: UserRoleUpdateManyWithoutUserNestedInput;

    @Field(() => DirectMessageUpdateManyWithoutSenderNestedInput, {nullable:true})
    direct_messages?: DirectMessageUpdateManyWithoutSenderNestedInput;

    @Field(() => DirectMessageRecipientUpdateManyWithoutRecipient_userNestedInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientUpdateManyWithoutRecipient_userNestedInput;

    @Field(() => NotificationUpdateManyWithoutUserNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutUserNestedInput;

    @Field(() => EventRegistrationUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => EventRegistrationUpdateManyWithoutUserNestedInput)
    event_registrations?: EventRegistrationUpdateManyWithoutUserNestedInput;

    @Field(() => EventRecipientUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => EventRecipientUpdateManyWithoutUserNestedInput)
    event_recipients?: EventRecipientUpdateManyWithoutUserNestedInput;

    @Field(() => CommunicationUpdateManyWithoutAuthorNestedInput, {nullable:true})
    communications?: CommunicationUpdateManyWithoutAuthorNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutRequesterNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutRequesterNestedInput)
    SubsidyRequest?: SubsidyRequestUpdateManyWithoutRequesterNestedInput;

    @Field(() => SubsidyStatusUpdateManyWithoutAssigned_userNestedInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateManyWithoutAssigned_userNestedInput)
    SubsidyStatus?: SubsidyStatusUpdateManyWithoutAssigned_userNestedInput;
}
