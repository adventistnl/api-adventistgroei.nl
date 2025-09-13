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
import { DepartmentUpdateOneRequiredWithoutProjectsNestedInput } from '../department/department-update-one-required-without-projects-nested.input';
import { EventUpdateOneWithoutProjectsNestedInput } from '../event/event-update-one-without-projects-nested.input';
import { InstitutionUpdateOneWithoutProjectsNestedInput } from '../institution/institution-update-one-without-projects-nested.input';
import { ProjectActivityUpdateManyWithoutProjectNestedInput } from '../project-activity/project-activity-update-many-without-project-nested.input';
import { SubsidyRequestUpdateManyWithoutProjectNestedInput } from '../subsidy-request/subsidy-request-update-many-without-project-nested.input';

@InputType()
export class ProjectUpdateWithoutVoluntary_usersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    budget?: DecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    media_link?: StringFieldUpdateOperationsInput;

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

    @Field(() => DepartmentUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateOneRequiredWithoutProjectsNestedInput)
    department?: DepartmentUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => EventUpdateOneWithoutProjectsNestedInput, {nullable:true})
    @Type(() => EventUpdateOneWithoutProjectsNestedInput)
    event?: EventUpdateOneWithoutProjectsNestedInput;

    @Field(() => InstitutionUpdateOneWithoutProjectsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneWithoutProjectsNestedInput)
    Institution?: InstitutionUpdateOneWithoutProjectsNestedInput;

    @Field(() => ProjectActivityUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => ProjectActivityUpdateManyWithoutProjectNestedInput)
    activities?: ProjectActivityUpdateManyWithoutProjectNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutProjectNestedInput)
    subsidies?: SubsidyRequestUpdateManyWithoutProjectNestedInput;
}
