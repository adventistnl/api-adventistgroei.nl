import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Department } from '../department/department.model';
import { User } from '../user/user.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { SubsidyStatusCount } from './subsidy-status-count.output';

@ObjectType()
export class SubsidyStatus {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    assigned_to!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Department, {nullable:false})
    department?: Department;

    @Field(() => User, {nullable:false})
    assigned_user?: User;

    @Field(() => [SubsidyRequest], {nullable:true})
    subsidy_requests?: Array<SubsidyRequest>;

    @Field(() => SubsidyStatusCount, {nullable:false})
    _count?: SubsidyStatusCount;
}
