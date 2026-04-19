import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BudgetTransferCountAggregate } from './budget-transfer-count-aggregate.output';
import { BudgetTransferAvgAggregate } from './budget-transfer-avg-aggregate.output';
import { BudgetTransferSumAggregate } from './budget-transfer-sum-aggregate.output';
import { BudgetTransferMinAggregate } from './budget-transfer-min-aggregate.output';
import { BudgetTransferMaxAggregate } from './budget-transfer-max-aggregate.output';

@ObjectType()
export class AggregateBudgetTransfer {

    @Field(() => BudgetTransferCountAggregate, {nullable:true})
    _count?: BudgetTransferCountAggregate;

    @Field(() => BudgetTransferAvgAggregate, {nullable:true})
    _avg?: BudgetTransferAvgAggregate;

    @Field(() => BudgetTransferSumAggregate, {nullable:true})
    _sum?: BudgetTransferSumAggregate;

    @Field(() => BudgetTransferMinAggregate, {nullable:true})
    _min?: BudgetTransferMinAggregate;

    @Field(() => BudgetTransferMaxAggregate, {nullable:true})
    _max?: BudgetTransferMaxAggregate;
}
