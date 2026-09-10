import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumAssignmentOriginWithAggregatesFilter } from '../prisma/enum-assignment-origin-with-aggregates-filter.input';
import { EnumAssignmentStatusWithAggregatesFilter } from '../prisma/enum-assignment-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class AssignmentScalarWhereWithAggregatesInput {

    @Field(() => [AssignmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AssignmentScalarWhereWithAggregatesInput>;

    @Field(() => [AssignmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AssignmentScalarWhereWithAggregatesInput>;

    @Field(() => [AssignmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AssignmentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    institution_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    church_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    user_id?: StringNullableWithAggregatesFilter;

    @Field(() => EnumAssignmentOriginWithAggregatesFilter, {nullable:true})
    origin?: EnumAssignmentOriginWithAggregatesFilter;

    @Field(() => EnumAssignmentStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAssignmentStatusWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    locked_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    updated_by?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_deleted?: BoolWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deleted_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    deleted_by?: StringNullableWithAggregatesFilter;
}
