import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AssignmentHistoryScalarWhereWithAggregatesInput {

    @Field(() => [AssignmentHistoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AssignmentHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [AssignmentHistoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AssignmentHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [AssignmentHistoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AssignmentHistoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assignment_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    field_name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    old_value?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    new_value?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    changed_by?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    changed_at?: DateTimeWithAggregatesFilter;
}
