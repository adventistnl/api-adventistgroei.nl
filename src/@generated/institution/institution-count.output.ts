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

    @Field(() => Int, {nullable:false})
    church_service_calendar_entries?: number;

    @Field(() => Int, {nullable:false})
    assignments?: number;

    @Field(() => Int, {nullable:false})
    gap_report_snapshots?: number;

    @Field(() => Int, {nullable:false})
    assignment_requests?: number;

    @Field(() => Int, {nullable:false})
    preacher_region_access?: number;

    @Field(() => Int, {nullable:false})
    assignment_invite_templates?: number;
}
