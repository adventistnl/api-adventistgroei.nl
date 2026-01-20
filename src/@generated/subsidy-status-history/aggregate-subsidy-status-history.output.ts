import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCountAggregate } from './subsidy-status-history-count-aggregate.output';
import { SubsidyStatusHistoryMinAggregate } from './subsidy-status-history-min-aggregate.output';
import { SubsidyStatusHistoryMaxAggregate } from './subsidy-status-history-max-aggregate.output';

@ObjectType()
export class AggregateSubsidyStatusHistory {

    @Field(() => SubsidyStatusHistoryCountAggregate, {nullable:true})
    _count?: SubsidyStatusHistoryCountAggregate;

    @Field(() => SubsidyStatusHistoryMinAggregate, {nullable:true})
    _min?: SubsidyStatusHistoryMinAggregate;

    @Field(() => SubsidyStatusHistoryMaxAggregate, {nullable:true})
    _max?: SubsidyStatusHistoryMaxAggregate;
}
