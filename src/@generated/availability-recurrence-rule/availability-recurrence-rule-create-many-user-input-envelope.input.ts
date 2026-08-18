import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateManyUserInput } from './availability-recurrence-rule-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AvailabilityRecurrenceRuleCreateManyUserInputEnvelope {

    @Field(() => [AvailabilityRecurrenceRuleCreateManyUserInput], {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateManyUserInput)
    data!: Array<AvailabilityRecurrenceRuleCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
