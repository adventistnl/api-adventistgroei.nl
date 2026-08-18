import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumAssignmentOriginFilter } from '../prisma/enum-assignment-origin-filter.input';
import { EnumAssignmentStatusFilter } from '../prisma/enum-assignment-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class AssignmentScalarWhereInput {

    @Field(() => [AssignmentScalarWhereInput], {nullable:true})
    AND?: Array<AssignmentScalarWhereInput>;

    @Field(() => [AssignmentScalarWhereInput], {nullable:true})
    OR?: Array<AssignmentScalarWhereInput>;

    @Field(() => [AssignmentScalarWhereInput], {nullable:true})
    NOT?: Array<AssignmentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
