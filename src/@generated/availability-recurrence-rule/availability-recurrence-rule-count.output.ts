import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AvailabilityRecurrenceRuleCount {

    @Field(() => Int, {nullable:false})
    materialized_availabilities?: number;
}
