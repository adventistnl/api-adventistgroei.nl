import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutBudget_transactionsInput } from './subsidy-request-create-without-budget-transactions.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput } from './subsidy-request-create-or-connect-without-budget-transactions.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestCreateNestedOneWithoutBudget_transactionsInput {

    @Field(() => SubsidyRequestCreateWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutBudget_transactionsInput)
    create?: SubsidyRequestCreateWithoutBudget_transactionsInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;
}
