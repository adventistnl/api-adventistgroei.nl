import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentChurch_idDateCompoundUniqueInput } from './assignment-church-id-date-compound-unique.input';
import { AssignmentWhereInput } from './assignment-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumAssignmentOriginFilter } from '../prisma/enum-assignment-origin-filter.input';
import { EnumAssignmentStatusFilter } from '../prisma/enum-assignment-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { ChurchScalarRelationFilter } from '../church/church-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class AssignmentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AssignmentChurch_idDateCompoundUniqueInput, {nullable:true})
    church_id_date?: AssignmentChurch_idDateCompoundUniqueInput;

    @Field(() => [AssignmentWhereInput], {nullable:true})
    AND?: Array<AssignmentWhereInput>;

    @Field(() => [AssignmentWhereInput], {nullable:true})
    OR?: Array<AssignmentWhereInput>;

    @Field(() => [AssignmentWhereInput], {nullable:true})
    NOT?: Array<AssignmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    church_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    user_id?: StringNullableFilter;

    @Field(() => EnumAssignmentOriginFilter, {nullable:true})
    origin?: EnumAssignmentOriginFilter;

    @Field(() => EnumAssignmentStatusFilter, {nullable:true})
    status?: EnumAssignmentStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    locked_at?: DateTimeNullableFilter;

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

    @Field(() => ChurchScalarRelationFilter, {nullable:true})
    @Type(() => ChurchScalarRelationFilter)
    church?: ChurchScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    @Type(() => UserNullableScalarRelationFilter)
    user?: UserNullableScalarRelationFilter;
}
