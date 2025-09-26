import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumAnnualBudgetStatusFilter } from '../prisma/enum-annual-budget-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { InstitutionListRelationFilter } from '../institution/institution-list-relation-filter.input';
import { RegionListRelationFilter } from '../region/region-list-relation-filter.input';
import { ChurchListRelationFilter } from '../church/church-list-relation-filter.input';
import { DepartmentListRelationFilter } from '../department/department-list-relation-filter.input';

@InputType()
export class AnnualBudgetWhereInput {

    @Field(() => [AnnualBudgetWhereInput], {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    AND?: Array<AnnualBudgetWhereInput>;

    @Field(() => [AnnualBudgetWhereInput], {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    OR?: Array<AnnualBudgetWhereInput>;

    @Field(() => [AnnualBudgetWhereInput], {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    NOT?: Array<AnnualBudgetWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    year?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    planned_budget?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    total_expenses?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    balance?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    approved_by?: StringNullableFilter;

    @Field(() => EnumAnnualBudgetStatusFilter, {nullable:true})
    status?: EnumAnnualBudgetStatusFilter;

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

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    @Type(() => UserNullableScalarRelationFilter)
    approved_user?: UserNullableScalarRelationFilter;

    @Field(() => InstitutionListRelationFilter, {nullable:true})
    @Type(() => InstitutionListRelationFilter)
    institutions?: InstitutionListRelationFilter;

    @Field(() => RegionListRelationFilter, {nullable:true})
    @Type(() => RegionListRelationFilter)
    regions?: RegionListRelationFilter;

    @Field(() => ChurchListRelationFilter, {nullable:true})
    @Type(() => ChurchListRelationFilter)
    churches?: ChurchListRelationFilter;

    @Field(() => DepartmentListRelationFilter, {nullable:true})
    @Type(() => DepartmentListRelationFilter)
    departments?: DepartmentListRelationFilter;
}
