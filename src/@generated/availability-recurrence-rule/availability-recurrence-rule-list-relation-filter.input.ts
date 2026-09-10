import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';

@InputType()
export class AvailabilityRecurrenceRuleListRelationFilter {

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    every?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    some?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    none?: AvailabilityRecurrenceRuleWhereInput;
}
