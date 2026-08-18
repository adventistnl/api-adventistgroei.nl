import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AvailabilityHistoryCountAggregate } from './availability-history-count-aggregate.output';
import { AvailabilityHistoryMinAggregate } from './availability-history-min-aggregate.output';
import { AvailabilityHistoryMaxAggregate } from './availability-history-max-aggregate.output';

@ObjectType()
export class AvailabilityHistoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    availability_id!: string;

    @Field(() => String, {nullable:false})
    field_name!: string;

    @Field(() => String, {nullable:true})
    old_value?: string;

    @Field(() => String, {nullable:true})
    new_value?: string;

    @Field(() => String, {nullable:false})
    changed_by!: string;

    @Field(() => Date, {nullable:false})
    changed_at!: Date | string;

    @Field(() => AvailabilityHistoryCountAggregate, {nullable:true})
    _count?: AvailabilityHistoryCountAggregate;

    @Field(() => AvailabilityHistoryMinAggregate, {nullable:true})
    _min?: AvailabilityHistoryMinAggregate;

    @Field(() => AvailabilityHistoryMaxAggregate, {nullable:true})
    _max?: AvailabilityHistoryMaxAggregate;
}
