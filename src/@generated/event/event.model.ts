import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';
import { EventType } from '../prisma/event-type.enum';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Contact } from '../contact/contact.model';
import { EventRecipient } from '../event-recipient/event-recipient.model';
import { EventRegistration } from '../event-registration/event-registration.model';
import { Project } from '../project/project.model';
import { EventCount } from './event-count.output';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => EventTargetType, {nullable:false})
    target_type!: `${EventTargetType}`;

    @Field(() => String, {nullable:true})
    target_id!: string | null;

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

    @Field(() => String, {nullable:true})
    location!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_private!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    required_volunteers!: boolean;

    @Field(() => Date, {nullable:true})
    start_at!: Date | null;

    @Field(() => Date, {nullable:true})
    end_at!: Date | null;

    @Field(() => Date, {nullable:false})
    subscription_expires_at!: Date;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Contact, {nullable:false})
    contact?: Contact;

    @Field(() => [EventRecipient], {nullable:true})
    event_recipients?: Array<EventRecipient>;

    @Field(() => [EventRegistration], {nullable:true})
    event_registrations?: Array<EventRegistration>;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => EventCount, {nullable:false})
    _count?: EventCount;
}
