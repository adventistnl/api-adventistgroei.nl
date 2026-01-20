import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProjectActivityLogActionFilter } from '../prisma/enum-project-activity-log-action-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectActivityScalarRelationFilter } from '../project-activity/project-activity-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class ProjectActivityLogWhereInput {

    @Field(() => [ProjectActivityLogWhereInput], {nullable:true})
    AND?: Array<ProjectActivityLogWhereInput>;

    @Field(() => [ProjectActivityLogWhereInput], {nullable:true})
    OR?: Array<ProjectActivityLogWhereInput>;

    @Field(() => [ProjectActivityLogWhereInput], {nullable:true})
    NOT?: Array<ProjectActivityLogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    activity_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => EnumProjectActivityLogActionFilter, {nullable:true})
    action?: EnumProjectActivityLogActionFilter;

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

    @Field(() => ProjectActivityScalarRelationFilter, {nullable:true})
    @Type(() => ProjectActivityScalarRelationFilter)
    activity?: ProjectActivityScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;
}
