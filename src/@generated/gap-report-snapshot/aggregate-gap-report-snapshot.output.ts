import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GapReportSnapshotCountAggregate } from './gap-report-snapshot-count-aggregate.output';
import { GapReportSnapshotMinAggregate } from './gap-report-snapshot-min-aggregate.output';
import { GapReportSnapshotMaxAggregate } from './gap-report-snapshot-max-aggregate.output';

@ObjectType()
export class AggregateGapReportSnapshot {

    @Field(() => GapReportSnapshotCountAggregate, {nullable:true})
    _count?: GapReportSnapshotCountAggregate;

    @Field(() => GapReportSnapshotMinAggregate, {nullable:true})
    _min?: GapReportSnapshotMinAggregate;

    @Field(() => GapReportSnapshotMaxAggregate, {nullable:true})
    _max?: GapReportSnapshotMaxAggregate;
}
