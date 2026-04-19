import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionType } from '../prisma/budget-transaction-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProjectCreateNestedOneWithoutBudget_transactionsInput } from '../project/project-create-nested-one-without-budget-transactions.input';
import { SubsidyRequestCreateNestedOneWithoutBudget_transactionsInput } from '../subsidy-request/subsidy-request-create-nested-one-without-budget-transactions.input';

@InputType()
export class BudgetTransactionCreateWithoutAnnual_budgetInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => BudgetTransactionType, {nullable:false})
    type!: `${BudgetTransactionType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    delta_allocated?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    delta_expenses?: Decimal;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ProjectCreateNestedOneWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => ProjectCreateNestedOneWithoutBudget_transactionsInput)
    project?: ProjectCreateNestedOneWithoutBudget_transactionsInput;

    @Field(() => SubsidyRequestCreateNestedOneWithoutBudget_transactionsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedOneWithoutBudget_transactionsInput)
    subsidy_request?: SubsidyRequestCreateNestedOneWithoutBudget_transactionsInput;
}
