import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderType } from '../prisma/gender-type.enum';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { UserRoleUncheckedCreateNestedManyWithoutUserInput } from '../user-role/user-role-unchecked-create-nested-many-without-user.input';
import { DirectMessageUncheckedCreateNestedManyWithoutSenderInput } from '../direct-message/direct-message-unchecked-create-nested-many-without-sender.input';
import { DirectMessageRecipientUncheckedCreateNestedManyWithoutRecipient_userInput } from '../direct-message-recipient/direct-message-recipient-unchecked-create-nested-many-without-recipient-user.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';
import { EventRegistrationUncheckedCreateNestedManyWithoutUserInput } from '../event-registration/event-registration-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { EventRecipientUncheckedCreateNestedManyWithoutUserInput } from '../event-recipient/event-recipient-unchecked-create-nested-many-without-user.input';
import { CommunicationUncheckedCreateNestedManyWithoutAuthorInput } from '../communication/communication-unchecked-create-nested-many-without-author.input';
import { SubsidyRequestUncheckedCreateNestedManyWithoutRequesterInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-requester.input';
import { SubsidyStatusUncheckedCreateNestedManyWithoutAssigned_userInput } from '../subsidy-status/subsidy-status-unchecked-create-nested-many-without-assigned-user.input';
import { VoluntariesOnProjectsUncheckedCreateNestedManyWithoutUserInput } from '../voluntaries-on-projects/voluntaries-on-projects-unchecked-create-nested-many-without-user.input';
import { ProjectUncheckedCreateNestedManyWithoutOwnerInput } from '../project/project-unchecked-create-nested-many-without-owner.input';
import { AnnualBudgetUncheckedCreateNestedManyWithoutApproved_userInput } from '../annual-budget/annual-budget-unchecked-create-nested-many-without-approved-user.input';
import { ProjectActivityLogUncheckedCreateNestedManyWithoutUserInput } from '../project-activity-log/project-activity-log-unchecked-create-nested-many-without-user.input';
import { ProjectActivityAssigneeUncheckedCreateNestedManyWithoutUserInput } from '../project-activity-assignee/project-activity-assignee-unchecked-create-nested-many-without-user.input';
import { DepartmentUncheckedCreateNestedManyWithoutLeaderInput } from '../department/department-unchecked-create-nested-many-without-leader.input';
import { ChurchUncheckedCreateNestedOneWithoutLeaderInput } from '../church/church-unchecked-create-nested-one-without-leader.input';

@InputType()
export class UserUncheckedCreateWithoutSubsidy_status_historyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => GenderType, {nullable:true})
    gender?: `${GenderType}`;

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

    @Field(() => String, {nullable:true})
    contact_id?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => String, {nullable:true})
    department_id?: string;

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    user_roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => DirectMessageUncheckedCreateNestedManyWithoutSenderInput, {nullable:true})
    direct_messages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput;

    @Field(() => DirectMessageRecipientUncheckedCreateNestedManyWithoutRecipient_userInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientUncheckedCreateNestedManyWithoutRecipient_userInput;

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

    @Field(() => VoluntariesOnProjectsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsUncheckedCreateNestedManyWithoutUserInput)
    voluntary_projects?: VoluntariesOnProjectsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    @Type(() => ProjectUncheckedCreateNestedManyWithoutOwnerInput)
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => AnnualBudgetUncheckedCreateNestedManyWithoutApproved_userInput, {nullable:true})
    @Type(() => AnnualBudgetUncheckedCreateNestedManyWithoutApproved_userInput)
    approved_annual_budgets?: AnnualBudgetUncheckedCreateNestedManyWithoutApproved_userInput;

    @Field(() => ProjectActivityLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ProjectActivityLogUncheckedCreateNestedManyWithoutUserInput)
    project_activity_logs?: ProjectActivityLogUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProjectActivityAssigneeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeUncheckedCreateNestedManyWithoutUserInput)
    activity_assignments?: ProjectActivityAssigneeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutLeaderInput, {nullable:true})
    @Type(() => DepartmentUncheckedCreateNestedManyWithoutLeaderInput)
    led_departments?: DepartmentUncheckedCreateNestedManyWithoutLeaderInput;

    @Field(() => ChurchUncheckedCreateNestedOneWithoutLeaderInput, {nullable:true})
    @Type(() => ChurchUncheckedCreateNestedOneWithoutLeaderInput)
    led_church?: ChurchUncheckedCreateNestedOneWithoutLeaderInput;
}
