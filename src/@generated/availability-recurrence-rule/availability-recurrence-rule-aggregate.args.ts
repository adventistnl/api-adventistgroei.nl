import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleOrderByWithRelationInput } from './availability-recurrence-rule-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCountAggregateInput } from './availability-recurrence-rule-count-aggregate.input';
import { AvailabilityRecurrenceRuleAvgAggregateInput } from './availability-recurrence-rule-avg-aggregate.input';
import { AvailabilityRecurrenceRuleSumAggregateInput } from './availability-recurrence-rule-sum-aggregate.input';
import { AvailabilityRecurrenceRuleMinAggregateInput } from './availability-recurrence-rule-min-aggregate.input';
import { AvailabilityRecurrenceRuleMaxAggregateInput } from './availability-recurrence-rule-max-aggregate.input';

@ArgsType()
export class AvailabilityRecurrenceRuleAggregateArgs {

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereInput)
    where?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => [AvailabilityRecurrenceRuleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AvailabilityRecurrenceRuleOrderByWithRelationInput>;

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

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
