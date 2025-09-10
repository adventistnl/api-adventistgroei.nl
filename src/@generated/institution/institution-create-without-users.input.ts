import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ContactCreateNestedOneWithoutInstitutionInput } from '../contact/contact-create-nested-one-without-institution.input';
import { Type } from 'class-transformer';
import { RegionCreateNestedManyWithoutInstitutionInput } from '../region/region-create-nested-many-without-institution.input';
import { ChurchCreateNestedManyWithoutInstitutionInput } from '../church/church-create-nested-many-without-institution.input';
import { DepartmentCreateNestedManyWithoutInstitutionInput } from '../department/department-create-nested-many-without-institution.input';
import { CommunicationCreateNestedManyWithoutInstitutionInput } from '../communication/communication-create-nested-many-without-institution.input';
import { NotificationCreateNestedManyWithoutInstitutionInput } from '../notification/notification-create-nested-many-without-institution.input';
import { SettingCreateNestedManyWithoutInstitutionInput } from '../setting/setting-create-nested-many-without-institution.input';
import { ProjectCreateNestedManyWithoutInstitutionInput } from '../project/project-create-nested-many-without-institution.input';
import { DirectMessageCreateNestedManyWithoutInstitutionInput } from '../direct-message/direct-message-create-nested-many-without-institution.input';
import { SubsidyRequestCreateNestedManyWithoutInstitutionInput } from '../subsidy-request/subsidy-request-create-nested-many-without-institution.input';

@InputType()
export class InstitutionCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    denomination!: string;

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

    @Field(() => ContactCreateNestedOneWithoutInstitutionInput, {nullable:true})
    @Type(() => ContactCreateNestedOneWithoutInstitutionInput)
    contact?: ContactCreateNestedOneWithoutInstitutionInput;

    @Field(() => RegionCreateNestedManyWithoutInstitutionInput, {nullable:true})
    regions?: RegionCreateNestedManyWithoutInstitutionInput;

    @Field(() => ChurchCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => ChurchCreateNestedManyWithoutInstitutionInput)
    churches?: ChurchCreateNestedManyWithoutInstitutionInput;

    @Field(() => DepartmentCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => DepartmentCreateNestedManyWithoutInstitutionInput)
    departments?: DepartmentCreateNestedManyWithoutInstitutionInput;

    @Field(() => CommunicationCreateNestedManyWithoutInstitutionInput, {nullable:true})
    communications?: CommunicationCreateNestedManyWithoutInstitutionInput;

    @Field(() => NotificationCreateNestedManyWithoutInstitutionInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutInstitutionInput;

    @Field(() => SettingCreateNestedManyWithoutInstitutionInput, {nullable:true})
    settings?: SettingCreateNestedManyWithoutInstitutionInput;

    @Field(() => ProjectCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => ProjectCreateNestedManyWithoutInstitutionInput)
    projects?: ProjectCreateNestedManyWithoutInstitutionInput;

    @Field(() => DirectMessageCreateNestedManyWithoutInstitutionInput, {nullable:true})
    direct_messages?: DirectMessageCreateNestedManyWithoutInstitutionInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutInstitutionInput)
    subsidy_requests?: SubsidyRequestCreateNestedManyWithoutInstitutionInput;
}
