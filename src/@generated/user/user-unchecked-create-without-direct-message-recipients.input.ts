import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { UserRoleUncheckedCreateNestedManyWithoutUserInput } from '../user-role/user-role-unchecked-create-nested-many-without-user.input';
import { DirectMessageUncheckedCreateNestedManyWithoutSenderInput } from '../direct-message/direct-message-unchecked-create-nested-many-without-sender.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';
import { EventRegistrationUncheckedCreateNestedManyWithoutUserInput } from '../event-registration/event-registration-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { EventRecipientUncheckedCreateNestedManyWithoutUserInput } from '../event-recipient/event-recipient-unchecked-create-nested-many-without-user.input';
import { CommunicationUncheckedCreateNestedManyWithoutAuthorInput } from '../communication/communication-unchecked-create-nested-many-without-author.input';
import { SubsidyRequestUncheckedCreateNestedManyWithoutRequesterInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-requester.input';
import { SubsidyStatusUncheckedCreateNestedManyWithoutAssigned_userInput } from '../subsidy-status/subsidy-status-unchecked-create-nested-many-without-assigned-user.input';

@InputType()
export class UserUncheckedCreateWithoutDirect_message_recipientsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => String, {nullable:true})
    contact_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    user_roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => DirectMessageUncheckedCreateNestedManyWithoutSenderInput, {nullable:true})
    direct_messages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => EventRegistrationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => EventRegistrationUncheckedCreateNestedManyWithoutUserInput)
    event_registrations?: EventRegistrationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => EventRecipientUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => EventRecipientUncheckedCreateNestedManyWithoutUserInput)
    event_recipients?: EventRecipientUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CommunicationUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    communications?: CommunicationUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutRequesterInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutRequesterInput)
    SubsidyRequest?: SubsidyRequestUncheckedCreateNestedManyWithoutRequesterInput;

    @Field(() => SubsidyStatusUncheckedCreateNestedManyWithoutAssigned_userInput, {nullable:true})
    @Type(() => SubsidyStatusUncheckedCreateNestedManyWithoutAssigned_userInput)
    SubsidyStatus?: SubsidyStatusUncheckedCreateNestedManyWithoutAssigned_userInput;
}
