import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventRegistrationStatus } from '../prisma/event-registration-status.enum';

@ObjectType()
export class EventRegistrationMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => String, {nullable:true})
    event_id?: string;

    @Field(() => EventRegistrationStatus, {nullable:true})
    status?: `${EventRegistrationStatus}`;

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
