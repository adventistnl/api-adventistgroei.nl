import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProjectActivityAssigneeScalarWhereWithAggregatesInput {

    @Field(() => [ProjectActivityAssigneeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectActivityAssigneeScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectActivityAssigneeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectActivityAssigneeScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectActivityAssigneeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectActivityAssigneeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    activity_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;
}
