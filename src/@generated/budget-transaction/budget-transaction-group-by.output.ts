import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BudgetTransactionType } from '../prisma/budget-transaction-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { BudgetTransactionCountAggregate } from './budget-transaction-count-aggregate.output';
import { BudgetTransactionAvgAggregate } from './budget-transaction-avg-aggregate.output';
import { BudgetTransactionSumAggregate } from './budget-transaction-sum-aggregate.output';
import { BudgetTransactionMinAggregate } from './budget-transaction-min-aggregate.output';
import { BudgetTransactionMaxAggregate } from './budget-transaction-max-aggregate.output';

@ObjectType()
export class BudgetTransactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    annual_budget_id!: string;

    @Field(() => BudgetTransactionType, {nullable:false})
    type!: `${BudgetTransactionType}`;

    @Field(() => GraphQLDecimal, {nullable:false})
    delta_allocated!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    delta_expenses!: Decimal;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    project_id?: string;

    @Field(() => String, {nullable:true})
    subsidy_request_id?: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => BudgetTransactionCountAggregate, {nullable:true})
    _count?: BudgetTransactionCountAggregate;

    @Field(() => BudgetTransactionAvgAggregate, {nullable:true})
    _avg?: BudgetTransactionAvgAggregate;

    @Field(() => BudgetTransactionSumAggregate, {nullable:true})
    _sum?: BudgetTransactionSumAggregate;

    @Field(() => BudgetTransactionMinAggregate, {nullable:true})
    _min?: BudgetTransactionMinAggregate;

    @Field(() => BudgetTransactionMaxAggregate, {nullable:true})
    _max?: BudgetTransactionMaxAggregate;
}
