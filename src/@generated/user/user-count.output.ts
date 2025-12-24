import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    user_roles?: number;

    @Field(() => Int, {nullable:false})
    direct_messages?: number;

    @Field(() => Int, {nullable:false})
    direct_message_recipients?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;

    @Field(() => Int, {nullable:false})
    event_registrations?: number;

    @Field(() => Int, {nullable:false})
    event_recipients?: number;

    @Field(() => Int, {nullable:false})
    communications?: number;

    @Field(() => Int, {nullable:false})
    SubsidyRequest?: number;

    @Field(() => Int, {nullable:false})
    SubsidyStatus?: number;

    @Field(() => Int, {nullable:false})
    voluntary_projects?: number;

    @Field(() => Int, {nullable:false})
    Project?: number;

    @Field(() => Int, {nullable:false})
    approved_annual_budgets?: number;

    @Field(() => Int, {nullable:false})
    project_activity_logs?: number;

    @Field(() => Int, {nullable:false})
    activity_assignments?: number;
}
