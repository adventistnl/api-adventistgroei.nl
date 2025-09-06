import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventRegistrationStatus } from '../prisma/event-registration-status.enum';
import { EventRegistrationCountAggregate } from './event-registration-count-aggregate.output';
import { EventRegistrationMinAggregate } from './event-registration-min-aggregate.output';
import { EventRegistrationMaxAggregate } from './event-registration-max-aggregate.output';

@ObjectType()
export class EventRegistrationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    event_id!: string;

    @Field(() => EventRegistrationStatus, {nullable:false})
    status!: `${EventRegistrationStatus}`;

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

    @Field(() => EventRegistrationCountAggregate, {nullable:true})
    _count?: EventRegistrationCountAggregate;

    @Field(() => EventRegistrationMinAggregate, {nullable:true})
    _min?: EventRegistrationMinAggregate;

    @Field(() => EventRegistrationMaxAggregate, {nullable:true})
    _max?: EventRegistrationMaxAggregate;
}
