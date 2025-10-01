import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsWhereInput } from './special-projects-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ProjectNullableScalarRelationFilter } from '../project/project-nullable-scalar-relation-filter.input';
import { SubsidyStatusNullableScalarRelationFilter } from '../subsidy-status/subsidy-status-nullable-scalar-relation-filter.input';

@InputType()
export class SpecialProjectsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SpecialProjectsWhereInput], {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    AND?: Array<SpecialProjectsWhereInput>;

    @Field(() => [SpecialProjectsWhereInput], {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    OR?: Array<SpecialProjectsWhereInput>;

    @Field(() => [SpecialProjectsWhereInput], {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    NOT?: Array<SpecialProjectsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    department_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    institution_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    project_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    justification_note?: StringNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    budget?: DecimalNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    subsidy_statuses_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location_church_plant?: StringNullableFilter;

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

    @Field(() => ProjectNullableScalarRelationFilter, {nullable:true})
    @Type(() => ProjectNullableScalarRelationFilter)
    project?: ProjectNullableScalarRelationFilter;

    @Field(() => SubsidyStatusNullableScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyStatusNullableScalarRelationFilter)
    subsidy_status?: SubsidyStatusNullableScalarRelationFilter;
}
