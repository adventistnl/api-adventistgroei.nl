import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';
import { EventRecipientCountAggregate } from './event-recipient-count-aggregate.output';
import { EventRecipientMinAggregate } from './event-recipient-min-aggregate.output';
import { EventRecipientMaxAggregate } from './event-recipient-max-aggregate.output';

@ObjectType()
export class EventRecipientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    event_id!: string;

    @Field(() => EventTargetType, {nullable:false})
    target_type!: `${EventTargetType}`;

    @Field(() => String, {nullable:false})
    target_id!: string;

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

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => EventRecipientCountAggregate, {nullable:true})
    _count?: EventRecipientCountAggregate;

    @Field(() => EventRecipientMinAggregate, {nullable:true})
    _min?: EventRecipientMinAggregate;

    @Field(() => EventRecipientMaxAggregate, {nullable:true})
    _max?: EventRecipientMaxAggregate;
}
