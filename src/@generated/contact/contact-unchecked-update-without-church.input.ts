import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { InstitutionUncheckedUpdateOneWithoutContactNestedInput } from '../institution/institution-unchecked-update-one-without-contact-nested.input';
import { Type } from 'class-transformer';
import { RegionUncheckedUpdateManyWithoutContactNestedInput } from '../region/region-unchecked-update-many-without-contact-nested.input';
import { DepartmentUncheckedUpdateManyWithoutContactNestedInput } from '../department/department-unchecked-update-many-without-contact-nested.input';
import { UserUncheckedUpdateManyWithoutContactNestedInput } from '../user/user-unchecked-update-many-without-contact-nested.input';
import { EventUncheckedUpdateManyWithoutContactNestedInput } from '../event/event-unchecked-update-many-without-contact-nested.input';

@InputType()
export class ContactUncheckedUpdateWithoutChurchInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mobile?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    city?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    full_address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postal_code?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_primary?: BoolFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUncheckedUpdateOneWithoutContactNestedInput, {nullable:true})
    @Type(() => InstitutionUncheckedUpdateOneWithoutContactNestedInput)
    Institution?: InstitutionUncheckedUpdateOneWithoutContactNestedInput;

    @Field(() => RegionUncheckedUpdateManyWithoutContactNestedInput, {nullable:true})
    @Type(() => RegionUncheckedUpdateManyWithoutContactNestedInput)
    Region?: RegionUncheckedUpdateManyWithoutContactNestedInput;

    @Field(() => DepartmentUncheckedUpdateManyWithoutContactNestedInput, {nullable:true})
    @Type(() => DepartmentUncheckedUpdateManyWithoutContactNestedInput)
    Department?: DepartmentUncheckedUpdateManyWithoutContactNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutContactNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateManyWithoutContactNestedInput)
    User?: UserUncheckedUpdateManyWithoutContactNestedInput;

    @Field(() => EventUncheckedUpdateManyWithoutContactNestedInput, {nullable:true})
    @Type(() => EventUncheckedUpdateManyWithoutContactNestedInput)
    Event?: EventUncheckedUpdateManyWithoutContactNestedInput;
}
