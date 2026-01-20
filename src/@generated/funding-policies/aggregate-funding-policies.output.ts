import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FundingPoliciesCountAggregate } from './funding-policies-count-aggregate.output';
import { FundingPoliciesAvgAggregate } from './funding-policies-avg-aggregate.output';
import { FundingPoliciesSumAggregate } from './funding-policies-sum-aggregate.output';
import { FundingPoliciesMinAggregate } from './funding-policies-min-aggregate.output';
import { FundingPoliciesMaxAggregate } from './funding-policies-max-aggregate.output';

@ObjectType()
export class AggregateFundingPolicies {

    @Field(() => FundingPoliciesCountAggregate, {nullable:true})
    _count?: FundingPoliciesCountAggregate;

    @Field(() => FundingPoliciesAvgAggregate, {nullable:true})
    _avg?: FundingPoliciesAvgAggregate;

    @Field(() => FundingPoliciesSumAggregate, {nullable:true})
    _sum?: FundingPoliciesSumAggregate;

    @Field(() => FundingPoliciesMinAggregate, {nullable:true})
    _min?: FundingPoliciesMinAggregate;

    @Field(() => FundingPoliciesMaxAggregate, {nullable:true})
    _max?: FundingPoliciesMaxAggregate;
}
