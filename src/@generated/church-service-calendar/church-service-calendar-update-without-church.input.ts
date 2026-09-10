import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumServiceCalendarSourceFieldUpdateOperationsInput } from '../prisma/enum-service-calendar-source-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutChurch_service_calendar_entriesNestedInput } from '../institution/institution-update-one-required-without-church-service-calendar-entries-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchServiceCalendarUpdateWithoutChurchInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    has_service?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumServiceCalendarSourceFieldUpdateOperationsInput, {nullable:true})
    source?: EnumServiceCalendarSourceFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: StringFieldUpdateOperationsInput;

    @Field(() => InstitutionUpdateOneRequiredWithoutChurch_service_calendar_entriesNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutChurch_service_calendar_entriesNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutChurch_service_calendar_entriesNestedInput;
}
