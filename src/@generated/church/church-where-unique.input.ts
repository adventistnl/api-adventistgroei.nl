import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { EnumChurchTypeFilter } from '../prisma/enum-church-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { RegionScalarRelationFilter } from '../region/region-scalar-relation-filter.input';
import { ContactNullableScalarRelationFilter } from '../contact/contact-nullable-scalar-relation-filter.input';
import { DepartmentListRelationFilter } from '../department/department-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { SubsidyRequestListRelationFilter } from '../subsidy-request/subsidy-request-list-relation-filter.input';
import { AnnualBudgetListRelationFilter } from '../annual-budget/annual-budget-list-relation-filter.input';

@InputType()
export class ChurchWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ChurchWhereInput], {nullable:true})
    AND?: Array<ChurchWhereInput>;

    @Field(() => [ChurchWhereInput], {nullable:true})
    OR?: Array<ChurchWhereInput>;

    @Field(() => [ChurchWhereInput], {nullable:true})
    NOT?: Array<ChurchWhereInput>;

    @Field(() => EnumChurchTypeFilter, {nullable:true})
    type?: EnumChurchTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    region_id?: StringFilter;

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

    @Field(() => RegionScalarRelationFilter, {nullable:true})
    @Type(() => RegionScalarRelationFilter)
    region?: RegionScalarRelationFilter;

    @Field(() => ContactNullableScalarRelationFilter, {nullable:true})
    @Type(() => ContactNullableScalarRelationFilter)
    contact?: ContactNullableScalarRelationFilter;

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
}
