import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingWhereInput } from './setting-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class SettingWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SettingWhereInput], {nullable:true})
    AND?: Array<SettingWhereInput>;

    @Field(() => [SettingWhereInput], {nullable:true})
    OR?: Array<SettingWhereInput>;

    @Field(() => [SettingWhereInput], {nullable:true})
    NOT?: Array<SettingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

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
}
