import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChurchCount {

    @Field(() => Int, {nullable:false})
    departments?: number;

    @Field(() => Int, {nullable:false})
    users?: number;

    @Field(() => Int, {nullable:false})
    subsidy_requests?: number;

    @Field(() => Int, {nullable:false})
    annual_budgets?: number;

    @Field(() => Int, {nullable:false})
    projects?: number;

    @Field(() => Int, {nullable:false})
    service_calendar?: number;

    @Field(() => Int, {nullable:false})
    assignments?: number;
}
