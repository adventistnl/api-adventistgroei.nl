import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarChurch_idDateCompoundUniqueInput } from './church-service-calendar-church-id-date-compound-unique.input';
import { ChurchServiceCalendarWhereInput } from './church-service-calendar-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumServiceCalendarSourceFilter } from '../prisma/enum-service-calendar-source-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { ChurchScalarRelationFilter } from '../church/church-scalar-relation-filter.input';

@InputType()
export class ChurchServiceCalendarWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChurchServiceCalendarChurch_idDateCompoundUniqueInput, {nullable:true})
    church_id_date?: ChurchServiceCalendarChurch_idDateCompoundUniqueInput;

    @Field(() => [ChurchServiceCalendarWhereInput], {nullable:true})
    AND?: Array<ChurchServiceCalendarWhereInput>;

    @Field(() => [ChurchServiceCalendarWhereInput], {nullable:true})
    OR?: Array<ChurchServiceCalendarWhereInput>;

    @Field(() => [ChurchServiceCalendarWhereInput], {nullable:true})
    NOT?: Array<ChurchServiceCalendarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    church_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    has_service?: BoolFilter;

    @Field(() => EnumServiceCalendarSourceFilter, {nullable:true})
    source?: EnumServiceCalendarSourceFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updated_by?: StringFilter;

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;

    @Field(() => ChurchScalarRelationFilter, {nullable:true})
    @Type(() => ChurchScalarRelationFilter)
    church?: ChurchScalarRelationFilter;
}
