import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectActivityScalarRelationFilter } from '../project-activity/project-activity-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class ProjectActivityAssigneeWhereInput {

    @Field(() => [ProjectActivityAssigneeWhereInput], {nullable:true})
    AND?: Array<ProjectActivityAssigneeWhereInput>;

    @Field(() => [ProjectActivityAssigneeWhereInput], {nullable:true})
    OR?: Array<ProjectActivityAssigneeWhereInput>;

    @Field(() => [ProjectActivityAssigneeWhereInput], {nullable:true})
    NOT?: Array<ProjectActivityAssigneeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    activity_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => ProjectActivityScalarRelationFilter, {nullable:true})
    @Type(() => ProjectActivityScalarRelationFilter)
    activity?: ProjectActivityScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;
}
