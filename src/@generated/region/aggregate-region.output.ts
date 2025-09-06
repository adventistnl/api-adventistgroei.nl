import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RegionCountAggregate } from './region-count-aggregate.output';
import { RegionMinAggregate } from './region-min-aggregate.output';
import { RegionMaxAggregate } from './region-max-aggregate.output';

@ObjectType()
export class AggregateRegion {

    @Field(() => RegionCountAggregate, {nullable:true})
    _count?: RegionCountAggregate;

    @Field(() => RegionMinAggregate, {nullable:true})
    _min?: RegionMinAggregate;

    @Field(() => RegionMaxAggregate, {nullable:true})
    _max?: RegionMaxAggregate;
}
