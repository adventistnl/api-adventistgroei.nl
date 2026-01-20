import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Institution } from '../institution/institution.model';
import { Church } from '../church/church.model';
import { User } from '../user/user.model';
import { Contact } from '../contact/contact.model';
import { SubsidyStatus } from '../subsidy-status/subsidy-status.model';
import { Project } from '../project/project.model';
import { AnnualReport } from '../annual-report/annual-report.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { AnnualBudget } from '../annual-budget/annual-budget.model';
import { DepartmentCount } from './department-count.output';

@ObjectType()
export class Department {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:true})
    church_id!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    leader_id!: string;

    @Field(() => String, {nullable:true})
    contact_id!: string | null;

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

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => Church, {nullable:true})
    church?: Church | null;

    @Field(() => User, {nullable:false})
    leader?: User;

    @Field(() => Contact, {nullable:true})
    contact?: Contact | null;

    @Field(() => [SubsidyStatus], {nullable:true})
    subsidy_statuses?: Array<SubsidyStatus>;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => [Project], {nullable:true})
    church_projects?: Array<Project>;

    @Field(() => [AnnualReport], {nullable:true})
    annual_reports?: Array<AnnualReport>;

    @Field(() => [SubsidyRequest], {nullable:true})
    subsidy_requests?: Array<SubsidyRequest>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [AnnualBudget], {nullable:true})
    annual_budgets?: Array<AnnualBudget>;

    @Field(() => DepartmentCount, {nullable:false})
    _count?: DepartmentCount;
}
