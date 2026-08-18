import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AvailabilityHistoryCountAggregate } from './availability-history-count-aggregate.output';
import { AvailabilityHistoryMinAggregate } from './availability-history-min-aggregate.output';
import { AvailabilityHistoryMaxAggregate } from './availability-history-max-aggregate.output';

@ObjectType()
export class AggregateAvailabilityHistory {

    @Field(() => AvailabilityHistoryCountAggregate, {nullable:true})
    _count?: AvailabilityHistoryCountAggregate;

    @Field(() => AvailabilityHistoryMinAggregate, {nullable:true})
    _min?: AvailabilityHistoryMinAggregate;

    @Field(() => AvailabilityHistoryMaxAggregate, {nullable:true})
    _max?: AvailabilityHistoryMaxAggregate;
}
