import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BudgetTransactionCountAggregate } from './budget-transaction-count-aggregate.output';
import { BudgetTransactionAvgAggregate } from './budget-transaction-avg-aggregate.output';
import { BudgetTransactionSumAggregate } from './budget-transaction-sum-aggregate.output';
import { BudgetTransactionMinAggregate } from './budget-transaction-min-aggregate.output';
import { BudgetTransactionMaxAggregate } from './budget-transaction-max-aggregate.output';

@ObjectType()
export class AggregateBudgetTransaction {

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
