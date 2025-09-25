import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumLanguagePreferenceFieldUpdateOperationsInput } from '../prisma/enum-language-preference-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ContactUpdateOneWithoutInstitutionNestedInput } from '../contact/contact-update-one-without-institution-nested.input';
import { Type } from 'class-transformer';
import { RegionUpdateManyWithoutInstitutionNestedInput } from '../region/region-update-many-without-institution-nested.input';
import { ChurchUpdateManyWithoutInstitutionNestedInput } from '../church/church-update-many-without-institution-nested.input';
import { DepartmentUpdateManyWithoutInstitutionNestedInput } from '../department/department-update-many-without-institution-nested.input';
import { UserUpdateManyWithoutInstitutionNestedInput } from '../user/user-update-many-without-institution-nested.input';
import { CommunicationUpdateManyWithoutInstitutionNestedInput } from '../communication/communication-update-many-without-institution-nested.input';
import { NotificationUpdateManyWithoutInstitutionNestedInput } from '../notification/notification-update-many-without-institution-nested.input';
import { SettingUpdateManyWithoutInstitutionNestedInput } from '../setting/setting-update-many-without-institution-nested.input';
import { ProjectUpdateManyWithoutInstitutionNestedInput } from '../project/project-update-many-without-institution-nested.input';
import { DirectMessageUpdateManyWithoutInstitutionNestedInput } from '../direct-message/direct-message-update-many-without-institution-nested.input';

@InputType()
export class InstitutionUpdateWithoutSubsidy_requestsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    denomination?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => ContactUpdateOneWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => ContactUpdateOneWithoutInstitutionNestedInput)
    contact?: ContactUpdateOneWithoutInstitutionNestedInput;

    @Field(() => RegionUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    regions?: RegionUpdateManyWithoutInstitutionNestedInput;

    @Field(() => ChurchUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => ChurchUpdateManyWithoutInstitutionNestedInput)
    churches?: ChurchUpdateManyWithoutInstitutionNestedInput;

    @Field(() => DepartmentUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateManyWithoutInstitutionNestedInput)
    departments?: DepartmentUpdateManyWithoutInstitutionNestedInput;

    @Field(() => UserUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => UserUpdateManyWithoutInstitutionNestedInput)
    users?: UserUpdateManyWithoutInstitutionNestedInput;

    @Field(() => CommunicationUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    communications?: CommunicationUpdateManyWithoutInstitutionNestedInput;

    @Field(() => NotificationUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutInstitutionNestedInput;

    @Field(() => SettingUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    settings?: SettingUpdateManyWithoutInstitutionNestedInput;

    @Field(() => ProjectUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    @Type(() => ProjectUpdateManyWithoutInstitutionNestedInput)
    projects?: ProjectUpdateManyWithoutInstitutionNestedInput;

    @Field(() => DirectMessageUpdateManyWithoutInstitutionNestedInput, {nullable:true})
    direct_messages?: DirectMessageUpdateManyWithoutInstitutionNestedInput;
}
