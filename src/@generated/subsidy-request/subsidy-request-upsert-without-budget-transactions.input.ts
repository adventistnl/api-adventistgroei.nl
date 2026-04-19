import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestUpdateWithoutBudget_transactionsInput } from './subsidy-request-update-without-budget-transactions.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutBudget_transactionsInput } from './subsidy-request-create-without-budget-transactions.input';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';

@InputType()
export class SubsidyRequestUpsertWithoutBudget_transactionsInput {

    @Field(() => SubsidyRequestUpdateWithoutBudget_transactionsInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutBudget_transactionsInput)
    update!: SubsidyRequestUpdateWithoutBudget_transactionsInput;

    @Field(() => SubsidyRequestCreateWithoutBudget_transactionsInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutBudget_transactionsInput)
    create!: SubsidyRequestCreateWithoutBudget_transactionsInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;
}
