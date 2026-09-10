import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecurrenceType } from '../prisma/recurrence-type.enum';
import { AvailabilityStatus } from '../prisma/availability-status.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AvailabilityRecurrenceRuleMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => RecurrenceType, {nullable:true})
    type?: `${RecurrenceType}`;

    @Field(() => AvailabilityStatus, {nullable:true})
    status?: `${AvailabilityStatus}`;

    @Field(() => Int, {nullable:true})
    day_of_week?: number;

    @Field(() => Date, {nullable:true})
    start_date?: Date | string;

    @Field(() => Date, {nullable:true})
    end_date?: Date | string;

    @Field(() => Date, {nullable:true})
    effective_from?: Date | string;

    @Field(() => Date, {nullable:true})
    effective_until?: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

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
