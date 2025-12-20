import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumActivityTagsNullableListFilter } from '../prisma/enum-activity-tags-nullable-list-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumActivityTagsNullableFilter } from '../prisma/enum-activity-tags-nullable-filter.input';
import { EnumActivityStatusFilter } from '../prisma/enum-activity-status-filter.input';
import { EnumActivityPriorityFilter } from '../prisma/enum-activity-priority-filter.input';

@InputType()
export class ProjectActivityScalarWhereInput {

    @Field(() => [ProjectActivityScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereInput)
    AND?: Array<ProjectActivityScalarWhereInput>;

    @Field(() => [ProjectActivityScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereInput)
    OR?: Array<ProjectActivityScalarWhereInput>;

    @Field(() => [ProjectActivityScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereInput)
    NOT?: Array<ProjectActivityScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    budget_amount?: DecimalFilter;

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

    @Field(() => DateTimeFilter, {nullable:true})
    deadline?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    owner_id?: StringFilter;

    @Field(() => EnumActivityTagsNullableListFilter, {nullable:true})
    tags?: EnumActivityTagsNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    custom_tags?: StringNullableListFilter;

    @Field(() => EnumActivityTagsNullableFilter, {nullable:true})
    activity_tag?: EnumActivityTagsNullableFilter;

    @Field(() => EnumActivityStatusFilter, {nullable:true})
    status?: EnumActivityStatusFilter;

    @Field(() => EnumActivityPriorityFilter, {nullable:true})
    priority?: EnumActivityPriorityFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_subsidized?: BoolFilter;
}
