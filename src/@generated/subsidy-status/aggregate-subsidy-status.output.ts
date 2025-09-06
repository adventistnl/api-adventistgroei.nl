import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubsidyStatusCountAggregate } from './subsidy-status-count-aggregate.output';
import { SubsidyStatusAvgAggregate } from './subsidy-status-avg-aggregate.output';
import { SubsidyStatusSumAggregate } from './subsidy-status-sum-aggregate.output';
import { SubsidyStatusMinAggregate } from './subsidy-status-min-aggregate.output';
import { SubsidyStatusMaxAggregate } from './subsidy-status-max-aggregate.output';

@ObjectType()
export class AggregateSubsidyStatus {

    @Field(() => SubsidyStatusCountAggregate, {nullable:true})
    _count?: SubsidyStatusCountAggregate;

    @Field(() => SubsidyStatusAvgAggregate, {nullable:true})
    _avg?: SubsidyStatusAvgAggregate;

    @Field(() => SubsidyStatusSumAggregate, {nullable:true})
    _sum?: SubsidyStatusSumAggregate;

    @Field(() => SubsidyStatusMinAggregate, {nullable:true})
    _min?: SubsidyStatusMinAggregate;

    @Field(() => SubsidyStatusMaxAggregate, {nullable:true})
    _max?: SubsidyStatusMaxAggregate;
}
