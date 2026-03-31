import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumBudgetTransactionTypeFieldUpdateOperationsInput } from '../prisma/enum-budget-transaction-type-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AnnualBudgetUpdateOneRequiredWithoutTransactionsNestedInput } from '../annual-budget/annual-budget-update-one-required-without-transactions-nested.input';
import { ProjectUpdateOneWithoutBudget_transactionsNestedInput } from '../project/project-update-one-without-budget-transactions-nested.input';
import { SubsidyRequestUpdateOneWithoutBudget_transactionsNestedInput } from '../subsidy-request/subsidy-request-update-one-without-budget-transactions-nested.input';

@InputType()
export class BudgetTransactionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumBudgetTransactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumBudgetTransactionTypeFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    delta_allocated?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    delta_expenses?: DecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AnnualBudgetUpdateOneRequiredWithoutTransactionsNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateOneRequiredWithoutTransactionsNestedInput)
    annual_budget?: AnnualBudgetUpdateOneRequiredWithoutTransactionsNestedInput;

    @Field(() => ProjectUpdateOneWithoutBudget_transactionsNestedInput, {nullable:true})
    @Type(() => ProjectUpdateOneWithoutBudget_transactionsNestedInput)
    project?: ProjectUpdateOneWithoutBudget_transactionsNestedInput;

    @Field(() => SubsidyRequestUpdateOneWithoutBudget_transactionsNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateOneWithoutBudget_transactionsNestedInput)
    subsidy_request?: SubsidyRequestUpdateOneWithoutBudget_transactionsNestedInput;
}
