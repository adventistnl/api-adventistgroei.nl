import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumAnnualBudgetStatusFieldUpdateOperationsInput } from '../prisma/enum-annual-budget-status-field-update-operations.input';
import { UserUpdateOneWithoutApproved_annual_budgetsNestedInput } from '../user/user-update-one-without-approved-annual-budgets-nested.input';
import { InstitutionUpdateOneWithoutAnnual_budgetsNestedInput } from '../institution/institution-update-one-without-annual-budgets-nested.input';
import { RegionUpdateOneWithoutAnnual_budgetsNestedInput } from '../region/region-update-one-without-annual-budgets-nested.input';
import { DepartmentUpdateOneWithoutAnnual_budgetsNestedInput } from '../department/department-update-one-without-annual-budgets-nested.input';

@InputType()
export class AnnualBudgetUpdateWithoutChurchInput {

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
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    justification?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => EnumAnnualBudgetStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAnnualBudgetStatusFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutApproved_annual_budgetsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutApproved_annual_budgetsNestedInput)
    approved_user?: UserUpdateOneWithoutApproved_annual_budgetsNestedInput;

    @Field(() => InstitutionUpdateOneWithoutAnnual_budgetsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneWithoutAnnual_budgetsNestedInput)
    institution?: InstitutionUpdateOneWithoutAnnual_budgetsNestedInput;

    @Field(() => RegionUpdateOneWithoutAnnual_budgetsNestedInput, {nullable:true})
    @Type(() => RegionUpdateOneWithoutAnnual_budgetsNestedInput)
    region?: RegionUpdateOneWithoutAnnual_budgetsNestedInput;

    @Field(() => DepartmentUpdateOneWithoutAnnual_budgetsNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateOneWithoutAnnual_budgetsNestedInput)
    department?: DepartmentUpdateOneWithoutAnnual_budgetsNestedInput;
}
