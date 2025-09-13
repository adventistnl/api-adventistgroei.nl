import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { ChurchScalarRelationFilter } from '../church/church-scalar-relation-filter.input';
import { ContactNullableScalarRelationFilter } from '../contact/contact-nullable-scalar-relation-filter.input';
import { SubsidyStatusListRelationFilter } from '../subsidy-status/subsidy-status-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { AnnualReportListRelationFilter } from '../annual-report/annual-report-list-relation-filter.input';
import { SubsidyRequestListRelationFilter } from '../subsidy-request/subsidy-request-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class DepartmentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    @Type(() => DepartmentWhereInput)
    AND?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    @Type(() => DepartmentWhereInput)
    OR?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    @Type(() => DepartmentWhereInput)
    NOT?: Array<DepartmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    church_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    annual_budget?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contact_id?: StringNullableFilter;

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

    @Field(() => ChurchScalarRelationFilter, {nullable:true})
    @Type(() => ChurchScalarRelationFilter)
    church?: ChurchScalarRelationFilter;

    @Field(() => ContactNullableScalarRelationFilter, {nullable:true})
    @Type(() => ContactNullableScalarRelationFilter)
    contact?: ContactNullableScalarRelationFilter;

    @Field(() => SubsidyStatusListRelationFilter, {nullable:true})
    @Type(() => SubsidyStatusListRelationFilter)
    subsidy_statuses?: SubsidyStatusListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    @Type(() => ProjectListRelationFilter)
    projects?: ProjectListRelationFilter;

    @Field(() => AnnualReportListRelationFilter, {nullable:true})
    @Type(() => AnnualReportListRelationFilter)
    annual_reports?: AnnualReportListRelationFilter;

    @Field(() => SubsidyRequestListRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestListRelationFilter)
    subsidy_requests?: SubsidyRequestListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    @Type(() => UserListRelationFilter)
    users?: UserListRelationFilter;
}
