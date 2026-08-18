import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AvailabilityRecurrenceRuleSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    day_of_week?: true;
}
