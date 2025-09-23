import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EnumLanguagePreferenceFieldUpdateOperationsInput } from '../prisma/enum-language-preference-field-update-operations.input';
import { EnumProjectTypeFieldUpdateOperationsInput } from '../prisma/enum-project-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput } from '../project-activity/project-activity-unchecked-update-many-without-project-nested.input';
import { SubsidyRequestUncheckedUpdateManyWithoutProjectNestedInput } from '../subsidy-request/subsidy-request-unchecked-update-many-without-project-nested.input';

@InputType()
export class ProjectUncheckedUpdateWithoutVoluntary_usersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    budget?: DecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    media_link?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    owner_id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguagePreferenceFieldUpdateOperationsInput, {nullable:true})
    language_preference?: EnumLanguagePreferenceFieldUpdateOperationsInput;

    @Field(() => EnumProjectTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumProjectTypeFieldUpdateOperationsInput;

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    event_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    institution_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput)
    activities?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => SubsidyRequestUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedUpdateManyWithoutProjectNestedInput)
    subsidies?: SubsidyRequestUncheckedUpdateManyWithoutProjectNestedInput;
}
