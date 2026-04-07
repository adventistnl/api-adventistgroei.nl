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
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { EnumAnnualBudgetPriorityFieldUpdateOperationsInput } from '../prisma/enum-annual-budget-priority-field-update-operations.input';
import { EnumAnnualBudgetCategoryFieldUpdateOperationsInput } from '../prisma/enum-annual-budget-category-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { EnumAnnualBudgetEntityTypeFieldUpdateOperationsInput } from '../prisma/enum-annual-budget-entity-type-field-update-operations.input';
import { UserUpdateOneWithoutApproved_annual_budgetsNestedInput } from '../user/user-update-one-without-approved-annual-budgets-nested.input';
import { InstitutionUpdateOneWithoutAnnual_budgetsNestedInput } from '../institution/institution-update-one-without-annual-budgets-nested.input';
import { DepartmentUpdateOneWithoutAnnual_budgetsNestedInput } from '../department/department-update-one-without-annual-budgets-nested.input';
import { BudgetTransactionUpdateManyWithoutAnnual_budgetNestedInput } from '../budget-transaction/budget-transaction-update-many-without-annual-budget-nested.input';
import { BudgetTransferUpdateManyWithoutFrom_budgetNestedInput } from '../budget-transfer/budget-transfer-update-many-without-from-budget-nested.input';
import { BudgetTransferUpdateManyWithoutTo_budgetNestedInput } from '../budget-transfer/budget-transfer-update-many-without-to-budget-nested.input';

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

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    allocated_amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    approved_amount?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    requested_by?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reviewed_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    submitted_date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    review_date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    approval_date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumAnnualBudgetPriorityFieldUpdateOperationsInput, {nullable:true})
    priority?: EnumAnnualBudgetPriorityFieldUpdateOperationsInput;

    @Field(() => EnumAnnualBudgetCategoryFieldUpdateOperationsInput, {nullable:true})
    category?: EnumAnnualBudgetCategoryFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    documents?: any;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_locked?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    has_budget_record?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumAnnualBudgetEntityTypeFieldUpdateOperationsInput, {nullable:true})
    entity_type?: EnumAnnualBudgetEntityTypeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutApproved_annual_budgetsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutApproved_annual_budgetsNestedInput)
    approved_user?: UserUpdateOneWithoutApproved_annual_budgetsNestedInput;

    @Field(() => InstitutionUpdateOneWithoutAnnual_budgetsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneWithoutAnnual_budgetsNestedInput)
    institution?: InstitutionUpdateOneWithoutAnnual_budgetsNestedInput;

    @Field(() => DepartmentUpdateOneWithoutAnnual_budgetsNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateOneWithoutAnnual_budgetsNestedInput)
    department?: DepartmentUpdateOneWithoutAnnual_budgetsNestedInput;

    @Field(() => BudgetTransactionUpdateManyWithoutAnnual_budgetNestedInput, {nullable:true})
    @Type(() => BudgetTransactionUpdateManyWithoutAnnual_budgetNestedInput)
    transactions?: BudgetTransactionUpdateManyWithoutAnnual_budgetNestedInput;

    @Field(() => BudgetTransferUpdateManyWithoutFrom_budgetNestedInput, {nullable:true})
    @Type(() => BudgetTransferUpdateManyWithoutFrom_budgetNestedInput)
    transfers_out?: BudgetTransferUpdateManyWithoutFrom_budgetNestedInput;

    @Field(() => BudgetTransferUpdateManyWithoutTo_budgetNestedInput, {nullable:true})
    @Type(() => BudgetTransferUpdateManyWithoutTo_budgetNestedInput)
    transfers_in?: BudgetTransferUpdateManyWithoutTo_budgetNestedInput;
}
