import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumActivityTagsNullableListFilter } from '../prisma/enum-activity-tags-nullable-list-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumActivityTagsNullableWithAggregatesFilter } from '../prisma/enum-activity-tags-nullable-with-aggregates-filter.input';
import { EnumActivityStatusWithAggregatesFilter } from '../prisma/enum-activity-status-with-aggregates-filter.input';
import { EnumActivityPriorityWithAggregatesFilter } from '../prisma/enum-activity-priority-with-aggregates-filter.input';

@InputType()
export class ProjectActivityScalarWhereWithAggregatesInput {

    @Field(() => [ProjectActivityScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereWithAggregatesInput)
    AND?: Array<ProjectActivityScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectActivityScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereWithAggregatesInput)
    OR?: Array<ProjectActivityScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectActivityScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereWithAggregatesInput)
    NOT?: Array<ProjectActivityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    project_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    budget_amount?: DecimalWithAggregatesFilter;

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

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    deadline?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    owner_id?: StringWithAggregatesFilter;

    @Field(() => EnumActivityTagsNullableListFilter, {nullable:true})
    tags?: EnumActivityTagsNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    custom_tags?: StringNullableListFilter;

    @Field(() => EnumActivityTagsNullableWithAggregatesFilter, {nullable:true})
    activity_tag?: EnumActivityTagsNullableWithAggregatesFilter;

    @Field(() => EnumActivityStatusWithAggregatesFilter, {nullable:true})
    status?: EnumActivityStatusWithAggregatesFilter;

    @Field(() => EnumActivityPriorityWithAggregatesFilter, {nullable:true})
    priority?: EnumActivityPriorityWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_subsidized?: BoolWithAggregatesFilter;
}
