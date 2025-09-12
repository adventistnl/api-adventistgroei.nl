import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { ChurchScalarRelationFilter } from '../church/church-scalar-relation-filter.input';
import { SubsidyStatusScalarRelationFilter } from '../subsidy-status/subsidy-status-scalar-relation-filter.input';
import { ProjectActivityListRelationFilter } from '../project-activity/project-activity-list-relation-filter.input';

@InputType()
export class SubsidyRequestWhereInput {

    @Field(() => [SubsidyRequestWhereInput], {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    AND?: Array<SubsidyRequestWhereInput>;

    @Field(() => [SubsidyRequestWhereInput], {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    OR?: Array<SubsidyRequestWhereInput>;

    @Field(() => [SubsidyRequestWhereInput], {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    NOT?: Array<SubsidyRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    requester_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    department_project_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    church_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    total_budget?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    subsidy_statuses_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updated_by?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_deleted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deleted_by?: StringNullableFilter;

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    requester?: UserScalarRelationFilter;

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentScalarRelationFilter)
    department?: DepartmentScalarRelationFilter;

    @Field(() => ChurchScalarRelationFilter, {nullable:true})
    @Type(() => ChurchScalarRelationFilter)
    church?: ChurchScalarRelationFilter;

    @Field(() => SubsidyStatusScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyStatusScalarRelationFilter)
    subsidy_status?: SubsidyStatusScalarRelationFilter;

    @Field(() => ProjectActivityListRelationFilter, {nullable:true})
    @Type(() => ProjectActivityListRelationFilter)
    project_activities?: ProjectActivityListRelationFilter;
}
