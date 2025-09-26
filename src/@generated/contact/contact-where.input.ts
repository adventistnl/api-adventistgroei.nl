import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { InstitutionNullableScalarRelationFilter } from '../institution/institution-nullable-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { RegionListRelationFilter } from '../region/region-list-relation-filter.input';
import { ChurchListRelationFilter } from '../church/church-list-relation-filter.input';
import { DepartmentListRelationFilter } from '../department/department-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';

@InputType()
export class ContactWhereInput {

    @Field(() => [ContactWhereInput], {nullable:true})
    AND?: Array<ContactWhereInput>;

    @Field(() => [ContactWhereInput], {nullable:true})
    OR?: Array<ContactWhereInput>;

    @Field(() => [ContactWhereInput], {nullable:true})
    NOT?: Array<ContactWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    full_address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    postal_code?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_primary?: BoolFilter;

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

    @Field(() => InstitutionNullableScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionNullableScalarRelationFilter)
    Institution?: InstitutionNullableScalarRelationFilter;

    @Field(() => RegionListRelationFilter, {nullable:true})
    @Type(() => RegionListRelationFilter)
    Region?: RegionListRelationFilter;

    @Field(() => ChurchListRelationFilter, {nullable:true})
    @Type(() => ChurchListRelationFilter)
    Church?: ChurchListRelationFilter;

    @Field(() => DepartmentListRelationFilter, {nullable:true})
    @Type(() => DepartmentListRelationFilter)
    Department?: DepartmentListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    @Type(() => UserListRelationFilter)
    User?: UserListRelationFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    @Type(() => EventListRelationFilter)
    Event?: EventListRelationFilter;
}
