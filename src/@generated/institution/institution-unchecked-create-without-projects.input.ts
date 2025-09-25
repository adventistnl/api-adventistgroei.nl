import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { RegionUncheckedCreateNestedManyWithoutInstitutionInput } from '../region/region-unchecked-create-nested-many-without-institution.input';
import { ChurchUncheckedCreateNestedManyWithoutInstitutionInput } from '../church/church-unchecked-create-nested-many-without-institution.input';
import { Type } from 'class-transformer';
import { DepartmentUncheckedCreateNestedManyWithoutInstitutionInput } from '../department/department-unchecked-create-nested-many-without-institution.input';
import { UserUncheckedCreateNestedManyWithoutInstitutionInput } from '../user/user-unchecked-create-nested-many-without-institution.input';
import { CommunicationUncheckedCreateNestedManyWithoutInstitutionInput } from '../communication/communication-unchecked-create-nested-many-without-institution.input';
import { NotificationUncheckedCreateNestedManyWithoutInstitutionInput } from '../notification/notification-unchecked-create-nested-many-without-institution.input';
import { SettingUncheckedCreateNestedManyWithoutInstitutionInput } from '../setting/setting-unchecked-create-nested-many-without-institution.input';
import { DirectMessageUncheckedCreateNestedManyWithoutInstitutionInput } from '../direct-message/direct-message-unchecked-create-nested-many-without-institution.input';
import { SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-institution.input';

@InputType()
export class InstitutionUncheckedCreateWithoutProjectsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    denomination!: string;

    @Field(() => String, {nullable:true})
    description?: string;

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

    @Field(() => RegionUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    regions?: RegionUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => ChurchUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => ChurchUncheckedCreateNestedManyWithoutInstitutionInput)
    churches?: ChurchUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => DepartmentUncheckedCreateNestedManyWithoutInstitutionInput)
    departments?: DepartmentUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedManyWithoutInstitutionInput)
    users?: UserUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => CommunicationUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    communications?: CommunicationUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => SettingUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    settings?: SettingUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => DirectMessageUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    direct_messages?: DirectMessageUncheckedCreateNestedManyWithoutInstitutionInput;

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput)
    subsidy_requests?: SubsidyRequestUncheckedCreateNestedManyWithoutInstitutionInput;
}
