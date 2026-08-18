import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InstitutionCount {

    @Field(() => Int, {nullable:false})
    churches?: number;

    @Field(() => Int, {nullable:false})
    departments?: number;

    @Field(() => Int, {nullable:false})
    users?: number;

    @Field(() => Int, {nullable:false})
    communications?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;

    @Field(() => Int, {nullable:false})
    settings?: number;

    @Field(() => Int, {nullable:false})
    projects?: number;

    @Field(() => Int, {nullable:false})
    direct_messages?: number;

    @Field(() => Int, {nullable:false})
    subsidy_requests?: number;

    @Field(() => Int, {nullable:false})
    annual_budgets?: number;

    @Field(() => Int, {nullable:false})
    positions?: number;

    @Field(() => Int, {nullable:false})
    availabilities?: number;

    @Field(() => Int, {nullable:false})
    availability_recurrence_rules?: number;
}
