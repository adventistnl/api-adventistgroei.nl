import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDocumentsWhereInput } from './activity-documents-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProjectActivityNullableScalarRelationFilter } from '../project-activity/project-activity-nullable-scalar-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class ActivityDocumentsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ActivityDocumentsWhereInput], {nullable:true})
    AND?: Array<ActivityDocumentsWhereInput>;

    @Field(() => [ActivityDocumentsWhereInput], {nullable:true})
    OR?: Array<ActivityDocumentsWhereInput>;

    @Field(() => [ActivityDocumentsWhereInput], {nullable:true})
    NOT?: Array<ActivityDocumentsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    activity_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    file_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_validated?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    uploaded_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    validated_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    project_activity_id?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_deleted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deleted_by?: StringNullableFilter;

    @Field(() => ProjectActivityNullableScalarRelationFilter, {nullable:true})
    @Type(() => ProjectActivityNullableScalarRelationFilter)
    project_activity?: ProjectActivityNullableScalarRelationFilter;
}
