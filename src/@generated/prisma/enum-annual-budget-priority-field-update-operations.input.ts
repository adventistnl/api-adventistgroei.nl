import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetPriority } from './annual-budget-priority.enum';

@InputType()
export class EnumAnnualBudgetPriorityFieldUpdateOperationsInput {

    @Field(() => AnnualBudgetPriority, {nullable:true})
    set?: `${AnnualBudgetPriority}`;
}
