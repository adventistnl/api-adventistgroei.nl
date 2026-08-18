import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleOrderByWithAggregationInput } from './availability-recurrence-rule-order-by-with-aggregation.input';
import { AvailabilityRecurrenceRuleScalarFieldEnum } from './availability-recurrence-rule-scalar-field.enum';
import { AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput } from './availability-recurrence-rule-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCountAggregateInput } from './availability-recurrence-rule-count-aggregate.input';
import { AvailabilityRecurrenceRuleAvgAggregateInput } from './availability-recurrence-rule-avg-aggregate.input';
import { AvailabilityRecurrenceRuleSumAggregateInput } from './availability-recurrence-rule-sum-aggregate.input';
import { AvailabilityRecurrenceRuleMinAggregateInput } from './availability-recurrence-rule-min-aggregate.input';
import { AvailabilityRecurrenceRuleMaxAggregateInput } from './availability-recurrence-rule-max-aggregate.input';

@ArgsType()
export class AvailabilityRecurrenceRuleGroupByArgs {

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereInput)
    where?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => [AvailabilityRecurrenceRuleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AvailabilityRecurrenceRuleOrderByWithAggregationInput>;

    @Field(() => [AvailabilityRecurrenceRuleScalarFieldEnum], {nullable:false})
    by!: Array<`${AvailabilityRecurrenceRuleScalarFieldEnum}`>;

    @Field(() => AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput, {nullable:true})
    having?: AvailabilityRecurrenceRuleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AvailabilityRecurrenceRuleCountAggregateInput, {nullable:true})
    _count?: AvailabilityRecurrenceRuleCountAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleAvgAggregateInput, {nullable:true})
    _avg?: AvailabilityRecurrenceRuleAvgAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleSumAggregateInput, {nullable:true})
    _sum?: AvailabilityRecurrenceRuleSumAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleMinAggregateInput, {nullable:true})
    _min?: AvailabilityRecurrenceRuleMinAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleMaxAggregateInput, {nullable:true})
    _max?: AvailabilityRecurrenceRuleMaxAggregateInput;
}
