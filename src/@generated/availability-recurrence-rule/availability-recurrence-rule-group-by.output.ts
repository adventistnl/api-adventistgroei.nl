import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecurrenceType } from '../prisma/recurrence-type.enum';
import { AvailabilityStatus } from '../prisma/availability-status.enum';
import { Int } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCountAggregate } from './availability-recurrence-rule-count-aggregate.output';
import { AvailabilityRecurrenceRuleAvgAggregate } from './availability-recurrence-rule-avg-aggregate.output';
import { AvailabilityRecurrenceRuleSumAggregate } from './availability-recurrence-rule-sum-aggregate.output';
import { AvailabilityRecurrenceRuleMinAggregate } from './availability-recurrence-rule-min-aggregate.output';
import { AvailabilityRecurrenceRuleMaxAggregate } from './availability-recurrence-rule-max-aggregate.output';

@ObjectType()
export class AvailabilityRecurrenceRuleGroupBy {

    @Field(() => String, {nullable:false})
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
    day_of_week?: number;

    @Field(() => Date, {nullable:true})
    start_date?: Date | string;

    @Field(() => Date, {nullable:true})
    end_date?: Date | string;

    @Field(() => Date, {nullable:false})
    effective_from!: Date | string;

    @Field(() => Date, {nullable:true})
    effective_until?: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

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

    @Field(() => AvailabilityRecurrenceRuleCountAggregate, {nullable:true})
    _count?: AvailabilityRecurrenceRuleCountAggregate;

    @Field(() => AvailabilityRecurrenceRuleAvgAggregate, {nullable:true})
    _avg?: AvailabilityRecurrenceRuleAvgAggregate;

    @Field(() => AvailabilityRecurrenceRuleSumAggregate, {nullable:true})
    _sum?: AvailabilityRecurrenceRuleSumAggregate;

    @Field(() => AvailabilityRecurrenceRuleMinAggregate, {nullable:true})
    _min?: AvailabilityRecurrenceRuleMinAggregate;

    @Field(() => AvailabilityRecurrenceRuleMaxAggregate, {nullable:true})
    _max?: AvailabilityRecurrenceRuleMaxAggregate;
}
