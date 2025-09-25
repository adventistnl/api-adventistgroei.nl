import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { Contact } from '../contact/contact.model';
import { Region } from '../region/region.model';
import { Church } from '../church/church.model';
import { Department } from '../department/department.model';
import { User } from '../user/user.model';
import { Communication } from '../communication/communication.model';
import { Notification } from '../notification/notification.model';
import { Setting } from '../setting/setting.model';
import { Project } from '../project/project.model';
import { DirectMessage } from '../direct-message/direct-message.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { InstitutionCount } from './institution-count.output';

@ObjectType()
export class Institution {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    denomination!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => String, {nullable:true})
    contact_id!: string | null;

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

    @Field(() => Contact, {nullable:true})
    contact?: Contact | null;

    @Field(() => [Region], {nullable:true})
    regions?: Array<Region>;

    @Field(() => [Church], {nullable:true})
    churches?: Array<Church>;

    @Field(() => [Department], {nullable:true})
    departments?: Array<Department>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [Communication], {nullable:true})
    communications?: Array<Communication>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => [Setting], {nullable:true})
    settings?: Array<Setting>;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => [DirectMessage], {nullable:true})
    direct_messages?: Array<DirectMessage>;

    @Field(() => [SubsidyRequest], {nullable:true})
    subsidy_requests?: Array<SubsidyRequest>;

    @Field(() => InstitutionCount, {nullable:false})
    _count?: InstitutionCount;
}
