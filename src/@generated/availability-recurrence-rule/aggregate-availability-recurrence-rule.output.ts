import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCountAggregate } from './availability-recurrence-rule-count-aggregate.output';
import { AvailabilityRecurrenceRuleAvgAggregate } from './availability-recurrence-rule-avg-aggregate.output';
import { AvailabilityRecurrenceRuleSumAggregate } from './availability-recurrence-rule-sum-aggregate.output';
import { AvailabilityRecurrenceRuleMinAggregate } from './availability-recurrence-rule-min-aggregate.output';
import { AvailabilityRecurrenceRuleMaxAggregate } from './availability-recurrence-rule-max-aggregate.output';

@ObjectType()
export class AggregateAvailabilityRecurrenceRule {

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
