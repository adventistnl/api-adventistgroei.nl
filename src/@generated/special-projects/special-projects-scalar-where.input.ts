import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SpecialProjectsScalarWhereInput {

    @Field(() => [SpecialProjectsScalarWhereInput], {nullable:true})
    @Type(() => SpecialProjectsScalarWhereInput)
    AND?: Array<SpecialProjectsScalarWhereInput>;

    @Field(() => [SpecialProjectsScalarWhereInput], {nullable:true})
    @Type(() => SpecialProjectsScalarWhereInput)
    OR?: Array<SpecialProjectsScalarWhereInput>;

    @Field(() => [SpecialProjectsScalarWhereInput], {nullable:true})
    @Type(() => SpecialProjectsScalarWhereInput)
    NOT?: Array<SpecialProjectsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
