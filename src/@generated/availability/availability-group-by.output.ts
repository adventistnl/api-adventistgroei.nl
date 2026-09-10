import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AvailabilityStatus } from '../prisma/availability-status.enum';
import { AvailabilitySource } from '../prisma/availability-source.enum';
import { AvailabilityCountAggregate } from './availability-count-aggregate.output';
import { AvailabilityMinAggregate } from './availability-min-aggregate.output';
import { AvailabilityMaxAggregate } from './availability-max-aggregate.output';

@ObjectType()
export class AvailabilityGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => AvailabilityStatus, {nullable:false})
    status!: `${AvailabilityStatus}`;

    @Field(() => AvailabilitySource, {nullable:false})
    source!: `${AvailabilitySource}`;

    @Field(() => String, {nullable:true})
    recurrence_rule_id?: string;

    @Field(() => String, {nullable:true})
    note?: string;

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

    @Field(() => AvailabilityCountAggregate, {nullable:true})
    _count?: AvailabilityCountAggregate;

    @Field(() => AvailabilityMinAggregate, {nullable:true})
    _min?: AvailabilityMinAggregate;

    @Field(() => AvailabilityMaxAggregate, {nullable:true})
    _max?: AvailabilityMaxAggregate;
}
