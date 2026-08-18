import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AvailabilityRecurrenceRuleSumAggregate {

    @Field(() => Int, {nullable:true})
    day_of_week?: number;
}
