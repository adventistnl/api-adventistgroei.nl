import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransferCreateManyFrom_budgetInput } from './budget-transfer-create-many-from-budget.input';
import { Type } from 'class-transformer';

@InputType()
export class BudgetTransferCreateManyFrom_budgetInputEnvelope {

    @Field(() => [BudgetTransferCreateManyFrom_budgetInput], {nullable:false})
    @Type(() => BudgetTransferCreateManyFrom_budgetInput)
    data!: Array<BudgetTransferCreateManyFrom_budgetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
