import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Institution } from '../institution/institution.model';
import { User } from '../user/user.model';
import { Department } from '../department/department.model';
import { Church } from '../church/church.model';
import { SubsidyStatus } from '../subsidy-status/subsidy-status.model';
import { ProjectActivity } from '../project-activity/project-activity.model';
import { Project } from '../project/project.model';
import { SubsidyRequestCount } from './subsidy-request-count.output';

@ObjectType()
export class SubsidyRequest {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    total_budget!: Decimal;

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

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    requester_id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => String, {nullable:false})
    subsidy_statuses_id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => User, {nullable:false})
    requester?: User;

    @Field(() => Department, {nullable:false})
    department?: Department;

    @Field(() => Church, {nullable:false})
    church?: Church;

    @Field(() => SubsidyStatus, {nullable:false})
    subsidy_status?: SubsidyStatus;

    @Field(() => [ProjectActivity], {nullable:true})
    project_activities?: Array<ProjectActivity>;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => SubsidyRequestCount, {nullable:false})
    _count?: SubsidyRequestCount;
}
