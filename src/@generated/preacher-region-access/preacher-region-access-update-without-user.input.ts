import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutPreacher_region_accessNestedInput } from '../institution/institution-update-one-required-without-preacher-region-access-nested.input';
import { Type } from 'class-transformer';
import { RegionUpdateOneRequiredWithoutPreacher_region_accessNestedInput } from '../region/region-update-one-required-without-preacher-region-access-nested.input';

@InputType()
export class PreacherRegionAccessUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => InstitutionUpdateOneRequiredWithoutPreacher_region_accessNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutPreacher_region_accessNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutPreacher_region_accessNestedInput;

    @Field(() => RegionUpdateOneRequiredWithoutPreacher_region_accessNestedInput, {nullable:true})
    region?: RegionUpdateOneRequiredWithoutPreacher_region_accessNestedInput;
}
