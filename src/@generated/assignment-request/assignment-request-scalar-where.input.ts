import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumRequestTypeFilter } from '../prisma/enum-request-type-filter.input';
import { EnumRequestStatusFilter } from '../prisma/enum-request-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class AssignmentRequestScalarWhereInput {

    @Field(() => [AssignmentRequestScalarWhereInput], {nullable:true})
    AND?: Array<AssignmentRequestScalarWhereInput>;

    @Field(() => [AssignmentRequestScalarWhereInput], {nullable:true})
    OR?: Array<AssignmentRequestScalarWhereInput>;

    @Field(() => [AssignmentRequestScalarWhereInput], {nullable:true})
    NOT?: Array<AssignmentRequestScalarWhereInput>;

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
}
