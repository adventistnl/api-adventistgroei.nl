import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GapReportSnapshotScalarWhereInput {

    @Field(() => [GapReportSnapshotScalarWhereInput], {nullable:true})
    AND?: Array<GapReportSnapshotScalarWhereInput>;

    @Field(() => [GapReportSnapshotScalarWhereInput], {nullable:true})
    OR?: Array<GapReportSnapshotScalarWhereInput>;

    @Field(() => [GapReportSnapshotScalarWhereInput], {nullable:true})
    NOT?: Array<GapReportSnapshotScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    month?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    churches_without_preacher?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    preachers_without_assignment?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    computed_at?: DateTimeFilter;
}
