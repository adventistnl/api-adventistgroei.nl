import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumAdjustmentStatusWithAggregatesFilter } from '../prisma/enum-adjustment-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProjectAdjustmentScalarWhereWithAggregatesInput {

    @Field(() => [ProjectAdjustmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectAdjustmentScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectAdjustmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectAdjustmentScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectAdjustmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectAdjustmentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    project_history_id?: StringWithAggregatesFilter;

    @Field(() => EnumAdjustmentStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAdjustmentStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    updated_by?: StringWithAggregatesFilter;
}
