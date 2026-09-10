import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumRequestTypeFilter } from '../prisma/enum-request-type-filter.input';
import { EnumRequestStatusFilter } from '../prisma/enum-request-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { ChurchScalarRelationFilter } from '../church/church-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { AssignmentInviteTemplateNullableScalarRelationFilter } from '../assignment-invite-template/assignment-invite-template-nullable-scalar-relation-filter.input';

@InputType()
export class AssignmentRequestWhereInput {

    @Field(() => [AssignmentRequestWhereInput], {nullable:true})
    AND?: Array<AssignmentRequestWhereInput>;

    @Field(() => [AssignmentRequestWhereInput], {nullable:true})
    OR?: Array<AssignmentRequestWhereInput>;

    @Field(() => [AssignmentRequestWhereInput], {nullable:true})
    NOT?: Array<AssignmentRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    church_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => EnumRequestTypeFilter, {nullable:true})
    type?: EnumRequestTypeFilter;

    @Field(() => EnumRequestStatusFilter, {nullable:true})
    status?: EnumRequestStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    template_id?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    decided_at?: DateTimeNullableFilter;

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

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;

    @Field(() => AssignmentInviteTemplateNullableScalarRelationFilter, {nullable:true})
    template?: AssignmentInviteTemplateNullableScalarRelationFilter;
}
