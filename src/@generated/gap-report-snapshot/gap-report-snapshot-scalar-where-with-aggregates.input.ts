import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class GapReportSnapshotScalarWhereWithAggregatesInput {

    @Field(() => [GapReportSnapshotScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GapReportSnapshotScalarWhereWithAggregatesInput>;

    @Field(() => [GapReportSnapshotScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GapReportSnapshotScalarWhereWithAggregatesInput>;

    @Field(() => [GapReportSnapshotScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GapReportSnapshotScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    institution_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    month?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    churches_without_preacher?: JsonWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    preachers_without_assignment?: JsonWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    computed_at?: DateTimeWithAggregatesFilter;
}
