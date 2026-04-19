import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutTransactionsInput } from './annual-budget-update-without-transactions.input';

@InputType()
export class AnnualBudgetUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutTransactionsInput)
    data!: AnnualBudgetUpdateWithoutTransactionsInput;
}
