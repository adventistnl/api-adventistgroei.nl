import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutRegionsNestedInput } from '../institution/institution-update-one-required-without-regions-nested.input';
import { Type } from 'class-transformer';
import { RegionUpdateOneWithoutChildrenNestedInput } from './region-update-one-without-children-nested.input';
import { RegionUpdateManyWithoutParent_regionNestedInput } from './region-update-many-without-parent-region-nested.input';
import { ContactUpdateOneWithoutRegionNestedInput } from '../contact/contact-update-one-without-region-nested.input';
import { ChurchUpdateManyWithoutRegionNestedInput } from '../church/church-update-many-without-region-nested.input';

@InputType()
export class RegionUpdateWithoutAnnual_budgetInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutRegionsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutRegionsNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutRegionsNestedInput;

    @Field(() => RegionUpdateOneWithoutChildrenNestedInput, {nullable:true})
    @Type(() => RegionUpdateOneWithoutChildrenNestedInput)
    parent_region?: RegionUpdateOneWithoutChildrenNestedInput;

    @Field(() => RegionUpdateManyWithoutParent_regionNestedInput, {nullable:true})
    @Type(() => RegionUpdateManyWithoutParent_regionNestedInput)
    children?: RegionUpdateManyWithoutParent_regionNestedInput;

    @Field(() => ContactUpdateOneWithoutRegionNestedInput, {nullable:true})
    @Type(() => ContactUpdateOneWithoutRegionNestedInput)
    contact?: ContactUpdateOneWithoutRegionNestedInput;

    @Field(() => ChurchUpdateManyWithoutRegionNestedInput, {nullable:true})
    @Type(() => ChurchUpdateManyWithoutRegionNestedInput)
    churches?: ChurchUpdateManyWithoutRegionNestedInput;
}
