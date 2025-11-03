import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GenderType } from '../prisma/gender-type.enum';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { Contact } from '../contact/contact.model';
import { Institution } from '../institution/institution.model';
import { Church } from '../church/church.model';
import { Department } from '../department/department.model';
import { UserRole } from '../user-role/user-role.model';
import { DirectMessage } from '../direct-message/direct-message.model';
import { DirectMessageRecipient } from '../direct-message-recipient/direct-message-recipient.model';
import { Notification } from '../notification/notification.model';
import { EventRegistration } from '../event-registration/event-registration.model';
import { EventRecipient } from '../event-recipient/event-recipient.model';
import { Communication } from '../communication/communication.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { SubsidyStatus } from '../subsidy-status/subsidy-status.model';
import { VoluntariesOnProjects } from '../voluntaries-on-projects/voluntaries-on-projects.model';
import { Project } from '../project/project.model';
import { AnnualBudget } from '../annual-budget/annual-budget.model';
import { ProjectActivity } from '../project-activity/project-activity.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => GenderType, {defaultValue:'MALE',nullable:true})
    gender!: `${GenderType}` | null;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => String, {nullable:true})
    contact_id!: string | null;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:true})
    church_id!: string | null;

    @Field(() => String, {nullable:true})
    department_id!: string | null;

    @Field(() => Contact, {nullable:true})
    contact?: Contact | null;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => Church, {nullable:true})
    church?: Church | null;

    @Field(() => Department, {nullable:true})
    department?: Department | null;

    @Field(() => [UserRole], {nullable:true})
    user_roles?: Array<UserRole>;

    @Field(() => [DirectMessage], {nullable:true})
    direct_messages?: Array<DirectMessage>;

    @Field(() => [DirectMessageRecipient], {nullable:true})
    direct_message_recipients?: Array<DirectMessageRecipient>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => [EventRegistration], {nullable:true})
    event_registrations?: Array<EventRegistration>;

    @Field(() => [EventRecipient], {nullable:true})
    event_recipients?: Array<EventRecipient>;

    @Field(() => [Communication], {nullable:true})
    communications?: Array<Communication>;

    @Field(() => [SubsidyRequest], {nullable:true})
    SubsidyRequest?: Array<SubsidyRequest>;

    @Field(() => [SubsidyStatus], {nullable:true})
    SubsidyStatus?: Array<SubsidyStatus>;

    @Field(() => [VoluntariesOnProjects], {nullable:true})
    voluntary_projects?: Array<VoluntariesOnProjects>;

    @Field(() => [Project], {nullable:true})
    Project?: Array<Project>;

    @Field(() => [AnnualBudget], {nullable:true})
    approved_annual_budgets?: Array<AnnualBudget>;

    @Field(() => [ProjectActivity], {nullable:true})
    project_activities?: Array<ProjectActivity>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
