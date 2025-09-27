import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumAnnualBudgetStatusFieldUpdateOperationsInput } from '../prisma/enum-annual-budget-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { InstitutionUpdateManyWithoutAnnual_budgetNestedInput } from '../institution/institution-update-many-without-annual-budget-nested.input';
import { RegionUpdateManyWithoutAnnual_budgetNestedInput } from '../region/region-update-many-without-annual-budget-nested.input';
import { ChurchUpdateManyWithoutAnnual_budgetNestedInput } from '../church/church-update-many-without-annual-budget-nested.input';
import { DepartmentUpdateManyWithoutAnnual_budgetNestedInput } from '../department/department-update-many-without-annual-budget-nested.input';

@InputType()
export class AnnualBudgetUpdateWithoutApproved_userInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    year?: IntFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    planned_budget?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    total_expenses?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    balance?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumAnnualBudgetStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAnnualBudgetStatusFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateManyWithoutAnnual_budgetNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateManyWithoutAnnual_budgetNestedInput)
    institutions?: InstitutionUpdateManyWithoutAnnual_budgetNestedInput;

    @Field(() => RegionUpdateManyWithoutAnnual_budgetNestedInput, {nullable:true})
    @Type(() => RegionUpdateManyWithoutAnnual_budgetNestedInput)
    regions?: RegionUpdateManyWithoutAnnual_budgetNestedInput;

    @Field(() => ChurchUpdateManyWithoutAnnual_budgetNestedInput, {nullable:true})
    @Type(() => ChurchUpdateManyWithoutAnnual_budgetNestedInput)
    churches?: ChurchUpdateManyWithoutAnnual_budgetNestedInput;

    @Field(() => DepartmentUpdateManyWithoutAnnual_budgetNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateManyWithoutAnnual_budgetNestedInput)
    departments?: DepartmentUpdateManyWithoutAnnual_budgetNestedInput;
}
