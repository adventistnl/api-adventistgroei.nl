import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChurchTypeFieldUpdateOperationsInput } from '../prisma/enum-church-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutChurchesNestedInput } from '../institution/institution-update-one-required-without-churches-nested.input';
import { Type } from 'class-transformer';
import { RegionUpdateOneRequiredWithoutChurchesNestedInput } from '../region/region-update-one-required-without-churches-nested.input';
import { ContactUpdateOneWithoutChurchNestedInput } from '../contact/contact-update-one-without-church-nested.input';
import { DepartmentUpdateManyWithoutChurchNestedInput } from '../department/department-update-many-without-church-nested.input';
import { UserUpdateManyWithoutChurchNestedInput } from '../user/user-update-many-without-church-nested.input';
import { SubsidyRequestUpdateManyWithoutChurchNestedInput } from '../subsidy-request/subsidy-request-update-many-without-church-nested.input';

@InputType()
export class ChurchUpdateWithoutAnnual_budgetsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChurchTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChurchTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutChurchesNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutChurchesNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutChurchesNestedInput;

    @Field(() => RegionUpdateOneRequiredWithoutChurchesNestedInput, {nullable:true})
    @Type(() => RegionUpdateOneRequiredWithoutChurchesNestedInput)
    region?: RegionUpdateOneRequiredWithoutChurchesNestedInput;

    @Field(() => ContactUpdateOneWithoutChurchNestedInput, {nullable:true})
    @Type(() => ContactUpdateOneWithoutChurchNestedInput)
    contact?: ContactUpdateOneWithoutChurchNestedInput;

    @Field(() => DepartmentUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateManyWithoutChurchNestedInput)
    departments?: DepartmentUpdateManyWithoutChurchNestedInput;

    @Field(() => UserUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => UserUpdateManyWithoutChurchNestedInput)
    users?: UserUpdateManyWithoutChurchNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutChurchNestedInput)
    subsidy_requests?: SubsidyRequestUpdateManyWithoutChurchNestedInput;
}
