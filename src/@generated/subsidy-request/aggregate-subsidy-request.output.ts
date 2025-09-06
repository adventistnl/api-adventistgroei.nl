import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubsidyRequestCountAggregate } from './subsidy-request-count-aggregate.output';
import { SubsidyRequestAvgAggregate } from './subsidy-request-avg-aggregate.output';
import { SubsidyRequestSumAggregate } from './subsidy-request-sum-aggregate.output';
import { SubsidyRequestMinAggregate } from './subsidy-request-min-aggregate.output';
import { SubsidyRequestMaxAggregate } from './subsidy-request-max-aggregate.output';

@ObjectType()
export class AggregateSubsidyRequest {

    @Field(() => SubsidyRequestCountAggregate, {nullable:true})
    _count?: SubsidyRequestCountAggregate;

    @Field(() => SubsidyRequestAvgAggregate, {nullable:true})
    _avg?: SubsidyRequestAvgAggregate;

    @Field(() => SubsidyRequestSumAggregate, {nullable:true})
    _sum?: SubsidyRequestSumAggregate;

    @Field(() => SubsidyRequestMinAggregate, {nullable:true})
    _min?: SubsidyRequestMinAggregate;

    @Field(() => SubsidyRequestMaxAggregate, {nullable:true})
    _max?: SubsidyRequestMaxAggregate;
}
