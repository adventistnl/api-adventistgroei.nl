import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetStatus } from './annual-budget-status.enum';

@InputType()
export class EnumAnnualBudgetStatusFieldUpdateOperationsInput {

    @Field(() => AnnualBudgetStatus, {nullable:true})
    set?: `${AnnualBudgetStatus}`;
}
