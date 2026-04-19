import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetUpdateWithoutTransactionsInput } from './annual-budget-update-without-transactions.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutTransactionsInput } from './annual-budget-create-without-transactions.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';

@InputType()
export class AnnualBudgetUpsertWithoutTransactionsInput {

    @Field(() => AnnualBudgetUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutTransactionsInput)
    update!: AnnualBudgetUpdateWithoutTransactionsInput;

    @Field(() => AnnualBudgetCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutTransactionsInput)
    create!: AnnualBudgetCreateWithoutTransactionsInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;
}
