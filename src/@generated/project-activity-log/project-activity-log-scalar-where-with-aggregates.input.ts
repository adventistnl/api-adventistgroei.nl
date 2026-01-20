import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumProjectActivityLogActionWithAggregatesFilter } from '../prisma/enum-project-activity-log-action-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProjectActivityLogScalarWhereWithAggregatesInput {

    @Field(() => [ProjectActivityLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectActivityLogScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectActivityLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectActivityLogScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectActivityLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectActivityLogScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    activity_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => EnumProjectActivityLogActionWithAggregatesFilter, {nullable:true})
    action?: EnumProjectActivityLogActionWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    field_name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    old_value?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    new_value?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;
}
