import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLanguagePreferenceFieldUpdateOperationsInput } from '../prisma/enum-language-preference-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutCommunicationsNestedInput } from '../institution/institution-update-one-required-without-communications-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutCommunicationsNestedInput } from '../user/user-update-one-required-without-communications-nested.input';
import { CommunicationRecipientUpdateManyWithoutCommunicationNestedInput } from '../communication-recipient/communication-recipient-update-many-without-communication-nested.input';

@InputType()
export class CommunicationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    priority?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguagePreferenceFieldUpdateOperationsInput, {nullable:true})
    language_preference?: EnumLanguagePreferenceFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    schedule_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    published_at?: DateTimeFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutCommunicationsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutCommunicationsNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutCommunicationsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCommunicationsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutCommunicationsNestedInput)
    author?: UserUpdateOneRequiredWithoutCommunicationsNestedInput;

    @Field(() => CommunicationRecipientUpdateManyWithoutCommunicationNestedInput, {nullable:true})
    communication_recipients?: CommunicationRecipientUpdateManyWithoutCommunicationNestedInput;
}
