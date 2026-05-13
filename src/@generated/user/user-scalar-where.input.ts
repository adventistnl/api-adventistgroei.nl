import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGenderTypeNullableFilter } from '../prisma/enum-gender-type-nullable-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {

    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => EnumGenderTypeNullableFilter, {nullable:true})
    gender?: EnumGenderTypeNullableFilter;

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

    @Field(() => BoolFilter, {nullable:true})
    recieve_emails?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contact_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    church_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    department_id?: StringNullableFilter;
}
