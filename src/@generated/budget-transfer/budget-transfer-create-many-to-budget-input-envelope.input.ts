import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransferCreateManyTo_budgetInput } from './budget-transfer-create-many-to-budget.input';
import { Type } from 'class-transformer';

@InputType()
export class BudgetTransferCreateManyTo_budgetInputEnvelope {

    @Field(() => [BudgetTransferCreateManyTo_budgetInput], {nullable:false})
    @Type(() => BudgetTransferCreateManyTo_budgetInput)
    data!: Array<BudgetTransferCreateManyTo_budgetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
