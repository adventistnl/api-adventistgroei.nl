import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RegionCountAggregate } from './region-count-aggregate.output';
import { RegionMinAggregate } from './region-min-aggregate.output';
import { RegionMaxAggregate } from './region-max-aggregate.output';

@ObjectType()
export class RegionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parent_region_id?: string;

    @Field(() => String, {nullable:true})
    contact_id?: string;

    @Field(() => String, {nullable:true})
    annual_budget_id?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => RegionCountAggregate, {nullable:true})
    _count?: RegionCountAggregate;

    @Field(() => RegionMinAggregate, {nullable:true})
    _min?: RegionMinAggregate;

    @Field(() => RegionMaxAggregate, {nullable:true})
    _max?: RegionMaxAggregate;
}
