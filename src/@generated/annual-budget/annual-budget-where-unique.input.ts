import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumAnnualBudgetStatusFilter } from '../prisma/enum-annual-budget-status-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { InstitutionNullableScalarRelationFilter } from '../institution/institution-nullable-scalar-relation-filter.input';
import { RegionNullableScalarRelationFilter } from '../region/region-nullable-scalar-relation-filter.input';
import { ChurchNullableScalarRelationFilter } from '../church/church-nullable-scalar-relation-filter.input';
import { DepartmentNullableScalarRelationFilter } from '../department/department-nullable-scalar-relation-filter.input';

@InputType()
export class AnnualBudgetWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AnnualBudgetWhereInput], {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    AND?: Array<AnnualBudgetWhereInput>;

    @Field(() => [AnnualBudgetWhereInput], {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    OR?: Array<AnnualBudgetWhereInput>;

    @Field(() => [AnnualBudgetWhereInput], {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    NOT?: Array<AnnualBudgetWhereInput>;

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
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    justification?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    approved_by?: StringNullableFilter;

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

    @Field(() => EnumAnnualBudgetStatusFilter, {nullable:true})
    status?: EnumAnnualBudgetStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    institution_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    region_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    church_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    department_id?: StringNullableFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    @Type(() => UserNullableScalarRelationFilter)
    approved_user?: UserNullableScalarRelationFilter;

    @Field(() => InstitutionNullableScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionNullableScalarRelationFilter)
    institution?: InstitutionNullableScalarRelationFilter;

    @Field(() => RegionNullableScalarRelationFilter, {nullable:true})
    @Type(() => RegionNullableScalarRelationFilter)
    region?: RegionNullableScalarRelationFilter;

    @Field(() => ChurchNullableScalarRelationFilter, {nullable:true})
    @Type(() => ChurchNullableScalarRelationFilter)
    church?: ChurchNullableScalarRelationFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentNullableScalarRelationFilter)
    department?: DepartmentNullableScalarRelationFilter;
}
