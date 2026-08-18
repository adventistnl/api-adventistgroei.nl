import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateManyInput } from './availability-recurrence-rule-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAvailabilityRecurrenceRuleArgs {

    @Field(() => [AvailabilityRecurrenceRuleCreateManyInput], {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateManyInput)
    data!: Array<AvailabilityRecurrenceRuleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
