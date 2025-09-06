import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class DepartmentScalarWhereInput {

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    AND?: Array<DepartmentScalarWhereInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    OR?: Array<DepartmentScalarWhereInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    NOT?: Array<DepartmentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
