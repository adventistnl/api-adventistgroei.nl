import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';
import { EventType } from '../prisma/event-type.enum';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { EventCountAggregate } from './event-count-aggregate.output';
import { EventAvgAggregate } from './event-avg-aggregate.output';
import { EventSumAggregate } from './event-sum-aggregate.output';
import { EventMinAggregate } from './event-min-aggregate.output';
import { EventMaxAggregate } from './event-max-aggregate.output';

@ObjectType()
export class EventGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => EventTargetType, {nullable:false})
    target_type!: `${EventTargetType}`;

    @Field(() => String, {nullable:true})
    target_id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    contact_id!: string;

    @Field(() => EventType, {nullable:false})
    type!: `${EventType}`;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => Int, {nullable:false})
    max_participants!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    ticket_amount!: Decimal;

    @Field(() => Date, {nullable:false})
    subscription_expires_at!: Date | string;

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

    @Field(() => EventCountAggregate, {nullable:true})
    _count?: EventCountAggregate;

    @Field(() => EventAvgAggregate, {nullable:true})
    _avg?: EventAvgAggregate;

    @Field(() => EventSumAggregate, {nullable:true})
    _sum?: EventSumAggregate;

    @Field(() => EventMinAggregate, {nullable:true})
    _min?: EventMinAggregate;

    @Field(() => EventMaxAggregate, {nullable:true})
    _max?: EventMaxAggregate;
}
