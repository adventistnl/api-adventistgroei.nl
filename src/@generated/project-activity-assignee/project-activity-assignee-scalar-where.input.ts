import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProjectActivityAssigneeScalarWhereInput {

    @Field(() => [ProjectActivityAssigneeScalarWhereInput], {nullable:true})
    AND?: Array<ProjectActivityAssigneeScalarWhereInput>;

    @Field(() => [ProjectActivityAssigneeScalarWhereInput], {nullable:true})
    OR?: Array<ProjectActivityAssigneeScalarWhereInput>;

    @Field(() => [ProjectActivityAssigneeScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectActivityAssigneeScalarWhereInput>;

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
}
