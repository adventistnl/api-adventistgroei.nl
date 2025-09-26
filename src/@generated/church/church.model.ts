import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Institution } from '../institution/institution.model';
import { Region } from '../region/region.model';
import { Contact } from '../contact/contact.model';
import { AnnualBudget } from '../annual-budget/annual-budget.model';
import { Department } from '../department/department.model';
import { User } from '../user/user.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { ChurchCount } from './church-count.output';

@ObjectType()
export class Church {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    region_id!: string;

    @Field(() => String, {nullable:true})
    contact_id!: string | null;

    @Field(() => String, {nullable:true})
    annual_budget_id!: string | null;

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

    @Field(() => Region, {nullable:false})
    region?: Region;

    @Field(() => Contact, {nullable:true})
    contact?: Contact | null;

    @Field(() => AnnualBudget, {nullable:true})
    annual_budget?: AnnualBudget | null;

    @Field(() => [Department], {nullable:true})
    departments?: Array<Department>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [SubsidyRequest], {nullable:true})
    subsidy_requests?: Array<SubsidyRequest>;

    @Field(() => ChurchCount, {nullable:false})
    _count?: ChurchCount;
}
