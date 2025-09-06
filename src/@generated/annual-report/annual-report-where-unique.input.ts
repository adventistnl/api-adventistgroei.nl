import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualReportWhereInput } from './annual-report-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualReportWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AnnualReportWhereInput], {nullable:true})
    AND?: Array<AnnualReportWhereInput>;

    @Field(() => [AnnualReportWhereInput], {nullable:true})
    OR?: Array<AnnualReportWhereInput>;

    @Field(() => [AnnualReportWhereInput], {nullable:true})
    NOT?: Array<AnnualReportWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    department_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    file_path?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    submission_date?: DateTimeFilter;

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

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentScalarRelationFilter)
    department?: DepartmentScalarRelationFilter;
}
