import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';
import { EnumAdjustmentStatusFilter } from '../prisma/enum-adjustment-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProjectHistoryScalarRelationFilter } from '../project-history/project-history-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskListRelationFilter } from '../adjustment-task/adjustment-task-list-relation-filter.input';

@InputType()
export class ProjectAdjustmentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    project_history_id?: string;

    @Field(() => [ProjectAdjustmentWhereInput], {nullable:true})
    AND?: Array<ProjectAdjustmentWhereInput>;

    @Field(() => [ProjectAdjustmentWhereInput], {nullable:true})
    OR?: Array<ProjectAdjustmentWhereInput>;

    @Field(() => [ProjectAdjustmentWhereInput], {nullable:true})
    NOT?: Array<ProjectAdjustmentWhereInput>;

    @Field(() => EnumAdjustmentStatusFilter, {nullable:true})
    status?: EnumAdjustmentStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updated_by?: StringFilter;

    @Field(() => ProjectHistoryScalarRelationFilter, {nullable:true})
    @Type(() => ProjectHistoryScalarRelationFilter)
    project_history?: ProjectHistoryScalarRelationFilter;

    @Field(() => AdjustmentTaskListRelationFilter, {nullable:true})
    tasks?: AdjustmentTaskListRelationFilter;
}
