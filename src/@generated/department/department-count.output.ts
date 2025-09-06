import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DepartmentCount {

    @Field(() => Int, {nullable:false})
    subsidy_statuses?: number;

    @Field(() => Int, {nullable:false})
    mission_projects?: number;

    @Field(() => Int, {nullable:false})
    annual_reports?: number;

    @Field(() => Int, {nullable:false})
    subsidy_requests?: number;
}
