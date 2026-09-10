import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumServiceCalendarSourceFieldUpdateOperationsInput } from '../prisma/enum-service-calendar-source-field-update-operations.input';
import { ChurchUpdateOneRequiredWithoutService_calendarNestedInput } from '../church/church-update-one-required-without-service-calendar-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchServiceCalendarUpdateWithoutInstitutionInput {

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

    @Field(() => ChurchUpdateOneRequiredWithoutService_calendarNestedInput, {nullable:true})
    @Type(() => ChurchUpdateOneRequiredWithoutService_calendarNestedInput)
    church?: ChurchUpdateOneRequiredWithoutService_calendarNestedInput;
}
