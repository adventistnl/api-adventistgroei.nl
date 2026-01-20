import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubsidyRequestItemCountAggregate } from './subsidy-request-item-count-aggregate.output';
import { SubsidyRequestItemAvgAggregate } from './subsidy-request-item-avg-aggregate.output';
import { SubsidyRequestItemSumAggregate } from './subsidy-request-item-sum-aggregate.output';
import { SubsidyRequestItemMinAggregate } from './subsidy-request-item-min-aggregate.output';
import { SubsidyRequestItemMaxAggregate } from './subsidy-request-item-max-aggregate.output';

@ObjectType()
export class AggregateSubsidyRequestItem {

    @Field(() => SubsidyRequestItemCountAggregate, {nullable:true})
    _count?: SubsidyRequestItemCountAggregate;

    @Field(() => SubsidyRequestItemAvgAggregate, {nullable:true})
    _avg?: SubsidyRequestItemAvgAggregate;

    @Field(() => SubsidyRequestItemSumAggregate, {nullable:true})
    _sum?: SubsidyRequestItemSumAggregate;

    @Field(() => SubsidyRequestItemMinAggregate, {nullable:true})
    _min?: SubsidyRequestItemMinAggregate;

    @Field(() => SubsidyRequestItemMaxAggregate, {nullable:true})
    _max?: SubsidyRequestItemMaxAggregate;
}
