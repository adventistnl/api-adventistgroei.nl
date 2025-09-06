import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventTargetType } from '../prisma/event-target-type.enum';

@ObjectType()
export class EventRecipientMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    event_id?: string;

    @Field(() => EventTargetType, {nullable:true})
    target_type?: `${EventTargetType}`;

    @Field(() => String, {nullable:true})
    target_id?: string;

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

    @Field(() => String, {nullable:true})
    userId?: string;
}
