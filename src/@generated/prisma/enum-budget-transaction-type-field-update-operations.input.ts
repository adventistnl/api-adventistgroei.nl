import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionType } from './budget-transaction-type.enum';

@InputType()
export class EnumBudgetTransactionTypeFieldUpdateOperationsInput {

    @Field(() => BudgetTransactionType, {nullable:true})
    set?: `${BudgetTransactionType}`;
}
