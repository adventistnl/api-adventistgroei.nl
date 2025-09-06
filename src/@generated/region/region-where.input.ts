import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { RegionNullableScalarRelationFilter } from './region-nullable-scalar-relation-filter.input';
import { RegionListRelationFilter } from './region-list-relation-filter.input';
import { ContactNullableScalarRelationFilter } from '../contact/contact-nullable-scalar-relation-filter.input';
import { ChurchListRelationFilter } from '../church/church-list-relation-filter.input';

@InputType()
export class RegionWhereInput {

    @Field(() => [RegionWhereInput], {nullable:true})
    AND?: Array<RegionWhereInput>;

    @Field(() => [RegionWhereInput], {nullable:true})
    OR?: Array<RegionWhereInput>;

    @Field(() => [RegionWhereInput], {nullable:true})
    NOT?: Array<RegionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parent_region_id?: StringNullableFilter;

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

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;

    @Field(() => RegionNullableScalarRelationFilter, {nullable:true})
    parent_region?: RegionNullableScalarRelationFilter;

    @Field(() => RegionListRelationFilter, {nullable:true})
    children?: RegionListRelationFilter;

    @Field(() => ContactNullableScalarRelationFilter, {nullable:true})
    @Type(() => ContactNullableScalarRelationFilter)
    contact?: ContactNullableScalarRelationFilter;

    @Field(() => ChurchListRelationFilter, {nullable:true})
    @Type(() => ChurchListRelationFilter)
    churches?: ChurchListRelationFilter;
}
