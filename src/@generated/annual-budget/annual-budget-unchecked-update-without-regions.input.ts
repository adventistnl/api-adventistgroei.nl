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
import { InstitutionUncheckedUpdateManyWithoutAnnual_budgetNestedInput } from '../institution/institution-unchecked-update-many-without-annual-budget-nested.input';
import { ChurchUncheckedUpdateManyWithoutAnnual_budgetNestedInput } from '../church/church-unchecked-update-many-without-annual-budget-nested.input';
import { DepartmentUncheckedUpdateManyWithoutAnnual_budgetNestedInput } from '../department/department-unchecked-update-many-without-annual-budget-nested.input';

@InputType()
export class AnnualBudgetUncheckedUpdateWithoutRegionsInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    approved_by?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUncheckedUpdateManyWithoutAnnual_budgetNestedInput, {nullable:true})
    @Type(() => InstitutionUncheckedUpdateManyWithoutAnnual_budgetNestedInput)
    institutions?: InstitutionUncheckedUpdateManyWithoutAnnual_budgetNestedInput;

    @Field(() => ChurchUncheckedUpdateManyWithoutAnnual_budgetNestedInput, {nullable:true})
    @Type(() => ChurchUncheckedUpdateManyWithoutAnnual_budgetNestedInput)
    churches?: ChurchUncheckedUpdateManyWithoutAnnual_budgetNestedInput;

    @Field(() => DepartmentUncheckedUpdateManyWithoutAnnual_budgetNestedInput, {nullable:true})
    @Type(() => DepartmentUncheckedUpdateManyWithoutAnnual_budgetNestedInput)
    departments?: DepartmentUncheckedUpdateManyWithoutAnnual_budgetNestedInput;
}
