import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AssignmentHistoryWhereInput {

    @Field(() => [AssignmentHistoryWhereInput], {nullable:true})
    AND?: Array<AssignmentHistoryWhereInput>;

    @Field(() => [AssignmentHistoryWhereInput], {nullable:true})
    OR?: Array<AssignmentHistoryWhereInput>;

    @Field(() => [AssignmentHistoryWhereInput], {nullable:true})
    NOT?: Array<AssignmentHistoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    assignment_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    field_name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    old_value?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    new_value?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    changed_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    changed_at?: DateTimeFilter;
}
