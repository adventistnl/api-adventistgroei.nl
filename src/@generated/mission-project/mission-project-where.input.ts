import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { InstitutionNullableScalarRelationFilter } from '../institution/institution-nullable-scalar-relation-filter.input';

@InputType()
export class MissionProjectWhereInput {

    @Field(() => [MissionProjectWhereInput], {nullable:true})
    @Type(() => MissionProjectWhereInput)
    AND?: Array<MissionProjectWhereInput>;

    @Field(() => [MissionProjectWhereInput], {nullable:true})
    @Type(() => MissionProjectWhereInput)
    OR?: Array<MissionProjectWhereInput>;

    @Field(() => [MissionProjectWhereInput], {nullable:true})
    @Type(() => MissionProjectWhereInput)
    NOT?: Array<MissionProjectWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    department_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    budget?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    media_link?: StringFilter;

    @Field(() => EnumLanguagePreferenceFilter, {nullable:true})
    language_preference?: EnumLanguagePreferenceFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    institution_id?: StringNullableFilter;

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentScalarRelationFilter)
    department?: DepartmentScalarRelationFilter;

    @Field(() => InstitutionNullableScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionNullableScalarRelationFilter)
    Institution?: InstitutionNullableScalarRelationFilter;
}
