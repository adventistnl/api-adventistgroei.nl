import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EnumTransferTypeFieldUpdateOperationsInput } from '../prisma/enum-transfer-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AnnualBudgetUpdateOneWithoutTransfers_outNestedInput } from '../annual-budget/annual-budget-update-one-without-transfers-out-nested.input';

@InputType()
export class BudgetTransferUpdateWithoutTo_budgetInput {

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

    @Field(() => AnnualBudgetUpdateOneWithoutTransfers_outNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateOneWithoutTransfers_outNestedInput)
    from_budget?: AnnualBudgetUpdateOneWithoutTransfers_outNestedInput;
}
