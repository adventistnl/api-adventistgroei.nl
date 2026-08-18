import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RecurrenceType } from '../prisma/recurrence-type.enum';
import { AvailabilityStatus } from '../prisma/availability-status.enum';
import { Int } from '@nestjs/graphql';
import { Institution } from '../institution/institution.model';
import { User } from '../user/user.model';
import { Availability } from '../availability/availability.model';
import { AvailabilityRecurrenceRuleCount } from './availability-recurrence-rule-count.output';

/**
 * A preacher's weekly/date-range availability pattern, set from their Profile screen.
 * Never read directly by gap-report/overview/invite logic — those only ever read
 * materialized Availability rows (see Availability.source above).
 */
@ObjectType({description:"A preacher's weekly/date-range availability pattern, set from their Profile screen.\nNever read directly by gap-report/overview/invite logic — those only ever read\nmaterialized Availability rows (see Availability.source above)."})
export class AvailabilityRecurrenceRule {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => RecurrenceType, {nullable:false})
    type!: `${RecurrenceType}`;

    @Field(() => AvailabilityStatus, {nullable:false})
    status!: `${AvailabilityStatus}`;

    @Field(() => Int, {nullable:true})
    day_of_week!: number | null;

    @Field(() => Date, {nullable:true})
    start_date!: Date | null;

    @Field(() => Date, {nullable:true})
    end_date!: Date | null;

    @Field(() => Date, {nullable:false})
    effective_from!: Date;

    @Field(() => Date, {nullable:true})
    effective_until!: Date | null;

    @Field(() => String, {nullable:true})
    note!: string | null;

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

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Availability], {nullable:true})
    materialized_availabilities?: Array<Availability>;

    @Field(() => AvailabilityRecurrenceRuleCount, {nullable:false})
    _count?: AvailabilityRecurrenceRuleCount;
}
