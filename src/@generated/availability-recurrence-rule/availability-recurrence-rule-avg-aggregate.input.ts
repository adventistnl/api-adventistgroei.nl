import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AvailabilityRecurrenceRuleAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    day_of_week?: true;
}
