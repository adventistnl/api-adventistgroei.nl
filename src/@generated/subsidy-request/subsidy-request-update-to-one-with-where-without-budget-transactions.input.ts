import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutBudget_transactionsInput } from './subsidy-request-update-without-budget-transactions.input';

@InputType()
export class SubsidyRequestUpdateToOneWithWhereWithoutBudget_transactionsInput {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestUpdateWithoutBudget_transactionsInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutBudget_transactionsInput)
    data!: SubsidyRequestUpdateWithoutBudget_transactionsInput;
}
