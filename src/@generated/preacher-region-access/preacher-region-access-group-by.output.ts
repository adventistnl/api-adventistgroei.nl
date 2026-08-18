import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PreacherRegionAccessCountAggregate } from './preacher-region-access-count-aggregate.output';
import { PreacherRegionAccessMinAggregate } from './preacher-region-access-min-aggregate.output';
import { PreacherRegionAccessMaxAggregate } from './preacher-region-access-max-aggregate.output';

@ObjectType()
export class PreacherRegionAccessGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    region_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => PreacherRegionAccessCountAggregate, {nullable:true})
    _count?: PreacherRegionAccessCountAggregate;

    @Field(() => PreacherRegionAccessMinAggregate, {nullable:true})
    _min?: PreacherRegionAccessMinAggregate;

    @Field(() => PreacherRegionAccessMaxAggregate, {nullable:true})
    _max?: PreacherRegionAccessMaxAggregate;
}
