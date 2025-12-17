import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { EnumProjectTypeFilter } from '../prisma/enum-project-type-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProjectScalarWhereInput {

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    AND?: Array<ProjectScalarWhereInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    OR?: Array<ProjectScalarWhereInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    NOT?: Array<ProjectScalarWhereInput>;

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
    owner_id?: StringFilter;

    @Field(() => EnumLanguagePreferenceFilter, {nullable:true})
    language_preference?: EnumLanguagePreferenceFilter;

    @Field(() => EnumProjectTypeFilter, {nullable:true})
    type?: EnumProjectTypeFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_private?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    required_volunteers?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    start_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    end_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deadline?: DateTimeNullableFilter;

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
    event_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    institution_id?: StringNullableFilter;
}
