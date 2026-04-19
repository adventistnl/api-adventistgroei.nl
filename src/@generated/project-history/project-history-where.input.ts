import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProjectHistoryTypeFilter } from '../prisma/enum-project-history-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectScalarRelationFilter } from '../project/project-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { ProjectAdjustmentNullableScalarRelationFilter } from '../project-adjustment/project-adjustment-nullable-scalar-relation-filter.input';

@InputType()
export class ProjectHistoryWhereInput {

    @Field(() => [ProjectHistoryWhereInput], {nullable:true})
    AND?: Array<ProjectHistoryWhereInput>;

    @Field(() => [ProjectHistoryWhereInput], {nullable:true})
    OR?: Array<ProjectHistoryWhereInput>;

    @Field(() => [ProjectHistoryWhereInput], {nullable:true})
    NOT?: Array<ProjectHistoryWhereInput>;

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

    @Field(() => ProjectScalarRelationFilter, {nullable:true})
    @Type(() => ProjectScalarRelationFilter)
    project?: ProjectScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;

    @Field(() => ProjectAdjustmentNullableScalarRelationFilter, {nullable:true})
    adjustment?: ProjectAdjustmentNullableScalarRelationFilter;
}
