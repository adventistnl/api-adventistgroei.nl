import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProjectHistoryTypeFilter } from '../prisma/enum-project-history-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProjectHistoryScalarWhereInput {

    @Field(() => [ProjectHistoryScalarWhereInput], {nullable:true})
    AND?: Array<ProjectHistoryScalarWhereInput>;

    @Field(() => [ProjectHistoryScalarWhereInput], {nullable:true})
    OR?: Array<ProjectHistoryScalarWhereInput>;

    @Field(() => [ProjectHistoryScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectHistoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => EnumProjectHistoryTypeFilter, {nullable:true})
    type?: EnumProjectHistoryTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comment?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    field_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    old_value?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    new_value?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;
}
