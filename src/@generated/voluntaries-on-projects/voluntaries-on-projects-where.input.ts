import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { ProjectScalarRelationFilter } from '../project/project-scalar-relation-filter.input';

@InputType()
export class VoluntariesOnProjectsWhereInput {

    @Field(() => [VoluntariesOnProjectsWhereInput], {nullable:true})
    AND?: Array<VoluntariesOnProjectsWhereInput>;

    @Field(() => [VoluntariesOnProjectsWhereInput], {nullable:true})
    OR?: Array<VoluntariesOnProjectsWhereInput>;

    @Field(() => [VoluntariesOnProjectsWhereInput], {nullable:true})
    NOT?: Array<VoluntariesOnProjectsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_id?: StringFilter;

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

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;

    @Field(() => ProjectScalarRelationFilter, {nullable:true})
    @Type(() => ProjectScalarRelationFilter)
    project?: ProjectScalarRelationFilter;
}
