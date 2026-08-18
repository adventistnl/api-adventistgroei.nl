import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateInput } from './availability-recurrence-rule-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAvailabilityRecurrenceRuleArgs {

    @Field(() => AvailabilityRecurrenceRuleCreateInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateInput)
    data!: AvailabilityRecurrenceRuleCreateInput;
}
