import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AvailabilityRecurrenceRuleAvgAggregate {

    @Field(() => Float, {nullable:true})
    day_of_week?: number;
}
