import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityFundingCountAggregate } from './activity-funding-count-aggregate.output';
import { ActivityFundingAvgAggregate } from './activity-funding-avg-aggregate.output';
import { ActivityFundingSumAggregate } from './activity-funding-sum-aggregate.output';
import { ActivityFundingMinAggregate } from './activity-funding-min-aggregate.output';
import { ActivityFundingMaxAggregate } from './activity-funding-max-aggregate.output';

@ObjectType()
export class AggregateActivityFunding {

    @Field(() => ActivityFundingCountAggregate, {nullable:true})
    _count?: ActivityFundingCountAggregate;

    @Field(() => ActivityFundingAvgAggregate, {nullable:true})
    _avg?: ActivityFundingAvgAggregate;

    @Field(() => ActivityFundingSumAggregate, {nullable:true})
    _sum?: ActivityFundingSumAggregate;

    @Field(() => ActivityFundingMinAggregate, {nullable:true})
    _min?: ActivityFundingMinAggregate;

    @Field(() => ActivityFundingMaxAggregate, {nullable:true})
    _max?: ActivityFundingMaxAggregate;
}
