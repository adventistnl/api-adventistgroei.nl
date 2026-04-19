import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BudgetTransactionType } from '../prisma/budget-transaction-type.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { AnnualBudget } from '../annual-budget/annual-budget.model';
import { Project } from '../project/project.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';

@ObjectType()
export class BudgetTransaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    annual_budget_id!: string;

    @Field(() => BudgetTransactionType, {nullable:false})
    type!: `${BudgetTransactionType}`;

    @Field(() => GraphQLDecimal, {defaultValue:0,nullable:false})
    delta_allocated!: Decimal;

    @Field(() => GraphQLDecimal, {defaultValue:0,nullable:false})
    delta_expenses!: Decimal;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    project_id!: string | null;

    @Field(() => String, {nullable:true})
    subsidy_request_id!: string | null;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => AnnualBudget, {nullable:false})
    annual_budget?: AnnualBudget;

    @Field(() => Project, {nullable:true})
    project?: Project | null;

    @Field(() => SubsidyRequest, {nullable:true})
    subsidy_request?: SubsidyRequest | null;
}
