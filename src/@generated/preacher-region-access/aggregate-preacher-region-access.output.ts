import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PreacherRegionAccessCountAggregate } from './preacher-region-access-count-aggregate.output';
import { PreacherRegionAccessMinAggregate } from './preacher-region-access-min-aggregate.output';
import { PreacherRegionAccessMaxAggregate } from './preacher-region-access-max-aggregate.output';

@ObjectType()
export class AggregatePreacherRegionAccess {

    @Field(() => PreacherRegionAccessCountAggregate, {nullable:true})
    _count?: PreacherRegionAccessCountAggregate;

    @Field(() => PreacherRegionAccessMinAggregate, {nullable:true})
    _min?: PreacherRegionAccessMinAggregate;

    @Field(() => PreacherRegionAccessMaxAggregate, {nullable:true})
    _max?: PreacherRegionAccessMaxAggregate;
}
