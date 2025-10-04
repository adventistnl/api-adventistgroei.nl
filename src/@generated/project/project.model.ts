import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ProjectType } from '../prisma/project-type.enum';
import { Department } from '../department/department.model';
import { User } from '../user/user.model';
import { Event } from '../event/event.model';
import { Institution } from '../institution/institution.model';
import { VoluntariesOnProjects } from '../voluntaries-on-projects/voluntaries-on-projects.model';
import { ProjectActivity } from '../project-activity/project-activity.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { SpecialProjects } from '../special-projects/special-projects.model';
import { ProjectCount } from './project-count.output';

@ObjectType()
export class Project {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    budget!: Decimal;

    @Field(() => String, {nullable:false})
    owner_id!: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => ProjectType, {nullable:false})
    type!: `${ProjectType}`;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:false})
    deadline!: Date;

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

    @Field(() => String, {nullable:true})
    event_id!: string | null;

    @Field(() => String, {nullable:true})
    institution_id!: string | null;

    @Field(() => Department, {nullable:false})
    department?: Department;

    @Field(() => User, {nullable:false})
    owner?: User;

    @Field(() => Event, {nullable:true})
    event?: Event | null;

    @Field(() => Institution, {nullable:true})
    Institution?: Institution | null;

    @Field(() => [VoluntariesOnProjects], {nullable:true})
    voluntary_users?: Array<VoluntariesOnProjects>;

    @Field(() => [ProjectActivity], {nullable:true})
    activities?: Array<ProjectActivity>;

    @Field(() => [SubsidyRequest], {nullable:true})
    subsidies?: Array<SubsidyRequest>;

    @Field(() => [SpecialProjects], {nullable:true})
    special_projects?: Array<SpecialProjects>;

    @Field(() => ProjectCount, {nullable:false})
    _count?: ProjectCount;
}
