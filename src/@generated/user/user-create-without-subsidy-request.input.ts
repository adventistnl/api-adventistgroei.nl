import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ContactCreateNestedOneWithoutUserInput } from '../contact/contact-create-nested-one-without-user.input';
import { Type } from 'class-transformer';
import { InstitutionCreateNestedOneWithoutUsersInput } from '../institution/institution-create-nested-one-without-users.input';
import { ChurchCreateNestedOneWithoutUsersInput } from '../church/church-create-nested-one-without-users.input';
import { DepartmentCreateNestedOneWithoutUsersInput } from '../department/department-create-nested-one-without-users.input';
import { UserRoleCreateNestedManyWithoutUserInput } from '../user-role/user-role-create-nested-many-without-user.input';
import { DirectMessageCreateNestedManyWithoutSenderInput } from '../direct-message/direct-message-create-nested-many-without-sender.input';
import { DirectMessageRecipientCreateNestedManyWithoutRecipient_userInput } from '../direct-message-recipient/direct-message-recipient-create-nested-many-without-recipient-user.input';
import { NotificationCreateNestedManyWithoutUserInput } from '../notification/notification-create-nested-many-without-user.input';
import { EventRegistrationCreateNestedManyWithoutUserInput } from '../event-registration/event-registration-create-nested-many-without-user.input';
import { EventRecipientCreateNestedManyWithoutUserInput } from '../event-recipient/event-recipient-create-nested-many-without-user.input';
import { CommunicationCreateNestedManyWithoutAuthorInput } from '../communication/communication-create-nested-many-without-author.input';
import { SubsidyStatusCreateNestedManyWithoutAssigned_userInput } from '../subsidy-status/subsidy-status-create-nested-many-without-assigned-user.input';
import { VoluntariesOnProjectsCreateNestedManyWithoutUserInput } from '../voluntaries-on-projects/voluntaries-on-projects-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutSubsidyRequestInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

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

    @Field(() => ContactCreateNestedOneWithoutUserInput, {nullable:true})
    @Type(() => ContactCreateNestedOneWithoutUserInput)
    contact?: ContactCreateNestedOneWithoutUserInput;

    @Field(() => InstitutionCreateNestedOneWithoutUsersInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutUsersInput)
    institution!: InstitutionCreateNestedOneWithoutUsersInput;

    @Field(() => ChurchCreateNestedOneWithoutUsersInput, {nullable:false})
    @Type(() => ChurchCreateNestedOneWithoutUsersInput)
    church!: ChurchCreateNestedOneWithoutUsersInput;

    @Field(() => DepartmentCreateNestedOneWithoutUsersInput, {nullable:false})
    @Type(() => DepartmentCreateNestedOneWithoutUsersInput)
    department!: DepartmentCreateNestedOneWithoutUsersInput;

    @Field(() => UserRoleCreateNestedManyWithoutUserInput, {nullable:true})
    user_roles?: UserRoleCreateNestedManyWithoutUserInput;

    @Field(() => DirectMessageCreateNestedManyWithoutSenderInput, {nullable:true})
    direct_messages?: DirectMessageCreateNestedManyWithoutSenderInput;

    @Field(() => DirectMessageRecipientCreateNestedManyWithoutRecipient_userInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientCreateNestedManyWithoutRecipient_userInput;

    @Field(() => NotificationCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutUserInput;

    @Field(() => EventRegistrationCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => EventRegistrationCreateNestedManyWithoutUserInput)
    event_registrations?: EventRegistrationCreateNestedManyWithoutUserInput;

    @Field(() => EventRecipientCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => EventRecipientCreateNestedManyWithoutUserInput)
    event_recipients?: EventRecipientCreateNestedManyWithoutUserInput;

    @Field(() => CommunicationCreateNestedManyWithoutAuthorInput, {nullable:true})
    communications?: CommunicationCreateNestedManyWithoutAuthorInput;

    @Field(() => SubsidyStatusCreateNestedManyWithoutAssigned_userInput, {nullable:true})
    @Type(() => SubsidyStatusCreateNestedManyWithoutAssigned_userInput)
    SubsidyStatus?: SubsidyStatusCreateNestedManyWithoutAssigned_userInput;

    @Field(() => VoluntariesOnProjectsCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateNestedManyWithoutUserInput)
    voluntary_projects?: VoluntariesOnProjectsCreateNestedManyWithoutUserInput;
}
