import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutBudget_transactionsInput } from './subsidy-request-create-without-budget-transactions.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutBudget_transactionsInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutBudget_transactionsInput)
    create!: SubsidyRequestCreateWithoutBudget_transactionsInput;
}
