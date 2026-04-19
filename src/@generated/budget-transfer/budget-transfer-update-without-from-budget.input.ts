import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EnumTransferTypeFieldUpdateOperationsInput } from '../prisma/enum-transfer-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AnnualBudgetUpdateOneWithoutTransfers_inNestedInput } from '../annual-budget/annual-budget-update-one-without-transfers-in-nested.input';

@InputType()
export class BudgetTransferUpdateWithoutFrom_budgetInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => EnumTransferTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTransferTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => AnnualBudgetUpdateOneWithoutTransfers_inNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateOneWithoutTransfers_inNestedInput)
    to_budget?: AnnualBudgetUpdateOneWithoutTransfers_inNestedInput;
}
