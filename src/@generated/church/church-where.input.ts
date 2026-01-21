import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumChurchTypeFilter } from '../prisma/enum-church-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { RegionNullableScalarRelationFilter } from '../region/region-nullable-scalar-relation-filter.input';
import { ContactNullableScalarRelationFilter } from '../contact/contact-nullable-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { DepartmentListRelationFilter } from '../department/department-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { SubsidyRequestListRelationFilter } from '../subsidy-request/subsidy-request-list-relation-filter.input';
import { AnnualBudgetListRelationFilter } from '../annual-budget/annual-budget-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';

@InputType()
export class ChurchWhereInput {

    @Field(() => [ChurchWhereInput], {nullable:true})
    AND?: Array<ChurchWhereInput>;

    @Field(() => [ChurchWhereInput], {nullable:true})
    OR?: Array<ChurchWhereInput>;

    @Field(() => [ChurchWhereInput], {nullable:true})
    NOT?: Array<ChurchWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumChurchTypeFilter, {nullable:true})
    type?: EnumChurchTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    region_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contact_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    leader_id?: StringNullableFilter;

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

    @Field(() => RegionNullableScalarRelationFilter, {nullable:true})
    region?: RegionNullableScalarRelationFilter;

    @Field(() => ContactNullableScalarRelationFilter, {nullable:true})
    @Type(() => ContactNullableScalarRelationFilter)
    contact?: ContactNullableScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    @Type(() => UserNullableScalarRelationFilter)
    leader?: UserNullableScalarRelationFilter;

    @Field(() => DepartmentListRelationFilter, {nullable:true})
    @Type(() => DepartmentListRelationFilter)
    departments?: DepartmentListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    @Type(() => UserListRelationFilter)
    users?: UserListRelationFilter;

    @Field(() => SubsidyRequestListRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestListRelationFilter)
    subsidy_requests?: SubsidyRequestListRelationFilter;

    @Field(() => AnnualBudgetListRelationFilter, {nullable:true})
    @Type(() => AnnualBudgetListRelationFilter)
    annual_budgets?: AnnualBudgetListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    @Type(() => ProjectListRelationFilter)
    projects?: ProjectListRelationFilter;
}
