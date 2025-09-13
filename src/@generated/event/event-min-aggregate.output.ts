import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';
import { EventType } from '../prisma/event-type.enum';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class EventMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EventTargetType, {nullable:true})
    target_type?: `${EventTargetType}`;

    @Field(() => String, {nullable:true})
    target_id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    contact_id?: string;

    @Field(() => EventType, {nullable:true})
    type?: `${EventType}`;

    @Field(() => LanguagePreference, {nullable:true})
    language_preference?: `${LanguagePreference}`;

    @Field(() => Int, {nullable:true})
    max_participants?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    ticket_amount?: Decimal;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => Boolean, {nullable:true})
    is_private?: boolean;

    @Field(() => Boolean, {nullable:true})
    required_volunteers?: boolean;

    @Field(() => Date, {nullable:true})
    start_at?: Date | string;

    @Field(() => Date, {nullable:true})
    end_at?: Date | string;

    @Field(() => Date, {nullable:true})
    subscription_expires_at?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;
}
