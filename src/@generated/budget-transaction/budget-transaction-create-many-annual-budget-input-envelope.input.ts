import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateManyAnnual_budgetInput } from './budget-transaction-create-many-annual-budget.input';
import { Type } from 'class-transformer';

@InputType()
export class BudgetTransactionCreateManyAnnual_budgetInputEnvelope {

    @Field(() => [BudgetTransactionCreateManyAnnual_budgetInput], {nullable:false})
    @Type(() => BudgetTransactionCreateManyAnnual_budgetInput)
    data!: Array<BudgetTransactionCreateManyAnnual_budgetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
