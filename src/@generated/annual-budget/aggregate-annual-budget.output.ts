import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnnualBudgetCountAggregate } from './annual-budget-count-aggregate.output';
import { AnnualBudgetAvgAggregate } from './annual-budget-avg-aggregate.output';
import { AnnualBudgetSumAggregate } from './annual-budget-sum-aggregate.output';
import { AnnualBudgetMinAggregate } from './annual-budget-min-aggregate.output';
import { AnnualBudgetMaxAggregate } from './annual-budget-max-aggregate.output';

@ObjectType()
export class AggregateAnnualBudget {

    @Field(() => AnnualBudgetCountAggregate, {nullable:true})
    _count?: AnnualBudgetCountAggregate;

    @Field(() => AnnualBudgetAvgAggregate, {nullable:true})
    _avg?: AnnualBudgetAvgAggregate;

    @Field(() => AnnualBudgetSumAggregate, {nullable:true})
    _sum?: AnnualBudgetSumAggregate;

    @Field(() => AnnualBudgetMinAggregate, {nullable:true})
    _min?: AnnualBudgetMinAggregate;

    @Field(() => AnnualBudgetMaxAggregate, {nullable:true})
    _max?: AnnualBudgetMaxAggregate;
}
