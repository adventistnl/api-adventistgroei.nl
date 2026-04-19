import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutBudget_transactionsInput } from './subsidy-request-create-without-budget-transactions.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput } from './subsidy-request-create-or-connect-without-budget-transactions.input';
import { SubsidyRequestUpsertWithoutBudget_transactionsInput } from './subsidy-request-upsert-without-budget-transactions.input';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateToOneWithWhereWithoutBudget_transactionsInput } from './subsidy-request-update-to-one-with-where-without-budget-transactions.input';

@InputType()
export class SubsidyRequestUpdateOneWithoutBudget_transactionsNestedInput {

    @Field(() => SubsidyRequestCreateWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutBudget_transactionsInput)
    create?: SubsidyRequestCreateWithoutBudget_transactionsInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutBudget_transactionsInput;

    @Field(() => SubsidyRequestUpsertWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => SubsidyRequestUpsertWithoutBudget_transactionsInput)
    upsert?: SubsidyRequestUpsertWithoutBudget_transactionsInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    disconnect?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    delete?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateToOneWithWhereWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateToOneWithWhereWithoutBudget_transactionsInput)
    update?: SubsidyRequestUpdateToOneWithWhereWithoutBudget_transactionsInput;
}
