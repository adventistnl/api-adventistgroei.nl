import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PreacherRegionAccessScalarWhereWithAggregatesInput {

    @Field(() => [PreacherRegionAccessScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PreacherRegionAccessScalarWhereWithAggregatesInput>;

    @Field(() => [PreacherRegionAccessScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PreacherRegionAccessScalarWhereWithAggregatesInput>;

    @Field(() => [PreacherRegionAccessScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PreacherRegionAccessScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    institution_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    region_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;
}
