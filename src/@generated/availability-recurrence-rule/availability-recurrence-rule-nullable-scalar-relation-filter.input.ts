import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';

@InputType()
export class AvailabilityRecurrenceRuleNullableScalarRelationFilter {

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    is?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    isNot?: AvailabilityRecurrenceRuleWhereInput;
}
