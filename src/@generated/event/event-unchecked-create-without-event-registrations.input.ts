import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';
import { EventType } from '../prisma/event-type.enum';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { EventRecipientUncheckedCreateNestedManyWithoutEventInput } from '../event-recipient/event-recipient-unchecked-create-nested-many-without-event.input';

@InputType()
export class EventUncheckedCreateWithoutEvent_registrationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

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
    @Type(() => Object)
    @Transform(transformToDecimal)
    ticket_amount!: Decimal;

    @Field(() => Date, {nullable:false})
    subscription_expires_at!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => EventRecipientUncheckedCreateNestedManyWithoutEventInput, {nullable:true})
    @Type(() => EventRecipientUncheckedCreateNestedManyWithoutEventInput)
    event_recipients?: EventRecipientUncheckedCreateNestedManyWithoutEventInput;
}
