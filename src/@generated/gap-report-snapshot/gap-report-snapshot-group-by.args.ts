import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GapReportSnapshotWhereInput } from './gap-report-snapshot-where.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotOrderByWithAggregationInput } from './gap-report-snapshot-order-by-with-aggregation.input';
import { GapReportSnapshotScalarFieldEnum } from './gap-report-snapshot-scalar-field.enum';
import { GapReportSnapshotScalarWhereWithAggregatesInput } from './gap-report-snapshot-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GapReportSnapshotCountAggregateInput } from './gap-report-snapshot-count-aggregate.input';
import { GapReportSnapshotMinAggregateInput } from './gap-report-snapshot-min-aggregate.input';
import { GapReportSnapshotMaxAggregateInput } from './gap-report-snapshot-max-aggregate.input';

@ArgsType()
export class GapReportSnapshotGroupByArgs {

    @Field(() => GapReportSnapshotWhereInput, {nullable:true})
    @Type(() => GapReportSnapshotWhereInput)
    where?: GapReportSnapshotWhereInput;

    @Field(() => [GapReportSnapshotOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GapReportSnapshotOrderByWithAggregationInput>;

    @Field(() => [GapReportSnapshotScalarFieldEnum], {nullable:false})
    by!: Array<`${GapReportSnapshotScalarFieldEnum}`>;

    @Field(() => GapReportSnapshotScalarWhereWithAggregatesInput, {nullable:true})
    having?: GapReportSnapshotScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GapReportSnapshotCountAggregateInput, {nullable:true})
    _count?: GapReportSnapshotCountAggregateInput;

    @Field(() => GapReportSnapshotMinAggregateInput, {nullable:true})
    _min?: GapReportSnapshotMinAggregateInput;

    @Field(() => GapReportSnapshotMaxAggregateInput, {nullable:true})
    _max?: GapReportSnapshotMaxAggregateInput;
}
