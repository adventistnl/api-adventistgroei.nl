import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { AssignmentRequestListRelationFilter } from '../assignment-request/assignment-request-list-relation-filter.input';

@InputType()
export class AssignmentInviteTemplateWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AssignmentInviteTemplateWhereInput], {nullable:true})
    AND?: Array<AssignmentInviteTemplateWhereInput>;

    @Field(() => [AssignmentInviteTemplateWhereInput], {nullable:true})
    OR?: Array<AssignmentInviteTemplateWhereInput>;

    @Field(() => [AssignmentInviteTemplateWhereInput], {nullable:true})
    NOT?: Array<AssignmentInviteTemplateWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

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

    @Field(() => AssignmentRequestListRelationFilter, {nullable:true})
    requests?: AssignmentRequestListRelationFilter;
}
