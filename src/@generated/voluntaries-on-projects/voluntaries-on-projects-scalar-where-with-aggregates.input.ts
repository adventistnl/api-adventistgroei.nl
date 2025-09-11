import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class VoluntariesOnProjectsScalarWhereWithAggregatesInput {

    @Field(() => [VoluntariesOnProjectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VoluntariesOnProjectsScalarWhereWithAggregatesInput>;

    @Field(() => [VoluntariesOnProjectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VoluntariesOnProjectsScalarWhereWithAggregatesInput>;

    @Field(() => [VoluntariesOnProjectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VoluntariesOnProjectsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    project_id?: StringWithAggregatesFilter;
}
